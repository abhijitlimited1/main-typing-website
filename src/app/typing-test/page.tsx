// src/app/typing-test/page.tsx
import TypingTest from '../../components/typing-test';
import Meta from '../../components/meta';

export default function TypingTestPage() {
  return (
    <>
      <Meta
        title="Typing Speed Test - Check Your WPM | Type Ace"
        description="Test your typing speed and accuracy with our free online typing test. Get instant WPM results and improve your typing skills."
        keywords="typing test, typing speed, WPM, words per minute, typing practice, keyboard skills"
      />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 md:p-12 lg:p-24 bg-background">
        <header className="w-full max-w-3xl mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Typing Speed Test</h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Test your typing speed and accuracy. Get instant results and track your progress.
          </p>
        </header>
        
        <TypingTest />
        
        <section className="w-full max-w-3xl mt-12 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">How to Improve Your Typing Speed</h2>
            <p className="text-muted-foreground">
              Regular practice is key to improving your typing speed. Start with accuracy, then gradually increase your speed.
              Focus on proper finger positioning and try to avoid looking at the keyboard while typing.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Understanding Your Results</h2>
            <p className="text-muted-foreground">
              WPM (Words Per Minute) measures how many words you can type in a minute. The average typing 
              speed is around 40 WPM, with professional typists reaching 65-75 WPM. Accuracy is equally 
              important - aim for at least 95% accuracy for effective typing.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}