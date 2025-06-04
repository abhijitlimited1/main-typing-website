import { useEffect } from 'react';
import Meta from '../../components/meta';
import TypingTest from '../../components/typing-test';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';

export default function TypingPracticePage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title="Typing Practice - Improve Your Typing Skills | TypeAce"
        description="Practice typing with TypeAce's free online typing exercises. Improve your speed, accuracy, and confidence with regular typing practice."
        keywords="typing practice, typing exercises, practice typing, improve typing skills, typing drills"
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Typing Practice</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-lg mb-6">
            Welcome to TypeAce's typing practice area! Regular practice is the key to improving your typing skills.
            Our exercises are designed to help you build muscle memory, increase your speed, and reduce errors.
          </p>
          
          <TypingTest />
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Practice Typing?</h2>
          <p className="mb-4">
            Typing is an essential skill in today's digital world. Whether you're a student, professional, or casual computer user,
            being able to type quickly and accurately can save you hours of time and reduce frustration.
          </p>
          <p>
            With consistent practice, you can develop muscle memory that allows you to type without looking at the keyboard,
            freeing your attention to focus on content rather than the mechanics of typing.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Practice Exercises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Beginner Exercises</h3>
              <p className="text-sm mb-3">Focus on home row keys and basic finger positioning</p>
              <Button asChild className="w-full">
                <Link to="/typing-test/beginner-practice">Start Practice</Link>
              </Button>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Intermediate Exercises</h3>
              <p className="text-sm mb-3">Practice common words and phrases to build speed</p>
              <Button asChild className="w-full">
                <Link to="/typing-test/intermediate-practice">Start Practice</Link>
              </Button>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Advanced Exercises</h3>
              <p className="text-sm mb-3">Challenge yourself with complex texts and specialized content</p>
              <Button asChild className="w-full">
                <Link to="/typing-test/advanced-practice">Start Practice</Link>
              </Button>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Number & Symbol Practice</h3>
              <p className="text-sm mb-3">Improve your skills with non-alphabetic characters</p>
              <Button asChild className="w-full">
                <Link to="/typing-test/number-symbol-practice">Start Practice</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Practice Tips</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Practice for short periods (15-30 minutes) regularly rather than long, infrequent sessions</li>
            <li>Focus on accuracy first, then gradually increase your speed</li>
            <li>Use proper posture: sit up straight with feet flat on the floor</li>
            <li>Position your hands correctly on the home row (ASDF JKL;)</li>
            <li>Take breaks to prevent strain and fatigue</li>
            <li>Track your progress to stay motivated</li>
          </ul>
        </div>
      </div>
    </>
  );
}