

import { useState, useEffect, useRef, useCallback } from 'react';
import type { ChangeEvent } from 'react';
import { Button } from './ui/button';
import { EnhancedButton } from './ui/enhanced-button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { generateRandomText } from '../lib/text-generator';
import { Clock, Repeat, Share2, Settings, Download } from 'lucide-react';
import ResultsDisplay from './results-display';
import type { Difficulty } from '../lib/text-generator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "./ui/dialog";
import { Label } from './ui/label';
import { jsPDF } from 'jspdf';
import { useToast } from "../hooks/use-toast";

type TestStatus = 'idle' | 'running' | 'finished';

// We'll use a data URL for the keypress sound to avoid file system dependencies
// This is a very short, simple click sound encoded as a data URL
const KEYPRESS_SOUND_SRC = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADwAD///////////////////////////////////////////8AAAA8TEFNRTMuMTAwAc0AAAAAAAAAABSAJAJAQgAAgAAAA8DcWcGpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

const TypingTest = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [timeOption, setTimeOption] = useState<number>(60); // Default 60 seconds (1 minute)
  const [text, setText] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [status, setStatus] = useState<TestStatus>('idle');
  const [startTime, setStartTime] = useState<number | null>(null);
  // We need endTime for calculations even if it's not directly read
  const [, setEndTime] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(timeOption);
  const [correctChars, setCorrectChars] = useState<number>(0);
  const [incorrectChars, setIncorrectChars] = useState<number>(0);
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(0);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true); // Assume sound is enabled initially

  // Define ReturnType for setTimeout to fix NodeJS.Timeout issue
  type TimeoutType = ReturnType<typeof setTimeout>;
  const timerRef = useRef<TimeoutType | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const audioRef = useRef<HTMLAudioElement | null>(null); // Ref to store the preloaded audio object

  // Use refs to store latest values for callbacks/effects to avoid stale closures
  const statusRef = useRef(status);
  const startTimeRef = useRef(startTime);
  const userInputRef = useRef(userInput);
  const textRef = useRef(text);
  const timeOptionRef = useRef(timeOption);
  const difficultyRef = useRef(difficulty);
  const correctCharsRef = useRef(correctChars); // Ref for live WPM calculation

  // Preload audio on component mount (client-side only)
  useEffect(() => {
    // We're using a data URL for the keypress sound to avoid file system dependencies
    // This ensures the sound will work without needing to create any additional files
    const audio = new Audio(KEYPRESS_SOUND_SRC);
    audio.preload = 'auto'; // Suggest preloading

    // Enhanced error handling: Pass the event object `e` for more details
    // Use `console.warn` as it's not a critical app-breaking error if sound fails.
    audio.onerror = (e) => {
      console.warn(`Failed to load keypress sound. Ensure the file exists at ${KEYPRESS_SOUND_SRC}`, e);
      // Disable sound feature if loading fails permanently
      setIsSoundEnabled(false);
    };

    // Optional: Check if audio can potentially play (helps with some environments)
    // audio.oncanplaythrough = () => {
    //   console.log("Keypress sound ready to play.");
    // };

    audioRef.current = audio;

    // Cleanup function to pause and nullify audio if component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ''; // Release resource
        audioRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  // Function to play the keypress sound
  const playKeypressSound = useCallback(() => {
    if (!isSoundEnabled || !audioRef.current) {
        // Don't play if sound is disabled (e.g., due to loading error) or ref is null
        return;
    }

    // Check if there was a loading error earlier (redundant check, but safe)
    if (audioRef.current.error) {
       // Don't try to play if loading failed. Error already logged by onerror.
       // console.warn("Cannot play keypress sound due to previous loading error.");
       return;
    }

    // Reset playback to the beginning
    audioRef.current.currentTime = 0;
    // Play the sound. Modern browsers return a Promise.
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Playback started successfully
        }).catch(error => {
            // Autoplay was prevented or another error occurred.
            // This is common if the user hasn't interacted with the page yet.
            // We can disable sound or just log a warning.
            if (error.name === 'NotAllowedError') {
                console.warn('Audio playback failed: User interaction might be required to enable sound.');
                // Optionally disable sound for the session if desired
                // setIsSoundEnabled(false);
            } else {
                console.error('Audio playback error:', error);
            }
        });
    }

  }, [isSoundEnabled]);


  // Update refs whenever state changes
  useEffect(() => {
    statusRef.current = status;
    startTimeRef.current = startTime;
    userInputRef.current = userInput;
    textRef.current = text;
    timeOptionRef.current = timeOption;
    difficultyRef.current = difficulty;
    correctCharsRef.current = correctChars; // Update correctChars ref
  }, [status, startTime, userInput, text, timeOption, difficulty, correctChars]);

  const handleTestFinish = useCallback((finalUserInput?: string) => {
    // Use refs inside the callback
    if (statusRef.current !== 'running' || !startTimeRef.current) return;

    if (timerRef.current) clearInterval(timerRef.current);
    setStatus('finished'); // Update state directly
    statusRef.current = 'finished'; // Update ref immediately

    const finishTime = Date.now();
    setEndTime(finishTime);

    const timeElapsedSeconds = (finishTime - startTimeRef.current) / 1000;
    // Ensure timeElapsedMinutes is not zero to prevent division by zero
    const timeElapsedMinutes = Math.max(timeElapsedSeconds / 60, 1 / 60); // Minimum 1 second equivalent

    let correctCount = 0;
    let incorrectCount = 0;
    // Use the passed finalUserInput if available (from handleInputChange), otherwise use the ref
    const inputToCheck = finalUserInput !== undefined ? finalUserInput : userInputRef.current;
    const typedChars = inputToCheck.length;
    const originalText = textRef.current;

    inputToCheck.split('').forEach((char, index) => {
      if (index < originalText.length) {
        if (char === originalText[index]) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      } else {
        incorrectCount++; // Characters typed beyond the original text length
      }
    });

    // WPM calculation: (correct characters / 5) / time in minutes
    const finalWpm = Math.round((correctCount / 5) / timeElapsedMinutes);

    // Accuracy calculation: (correct characters / total typed characters) * 100
    const finalAccuracy = typedChars > 0 ? Math.round((correctCount / typedChars) * 100) : 0;


    setCorrectChars(correctCount); // Final state update
    setIncorrectChars(incorrectCount); // Final state update
    setWpm(finalWpm); // Final state update
    setAccuracy(finalAccuracy); // Final state update

  }, []); // No state dependencies needed as refs are used

  // Function to generate new text and reset state (extracted for reuse)
  const setupNewTest = useCallback((currentDifficulty: Difficulty, currentTimeOption: number) => {
    setText(generateRandomText(50, currentDifficulty));
    setStatus('idle');
    statusRef.current = 'idle'; // Update ref
    setUserInput('');
    userInputRef.current = ''; // Update input ref as well
    setStartTime(null);
    startTimeRef.current = null;
    setEndTime(null);
    setTimeLeft(currentTimeOption);
    setCorrectChars(0);
    correctCharsRef.current = 0;
    setIncorrectChars(0);
    setWpm(0);
    setAccuracy(0);
    if(timerRef.current) clearInterval(timerRef.current); // Clear existing timer
    if (inputRef.current) {
      inputRef.current.value = ''; // Clear the actual input field
      inputRef.current.focus(); // Focus after reset
    }
  }, []);

  // Generate new text and reset when difficulty or timeOption changes WHILE IDLE/FINISHED
  useEffect(() => {
    if (statusRef.current !== 'running') {
      setupNewTest(difficulty, timeOption);
    } else {
       // If running, just update the target time and recalculate timeLeft
       timeOptionRef.current = timeOption;
       const elapsedSeconds = startTimeRef.current ? Math.floor((Date.now() - startTimeRef.current) / 1000) : 0;
       setTimeLeft(Math.max(0, timeOption - elapsedSeconds));
    }
    // Always reset timeLeft display when idle, regardless of setupNewTest call
    if (statusRef.current === 'idle') {
      setTimeLeft(timeOption);
    }
  }, [difficulty, timeOption, setupNewTest]);


 // Timer logic
  useEffect(() => {
    if (statusRef.current === 'running' && startTimeRef.current) {
      // Clear any existing timer before starting a new one
      if (timerRef.current) clearInterval(timerRef.current);

      timerRef.current = setInterval(() => {
        const now = Date.now();
        // Ensure startTimeRef.current is not null before using it
        if (!startTimeRef.current) {
           if (timerRef.current) clearInterval(timerRef.current);
           return;
        }
        const elapsedSeconds = Math.floor((now - startTimeRef.current) / 1000);
        const remaining = timeOptionRef.current - elapsedSeconds;


        if (remaining <= 0) {
          setTimeLeft(0);
          handleTestFinish(); // Finish the test when time runs out
        } else {
          setTimeLeft(remaining);
           // Live WPM calculation during the test
           const timeElapsedMinutes = Math.max(elapsedSeconds / 60, 1/60); // Prevent division by zero, min 1 sec
           const currentWpm = Math.round((correctCharsRef.current / 5) / timeElapsedMinutes);
           setWpm(currentWpm); // Update WPM state live
        }
      }, 1000);
    } else {
      // If not running or no start time, clear the timer
      if (timerRef.current) clearInterval(timerRef.current);
    }

    // Cleanup function for the effect
    return () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };
  // Re-run effect if status changes or startTime is set (when test starts)
  }, [status, startTime, handleTestFinish]);


  const handleStartTest = useCallback(() => {
    if (statusRef.current === 'idle' || statusRef.current === 'finished') {
      // Always setup a new test when explicitly starting/restarting
      setupNewTest(difficultyRef.current, timeOptionRef.current);

      // Need a slight delay for the state to update before starting the timer
      // and ensuring the new text is rendered.
      setTimeout(() => {
          const now = Date.now();
          setStartTime(now);
          startTimeRef.current = now; // Update ref immediately
          setTimeLeft(timeOptionRef.current); // Set initial time for display
          setStatus('running');
          statusRef.current = 'running'; // Update ref immediately
          if (inputRef.current) {
              inputRef.current.focus();
          }
      }, 50); // Small delay (e.g., 50ms)
    }
  }, [setupNewTest]);


  const handleRestart = () => {
     setupNewTest(difficulty, timeOption);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const typedValue = event.target.value;

    // Do nothing if the test is finished
    if (statusRef.current === 'finished') {
      return;
    }

    let justStarted = false;
    // Start the test on the first character typed if idle
    if (statusRef.current === 'idle' && typedValue.length > 0) {
        const now = Date.now();
        setStartTime(now);
        startTimeRef.current = now; // Update ref immediately
        setTimeLeft(timeOptionRef.current); // Set initial time for display
        setStatus('running');
        statusRef.current = 'running'; // Update ref immediately
        justStarted = true; // Mark that the test just started with this input change
        playKeypressSound(); // Play sound on first keypress when starting
    }

    // Only process input if the test is running (or just started)
    if (statusRef.current === 'running') {
        // Play sound effect on each subsequent input change while running
        if (!justStarted) {
          playKeypressSound();
        }

        setUserInput(typedValue);
        userInputRef.current = typedValue; // Update ref immediately

        // Calculate correct/incorrect immediately
        let currentCorrect = 0;
        let currentIncorrect = 0;
        const originalText = textRef.current;
        typedValue.split('').forEach((char, index) => {
          if (index < originalText.length) {
            if (char === originalText[index]) {
              currentCorrect++;
            } else {
              currentIncorrect++;
            }
          } else {
              currentIncorrect++; // Count characters typed beyond the text length as incorrect
          }
        });
        setCorrectChars(currentCorrect);
        correctCharsRef.current = currentCorrect; // Update ref for live WPM calc in timer
        setIncorrectChars(currentIncorrect);

        // Check for completion: if the typed length matches or exceeds the original text length
        // AND the test didn't *just* start (to avoid premature finish if text is very short)
        if (!justStarted && typedValue.length >= originalText.length) {
           handleTestFinish(typedValue); // Pass the final input value
        }
    } else if (statusRef.current === 'idle') {
       // If idle, update the input value but don't process stats yet
       setUserInput(typedValue);
       userInputRef.current = typedValue; // Update ref immediately
    }
  };


  // Use a hidden input field to capture typing on all devices
  const handleContainerClick = () => {
    if (inputRef.current && status !== 'finished') {
      inputRef.current.focus();
    }
  };


  const renderText = () => {
    const currentText = text;
    const currentUserInput = userInput;
    const currentStatus = status; // Use status state directly for rendering logic
    
    // Create an array of characters from the text
    const characters = currentText.split('');
    
    // Process each character
    const renderedChars = characters.map((char, index) => {
      // Make untyped text more visible in both light and dark modes
      let className = 'text-foreground/70';
      const isCurrent = index === currentUserInput.length && currentStatus === 'running';
      const isTyped = index < currentUserInput.length;
      
      // Handle typed characters
      if (isTyped) {
        className = currentUserInput[index] === char ? 'correct' : 'incorrect';
        
        // Handle special cases for incorrect characters
        if (className === 'incorrect') {
          if (char === ' ') {
            // Missed space: render as underscore with error background
            return <span key={index} className="incorrect char-span bg-red-200 dark:bg-red-800 rounded px-0.5">_</span>;
          } else if (currentUserInput[index] === ' ') {
            // Typed space instead of character: apply wavy underline
            let displayChar = char === ' ' ? '\u00A0' : char;
            return <span key={index} className="incorrect char-span underline decoration-red-500 decoration-wavy">{displayChar}</span>;
          }
        }
      }
      
      // Replace space with non-breaking space for rendering
      let displayChar = char === ' ' ? '\u00A0' : char;
      
      // Apply current character styling
      if (isCurrent) {
        if (char === ' ') {
          // Highlight space with background
          return <span key={index} className="current char-span rounded px-1 py-0.5">{'\u00A0'}</span>;
        } else {
          // Highlight the current character
          return <span key={index} className="current char-span">{displayChar}</span>;
        }
      }
      
      // Render regular character
      return (
        <span key={index} className={`${className} char-span`}>
          {displayChar}
        </span>
      );
    });
    
    // Group characters into words for better readability
    const result = [];
    let currentWord = [];
    let wordKey = 0;
    
    renderedChars.forEach((charElement, index) => {
      // If it's a space, end the current word and start a new one
      if (characters[index] === ' ') {
        if (currentWord.length > 0) {
          result.push(
            <span key={`word-${wordKey}`} className="inline-block mr-1">
              {currentWord}
            </span>
          );
          wordKey++;
          currentWord = [];
        }
        // Add the space character
        result.push(charElement);
      } else {
        // Add character to current word
        currentWord.push(charElement);
      }
    });
    
    // Add the last word if there is one
    if (currentWord.length > 0) {
      result.push(
        <span key={`word-${wordKey}`} className="inline-block mr-1">
          {currentWord}
        </span>
      );
    }
    
    return result;
  };

   const handleDownloadPdf = () => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();
    const timeStr = new Date().toLocaleTimeString(); // Renamed to avoid conflict

    doc.setFontSize(18);
    doc.text("Typing Test Results", 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Date: ${date}`, 20, 40);
    doc.text(`Time: ${timeStr}`, 20, 50); // Use timeStr
    doc.text(`Difficulty: ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`, 20, 60);
    doc.text(`Test Duration: ${timeOption / 60} minute(s)`, 20, 70);

    doc.setLineWidth(0.5);
    doc.line(20, 80, 190, 80); // Separator line

    doc.setFontSize(14);
    // Ensure results are displayed correctly, handling potential NaN
    doc.text(`Speed (WPM): ${isNaN(wpm) ? 0 : wpm}`, 20, 90);
    doc.text(`Accuracy: ${isNaN(accuracy) ? 0 : accuracy}%`, 20, 100);
    doc.text(`Correct Characters: ${correctChars}`, 20, 110);
    doc.text(`Incorrect Characters: ${incorrectChars}`, 20, 120);

    doc.line(20, 130, 190, 130); // Separator line

    doc.setFontSize(10);
    doc.text("Generated by Type Ace", 105, 140, { align: 'center' });


    doc.save(`typing-test-results-${date}.pdf`);
    toast({
        title: "PDF Downloaded",
        description: "Your typing test results have been saved.",
    });
  };


  return (
    <Card className="w-full max-w-3xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-primary">Type Ace ⌨️</CardTitle>
        <CardDescription className="text-center text-muted-foreground">Test your typing speed and accuracy!</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
           {/* Settings Dialog */}
           <Dialog>
            <DialogTrigger asChild>
               <EnhancedButton 
                 variant="outline" 
                 size="icon" 
                 aria-label="Settings" 
                 disabled={status === 'running'}
                 className="bg-primary/10 hover:bg-primary/20 text-primary"
               >
                  <Settings className="h-5 w-5" />
                </EnhancedButton>
            </DialogTrigger>
            <DialogContent className="w-[90vw] max-w-[425px] bg-card text-card-foreground border-primary/20">
              <DialogHeader>
                <DialogTitle className="text-xl text-primary">Settings</DialogTitle>
                <DialogDescription className="text-foreground/80">
                  Adjust test duration and difficulty. Changes will apply on the next test start or restart.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                 <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                    <Label htmlFor="time-select" className="text-left sm:text-right text-foreground font-medium mb-1 sm:mb-0">
                      Time
                    </Label>
                     <Select
                        value={timeOption.toString()}
                        onValueChange={(value) => setTimeOption(parseInt(value))}
                        disabled={status === 'running'} // Disable during test
                        name="time-select"
                      >
                        <SelectTrigger className="col-span-1 sm:col-span-3 bg-white text-black border-primary/30 hover:border-primary/50 focus:border-primary h-10 px-3 py-2">
                          <SelectValue placeholder="Select time" className="text-black" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black border-primary/30 min-w-[180px]">
                           <SelectItem value="30" className="text-black hover:bg-primary/10 focus:bg-primary/20 cursor-pointer">30 seconds</SelectItem>
                           <SelectItem value="60" className="text-black hover:bg-primary/10 focus:bg-primary/20 cursor-pointer">1 minute</SelectItem>
                           <SelectItem value="180" className="text-black hover:bg-primary/10 focus:bg-primary/20 cursor-pointer">3 minutes</SelectItem>
                           <SelectItem value="300" className="text-black hover:bg-primary/10 focus:bg-primary/20 cursor-pointer">5 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                    <Label htmlFor="difficulty-select" className="text-left sm:text-right text-foreground font-medium mb-1 sm:mb-0">
                      Difficulty
                    </Label>
                     <Select
                        value={difficulty}
                        onValueChange={(value: Difficulty) => setDifficulty(value)}
                         disabled={status === 'running'} // Disable during test
                        name="difficulty-select"
                      >
                        <SelectTrigger className="col-span-1 sm:col-span-3 bg-white text-black border-primary/30 hover:border-primary/50 focus:border-primary h-10 px-3 py-2">
                          <SelectValue placeholder="Select difficulty" className="text-black" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black border-primary/30 min-w-[180px]">
                          <SelectItem value="easy" className="text-black hover:bg-primary/10 focus:bg-primary/20 cursor-pointer">Easy</SelectItem>
                          <SelectItem value="medium" className="text-black hover:bg-primary/10 focus:bg-primary/20 cursor-pointer">Medium</SelectItem>
                          <SelectItem value="hard" className="text-black hover:bg-primary/10 focus:bg-primary/20 cursor-pointer">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                  </div>
              </div>
               <DialogFooter className="pt-4 border-t border-border flex flex-col sm:flex-row sm:justify-end gap-2">
                 <DialogClose asChild>
                     <EnhancedButton 
                       type="button" 
                       variant="primary" 
                       glowEffect={true} 
                       className="w-full sm:w-auto text-base py-2 px-6"
                     >
                       Done
                     </EnhancedButton>
                  </DialogClose>
               </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-secondary text-secondary-foreground font-mono text-xl min-w-[80px]">
            <Clock className="h-5 w-5" />
             {/* Ensure timeLeft is displayed correctly based on state */}
             <span>{status === 'idle' ? timeOption : timeLeft}s</span>
          </div>
            {/* Restart button changes label based on status and is disabled during running */}
            <EnhancedButton onClick={handleRestart} variant="outline" className="group" disabled={status === 'running'} glowEffect={true}>
                <Repeat className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:rotate-180" />
                 {status === 'finished' ? 'Restart' : 'New Text'}
            </EnhancedButton>

        </div>


        {/* Text display area - Render conditionally based on status */}
         {status !== 'finished' ? (
            <div
              className="relative leading-relaxed tracking-wide p-6 border-2 border-primary/30 rounded-lg bg-card text-foreground cursor-text min-h-[180px] overflow-auto shadow-md"
              onClick={handleContainerClick}
              aria-live="polite"
              style={{ 
                overflowY: 'auto', 
                overflowX: 'hidden',
                width: '100%',
                maxWidth: '100%',
                backgroundImage: 'linear-gradient(to bottom, hsla(var(--background), 0.8), hsla(var(--background), 1))'
              }}
            >
              <input
                ref={inputRef}
                type="text"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-text" // Input remains hidden
                onChange={handleInputChange}
                value={userInput} // Controlled input
                disabled={status === 'finished' as TestStatus} // Disable when finished (redundant check, but safe)
                spellCheck="false"
                autoCorrect="off"
                autoCapitalize="off"
                aria-label="Type the text here"
                autoFocus // Auto-focus on load/reset might be desired
              />
              {/* Placeholder logic improved */}
              {status === 'idle' && !userInput && text && ( // Show placeholder only when idle, no input yet, and text is loaded
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary font-medium pointer-events-none bg-primary/5 rounded-md">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="animate-pulse">⌨️</span>
                    <span className="text-xl">Click here or start typing to begin...</span>
                  </div>
                  <p className="text-sm text-foreground/70">The timer will start automatically when you begin typing</p>
                </div>
              )}
               {/* Fixed-position text container to prevent text movement */}
              <div className="typing-text-container break-words whitespace-pre-wrap relative">
                {renderText()}
              </div>
            </div>
        ) : null}

        {/* Conditional Rendering: Live Stats OR Results Display */}
        {status === 'running' && (
          <div className="flex justify-around items-center p-2 bg-secondary rounded-md text-secondary-foreground animate-in fade-in duration-300">
            <div className="text-center">
              <p className="text-sm font-semibold">WPM</p>
              {/* Display live WPM, show 0 if NaN */}
              <p className="text-2xl font-bold">{isNaN(wpm) ? 0 : wpm}</p>
            </div>
             <div className="text-center">
              <p className="text-sm font-semibold">Correct</p>
              <p className="text-2xl font-bold text-green-600">{correctChars}</p>
            </div>
             <div className="text-center">
              <p className="text-sm font-semibold">Incorrect</p>
              <p className="text-2xl font-bold text-red-600">{incorrectChars}</p>
            </div>
          </div>
        )}

        {status === 'finished' && (
          <ResultsDisplay
            wpm={wpm}
            accuracy={accuracy}
            correctChars={correctChars}
            incorrectChars={incorrectChars}
            time={timeOption} // Pass the original time option used for the test
          />
        )}

      </CardContent>
       <CardFooter className="flex justify-center pt-4 gap-4">
         {/* Action buttons shown based on status */}
         {status === 'finished' && (
            <>
               {/* Download PDF Button - visible only when finished */}
               <EnhancedButton onClick={handleDownloadPdf} variant="outline" glowEffect={true}>
                 <Download className="h-5 w-5 mr-2" />
                 Download PDF
               </EnhancedButton>
               {/* Share Result Button - visible only when finished */}
               <EnhancedButton onClick={() => {
                    // Use final WPM and Accuracy for sharing
                    const resultText = `I achieved ${isNaN(wpm) ? 0 : wpm} WPM with ${isNaN(accuracy) ? 0 : accuracy}% accuracy on Type Ace! (${correctChars}✓ / ${incorrectChars}✗ in ${timeOption}s - ${difficulty})`;
                    if (navigator.share) {
                      navigator.share({
                        title: 'My Typing Test Result!',
                        text: resultText,
                        url: window.location.href, // Share current page URL
                      }).catch((error) => console.error('Error sharing:', error));
                    } else {
                      // Fallback to clipboard copy if Web Share API is not available
                      navigator.clipboard.writeText(resultText)
                        .then(() => toast({ title: "Result Copied!", description: "Results copied to clipboard." }))
                        .catch(err => {
                            console.error('Failed to copy text: ', err);
                            toast({ title: "Copy Failed", description: "Could not copy results to clipboard.", variant: "destructive" });
                        });
                    }
               }} variant="outline" glowEffect={true}>
                 <Share2 className="h-5 w-5 mr-2" />
                 Share Result
               </EnhancedButton>
               {/* Test Again Button - uses handleStartTest */}
               <EnhancedButton onClick={handleStartTest} variant="default" size="lg" glowEffect={true} pulseEffect={true}>
                 Test Again
               </EnhancedButton>
            </>
         )}
         {/* Start Typing Button - visible only when idle */}
         {status === 'idle' && (
              <Button onClick={handleStartTest} variant="default" size="lg">
                Start Typing
              </Button>
            )}
      </CardFooter>
    </Card>
  );
};

export default TypingTest;
