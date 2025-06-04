import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import Meta from '../../components/meta';

export default function NotFoundPage() {
  return (
    <>
      <Meta
        title="Page Not Found | TypeAce"
        description="The page you're looking for doesn't exist. Return to TypeAce's typing speed test and practice pages."
        robots="noindex, follow"
      />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        
        <p className="text-lg text-gray-600 max-w-md mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Button asChild className="px-6 py-2">
            <Link to="/">Return to Home</Link>
          </Button>
          
          <div className="pt-8">
            <h3 className="text-xl font-medium mb-4">You might be looking for:</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/typing-speed-test" className="text-primary hover:underline">
                  Typing Speed Test
                </Link>
              </li>
              <li>
                <Link to="/typing-practice" className="text-primary hover:underline">
                  Typing Practice
                </Link>
              </li>
              <li>
                <Link to="/online-typing-test" className="text-primary hover:underline">
                  Online Typing Test
                </Link>
              </li>
              <li>
                <Link to="/free-typing-test" className="text-primary hover:underline">
                  Free Typing Test
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}