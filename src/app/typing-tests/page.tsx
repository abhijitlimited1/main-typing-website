// src/app/typing-tests/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../../components/ui/card";
import { List } from "lucide-react";
import { seoData } from "../../lib/seo-data";
import Meta from '../../components/meta';
import TypingTestLink from '../../components/typing-test-link';

export default function TypingTestsPage() {
  return (
    <>
      <Meta
        title="All Typing Tests"
        description="Explore all available typing tests and practice options on Type Ace. Find tests for speed, accuracy, different durations, and skill levels."
      />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 md:p-12 lg:p-24 bg-background text-foreground">
        <Card className="w-full max-w-4xl shadow-lg border-primary">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center mb-4">
              <List className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-bold text-primary">Typing Tests & Practice</CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-2">
              Choose from various tests to measure and improve your keyboarding skills.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-base sm:text-lg max-w-2xl mx-auto">
              Select a specific typing test below based on your goals. Whether you want a quick check, extended practice, or focus on specific skills like speed or accuracy, we have an option for you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {seoData.map((page) => (
                <TypingTestLink
                  key={page.slug}
                  to={`/typing-test/${page.slug}`}
                  className="h-12 text-base text-left w-full"
                >
                  <span className="truncate">{page.h1}</span>
                </TypingTestLink>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pt-6">
            <TypingTestLink 
              to="/typing-test/online-typing-test" 
              variant="primary"
              className="text-lg px-6 py-3"
            >
              Start Quick Test (1 Min)
            </TypingTestLink>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}