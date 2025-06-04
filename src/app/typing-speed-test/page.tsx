import { useEffect } from 'react';
import Meta from '../../components/meta';
import TypingTest from '../../components/typing-test';
import { AnimatedKeyboard } from '../../components/animated-keyboard';
import { ProgressTracker } from '../../components/progress-tracker';

export default function TypingSpeedTestPage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title="Typing Speed Test - Measure Your WPM Online | TypeAce"
        description="Take our free typing speed test to measure your WPM (words per minute) and accuracy. Improve your typing skills with regular practice."
        keywords="typing speed test, WPM test, words per minute, typing test online, measure typing speed"
      />
      
      <div className="container mx-auto px-4 py-8 relative">
        <AnimatedKeyboard />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Typing Speed Test</h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Measure your typing speed in words per minute (WPM) and improve with regular practice</p>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12 border border-primary/10">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-primary">Test Your Typing Speed</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Find out how many words per minute (WPM) you can type and get insights on your typing performance.
            </p>
          </div>
          
          <TypingTest />
        </div>
        
        <div className="max-w-5xl mx-auto mb-12">
          <ProgressTracker />
        </div>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12 border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">What is WPM?</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                WPM stands for <span className="font-semibold">Words Per Minute</span>, which is a measure of typing speed. In typing tests, a "word" is standardized to be 5 characters or keystrokes.
                So, for example, if you type 200 characters in one minute, your WPM would be 40 (200 ÷ 5 = 40).
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                The average typing speed is around 40 WPM, while professional typists typically reach 65-75 WPM. With regular practice, 
                most people can improve their typing speed significantly.
              </p>
            </div>
            <div className="md:w-1/3 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-center mb-3">WPM Benchmarks</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Beginner:</span>
                  <span className="font-medium">10-25 WPM</span>
                </div>
                <div className="flex justify-between">
                  <span>Average:</span>
                  <span className="font-medium">35-45 WPM</span>
                </div>
                <div className="flex justify-between">
                  <span>Good:</span>
                  <span className="font-medium">45-60 WPM</span>
                </div>
                <div className="flex justify-between">
                  <span>Professional:</span>
                  <span className="font-medium">65-75 WPM</span>
                </div>
                <div className="flex justify-between">
                  <span>Expert:</span>
                  <span className="font-medium">80+ WPM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12 border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">How to Improve Your Typing Speed</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Proper Technique</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium mr-3 mt-0.5">1</span>
                  <span>Position your fingers on the home row (ASDF for left hand, JKL; for right)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium mr-3 mt-0.5">2</span>
                  <span>Keep your wrists elevated and maintain good posture</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium mr-3 mt-0.5">3</span>
                  <span>Use all ten fingers and avoid looking at the keyboard</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Practice Strategy</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mr-3 mt-0.5">1</span>
                  <span>Focus on accuracy first, then gradually increase speed</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mr-3 mt-0.5">2</span>
                  <span>Practice regularly - even 15 minutes daily makes a difference</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mr-3 mt-0.5">3</span>
                  <span>Take typing tests weekly to track your progress</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-blue-800 dark:text-blue-300 font-medium">
              With consistent practice, most people can improve their typing speed by 10-20 WPM within a few weeks!
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}