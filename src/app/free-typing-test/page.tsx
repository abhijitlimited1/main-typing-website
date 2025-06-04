import { useEffect } from 'react';
import Meta from '../../components/meta';
import TypingTest from '../../components/typing-test';

export default function FreeTypingTestPage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title="Free Typing Test - No Registration Required | TypeAce"
        description="Take our completely free typing test with no registration or downloads required. Measure your WPM and accuracy instantly."
        keywords="free typing test, no cost typing test, free typing speed test, free WPM test, typing test no registration"
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Free Typing Test</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-lg mb-6">
            Welcome to TypeAce's completely free typing test! Our typing test is 100% free with no registration, 
            downloads, or payment required. Simply start typing to measure your speed and accuracy instantly.
          </p>
          
          <TypingTest />
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Our Free Typing Test?</h2>
          <p className="mb-4">
            At TypeAce, we believe that everyone should have access to tools that help improve essential digital skills. 
            That's why we offer our typing test completely free of charge, with no hidden fees or premium features locked 
            behind paywalls.
          </p>
          <p className="mb-4">
            Our free typing test offers:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Accurate WPM (words per minute) calculation</li>
            <li>Detailed accuracy metrics</li>
            <li>Multiple test durations to choose from</li>
            <li>Clean, distraction-free interface</li>
            <li>No registration or account creation required</li>
            <li>No downloads or installations needed</li>
            <li>Works on any device with a web browser</li>
          </ul>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Free Resources to Improve Your Typing</h2>
          <p className="mb-4">
            In addition to our free typing test, we offer several resources to help you improve your typing skills:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Typing Practice Exercises</h3>
              <p className="text-sm">
                Free exercises designed to help you build speed and accuracy through regular practice.
              </p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Typing Tips & Techniques</h3>
              <p className="text-sm">
                Free guides on proper finger positioning, posture, and techniques to improve your typing.
              </p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Progress Tracking</h3>
              <p className="text-sm">
                Track your typing speed and accuracy improvements over time at no cost.
              </p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Customizable Tests</h3>
              <p className="text-sm">
                Choose from different test durations and difficulty levels, all for free.
              </p>
            </div>
          </div>
          <p>
            Start with our free typing test today and begin your journey to faster, more accurate typing!
          </p>
        </div>
      </div>
    </>
  );
}