import { useEffect } from 'react';
import Meta from '../../components/meta';
import TypingTest from '../../components/typing-test';

export default function OnlineTypingTestPage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title="Online Typing Test - Test Your Typing Speed & Accuracy | TypeAce"
        description="Take our free online typing test to measure your typing speed and accuracy. Get instant results and track your progress over time."
        keywords="online typing test, typing test online, web typing test, internet typing test, browser typing test"
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Online Typing Test</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-lg mb-6">
            Welcome to TypeAce's online typing test! Our web-based typing test is designed to help you measure and improve 
            your typing speed and accuracy from anywhere with an internet connection. No downloads required - just start 
            typing and get instant results.
          </p>
          
          <TypingTest />
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Take an Online Typing Test?</h2>
          <p className="mb-4">
            In today's digital world, typing is an essential skill for almost everyone. Whether you're a student, 
            professional, or casual computer user, being able to type quickly and accurately can save you time and 
            increase your productivity.
          </p>
          <p>
            Our online typing test provides a convenient way to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
            <li>Measure your current typing speed in words per minute (WPM)</li>
            <li>Assess your typing accuracy</li>
            <li>Track your progress over time</li>
            <li>Identify areas for improvement</li>
            <li>Practice regularly to build muscle memory</li>
          </ul>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">How Our Online Typing Test Works</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Start the test:</strong> Click the start button or simply begin typing to start the test.
            </li>
            <li>
              <strong>Type the displayed text:</strong> Try to type the text as quickly and accurately as possible.
            </li>
            <li>
              <strong>Get your results:</strong> When the test ends, you'll see your typing speed (WPM), accuracy percentage, and other metrics.
            </li>
            <li>
              <strong>Analyze your performance:</strong> Review your results to identify strengths and areas for improvement.
            </li>
            <li>
              <strong>Practice regularly:</strong> Take the test regularly to track your progress and improve your typing skills over time.
            </li>
          </ol>
          <p className="mt-4">
            Remember, consistent practice is the key to improving your typing speed and accuracy. Even just a few minutes 
            of practice each day can lead to significant improvements over time.
          </p>
        </div>
      </div>
    </>
  );
}