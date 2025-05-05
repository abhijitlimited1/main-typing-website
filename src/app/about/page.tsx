// src/app/about/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Feather } from "lucide-react";
import Meta from '../../components/meta';

export default function AboutPage() {
  return (
    <>
      <Meta
        title="About Type Ace"
        description="Learn more about Type Ace, our mission to help users improve their typing speed and accuracy through free online tests and practice."
      />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 md:p-12 lg:p-24 bg-background text-foreground">
        <Card className="w-full max-w-3xl shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Feather className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-bold">About Type Ace</CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-2">
              Helping you type faster, one keystroke at a time.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-left sm:text-lg leading-relaxed">
            <p>
              Welcome to Type Ace! Our mission is simple: to provide a free, accessible, and effective platform for anyone looking to improve their typing speed and accuracy. We believe that strong keyboarding skills are essential in today's digital world, whether for work, study, or communication.
            </p>
            <p>
              Type Ace was created out of a passion for efficiency and skill development. We noticed a need for a clean, user-friendly typing test and practice tool that focuses purely on helping users get better without unnecessary distractions.
            </p>
            <h2 className="text-2xl font-semibold pt-4">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Accurate Speed Tests:</strong> Measure your Words Per Minute (WPM) and accuracy with various test durations.</li>
              <li><strong className="text-foreground">Targeted Practice:</strong> Choose different difficulty levels to challenge yourself appropriately.</li>
              <li><strong className="text-foreground">Progress Tracking (Coming Soon!):</strong> We're working on features to help you visualize your improvement over time.</li>
              <li><strong className="text-foreground">Clean Interface:</strong> A minimal design focused on the typing experience.</li>
              <li><strong className="text-foreground">Free Access:</strong> All our core testing and practice features are completely free.</li>
            </ul>
            <p>
              We are constantly working to improve Type Ace and add new features. We hope you find our tool helpful on your journey to becoming a faster, more accurate typist!
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}