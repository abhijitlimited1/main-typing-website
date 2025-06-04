import { useEffect } from 'react';
import Meta from '../../components/meta';
import TypingTest from '../../components/typing-test';

export default function EnglishTypingTestPage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title="English Typing Test - Improve Your English Typing Speed | TypeAce"
        description="Take our free English typing test to measure and improve your typing speed and accuracy. Perfect for students, professionals, and anyone looking to enhance their typing skills."
        keywords="english typing test, english typing speed, typing test english, english keyboard test"
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">English Typing Test</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-lg mb-6">
            Welcome to TypeAce's English typing test! This test is designed to measure your typing speed and accuracy
            specifically for English language content. Whether you're a student, professional, or just looking to improve
            your typing skills, our English typing test will help you track your progress.
          </p>
          
          <TypingTest />
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Take an English Typing Test?</h2>
          <p className="mb-4">
            English is the most widely used language in business, education, and online communication. Having strong English
            typing skills can significantly improve your productivity and communication efficiency.
          </p>
          <p>
            Our English typing test uses common English words, phrases, and sentences to give you a realistic assessment
            of your typing abilities in everyday scenarios.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">English Typing Test Categories</h2>
          <div className="space-y-4">
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Common English Words</h3>
              <p>Practice with the most frequently used words in English to build your core typing skills.</p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Business English</h3>
              <p>Improve your typing with business terminology and professional communication phrases.</p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Academic English</h3>
              <p>Practice with academic vocabulary and complex sentence structures.</p>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Literary Passages</h3>
              <p>Challenge yourself with excerpts from classic and contemporary English literature.</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">English Typing Skills Benchmarks</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Skill Level</th>
                  <th className="border p-2 text-left">WPM (Words Per Minute)</th>
                  <th className="border p-2 text-left">Typical User</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Beginner</td>
                  <td className="border p-2">10-25 WPM</td>
                  <td className="border p-2">New typists, hunt-and-peck method users</td>
                </tr>
                <tr>
                  <td className="border p-2">Intermediate</td>
                  <td className="border p-2">26-45 WPM</td>
                  <td className="border p-2">Average computer users, casual typists</td>
                </tr>
                <tr>
                  <td className="border p-2">Proficient</td>
                  <td className="border p-2">46-65 WPM</td>
                  <td className="border p-2">Office workers, college students</td>
                </tr>
                <tr>
                  <td className="border p-2">Advanced</td>
                  <td className="border p-2">66-80 WPM</td>
                  <td className="border p-2">Professional typists, secretaries</td>
                </tr>
                <tr>
                  <td className="border p-2">Expert</td>
                  <td className="border p-2">80+ WPM</td>
                  <td className="border p-2">Professional data entry specialists, transcriptionists</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}