import { useEffect } from 'react';
import Meta from '../../components/meta';
import TypingTest from '../../components/typing-test';
import { Link } from 'react-router-dom';

export default function FastTypingTestPage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title="Fast Typing Test - Quick 1-Minute Speed Test | TypeAce"
        description="Take our fast 1-minute typing test to quickly measure your typing speed. Perfect for busy professionals and students who want to track their progress."
        keywords="fast typing test, quick typing test, 1 minute typing test, rapid typing speed, quick WPM test"
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Fast Typing Test</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-lg mb-6">
            Welcome to TypeAce's fast typing test! This quick 1-minute test is perfect for when you're short on time
            but still want to measure your typing speed and accuracy. Challenge yourself to improve your WPM with
            our streamlined typing experience.
          </p>
          
          <TypingTest duration={60} />
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits of Fast Typing</h2>
          <p className="mb-4">
            Being able to type quickly and accurately has numerous advantages in today's digital world:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Increased productivity at work or school</li>
            <li>More efficient communication in chats, emails, and social media</li>
            <li>Reduced strain and fatigue during long typing sessions</li>
            <li>Better ability to capture thoughts and ideas as they come</li>
            <li>Competitive advantage in many professional fields</li>
          </ul>
          <p>
            With regular practice using our fast typing tests, you can significantly improve your typing speed
            and enjoy these benefits in your daily life.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Fast Typing Test Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border rounded p-4 text-center">
              <h3 className="font-medium mb-2">30-Second Test</h3>
              <p className="text-sm mb-3">Ultra-quick assessment for busy people</p>
              <Link 
                to="/typing-test/30-second" 
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
              >
                <span className="font-bold text-white">Start Test</span>
              </Link>
            </div>
            <div className="border rounded p-4 text-center">
              <h3 className="font-medium mb-2">1-Minute Test</h3>
              <p className="text-sm mb-3">Standard quick test for regular practice</p>
              <Link 
                to="/typing-test/1-minute" 
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
              >
                <span className="font-bold text-white">Start Test</span>
              </Link>
            </div>
            <div className="border rounded p-4 text-center">
              <h3 className="font-medium mb-2">2-Minute Test</h3>
              <p className="text-sm mb-3">Extended quick test for more accuracy</p>
              <Link 
                to="/typing-test/2-minute" 
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
              >
                <span className="font-bold text-white">Start Test</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Tips for Faster Typing</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use all ten fingers and practice proper finger placement</li>
            <li>Don't look at the keyboard while typing (touch typing)</li>
            <li>Maintain good posture to reduce fatigue</li>
            <li>Take short, frequent typing tests rather than long sessions</li>
            <li>Focus on accuracy first, then gradually increase speed</li>
            <li>Learn keyboard shortcuts for common actions</li>
            <li>Practice with varied content to build versatility</li>
          </ul>
        </div>
      </div>
    </>
  );
}