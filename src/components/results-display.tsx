import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, XCircle } from 'lucide-react';

interface ResultsDisplayProps {
  wpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
  time: number; // Original time option in seconds
}

const ResultsDisplay = ({ wpm, accuracy, correctChars, incorrectChars, time }: ResultsDisplayProps) => {
  const displayWpm = isNaN(wpm) ? 0 : wpm;
  const displayAccuracy = isNaN(accuracy) ? 0 : accuracy;

  return (
    <Card className="mt-6 border-primary shadow-md animate-in fade-in duration-500">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl font-bold text-primary dark:text-primary">Test Completed!</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 text-center p-4">
        <div className="p-3 rounded-md bg-gray-100 dark:bg-gray-700">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Speed (WPM)</p>
          <p className="text-3xl font-bold text-primary dark:text-primary">{displayWpm}</p>
        </div>
        <div className="p-3 rounded-md bg-gray-100 dark:bg-gray-700">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Accuracy</p>
          <p className="text-3xl font-bold text-primary dark:text-primary">{displayAccuracy}%</p>
        </div>
        <div className="flex items-center justify-center gap-2 p-3 rounded-md bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 col-span-1">
          <CheckCircle className="h-5 w-5" />
          <div>
             <p className="text-sm font-semibold opacity-90">Correct</p>
             <p className="text-xl font-bold">{correctChars}</p>
           </div>
        </div>
         <div className="flex items-center justify-center gap-2 p-3 rounded-md bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 col-span-1">
           <XCircle className="h-5 w-5" />
           <div>
             <p className="text-sm font-semibold opacity-90">Incorrect</p>
             <p className="text-xl font-bold">{incorrectChars}</p>
            </div>
        </div>
         <div className="col-span-2 text-center text-sm text-foreground dark:text-foreground opacity-70 pt-2">
           Tested for {time / 60} minute(s).
         </div>
      </CardContent>
    </Card>
  );
};

export default ResultsDisplay;
