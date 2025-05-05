import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Zap, Target, Clock } from "lucide-react";
import TypingTestLink from "../components/typing-test-link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 md:p-12 lg:p-24 bg-background text-foreground">
      <Card className="w-full max-w-4xl shadow-lg border-primary text-center animate-in fade-in duration-500 bg-white">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl font-bold text-primary">Welcome to Type Ace! ⌨️</CardTitle>
          <CardDescription className="text-lg text-gray-600 mt-2">
            Your ultimate destination to test, practice, and master your typing skills.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 text-center">
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-700">
            Whether you're a beginner aiming to learn touch typing or a seasoned pro looking to boost your Words Per Minute (WPM), Type Ace offers the tools you need. Measure your speed, track your accuracy, and watch your progress soar!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
              <Zap className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Speed Tests</h3>
              <p className="text-sm text-gray-600">Find out your WPM with various timed tests (30s, 1min, 3min, 5min).</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
              <Target className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Accuracy Focus</h3>
              <p className="text-sm text-gray-600">Practice sessions designed to help you reduce errors and type precisely.</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
              <Clock className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-sm text-gray-600">See your performance history and identify areas for improvement.</p>
            </div>
          </div>

          <p className="text-base sm:text-lg font-medium text-gray-800">
            Ready to challenge yourself?
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-center items-center pt-6 gap-4">
          <TypingTestLink 
            to="/typing-tests" 
            variant="secondary"
            className="text-lg px-6 py-3 w-full sm:w-auto justify-center"
          >
            Explore All Typing Tests
          </TypingTestLink>
          <TypingTestLink 
            to="/typing-test/online-typing-test" 
            variant="primary"
            className="text-lg px-6 py-3 w-full sm:w-auto justify-center"
          >
            Start a Quick Test
          </TypingTestLink>
        </CardFooter>
      </Card>
    </div>
  );
}