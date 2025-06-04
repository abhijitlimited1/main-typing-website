import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { ArrowUpRight, TrendingUp, Award, BarChart2 } from 'lucide-react';

// Fixed stats for the demo
const currentWpm = 65;
const startWpm = 40;
const wpmImprovement = currentWpm - startWpm;
const wpmImprovementPercent = Math.round((wpmImprovement / startWpm) * 100);

const currentAccuracy = 95;
const startAccuracy = 85;

export function ProgressTracker() {
  const [activeTab, setActiveTab] = useState('wpm');
  const [timeRange, setTimeRange] = useState('month');
  
  return (
    <Card className="w-full shadow-md border-primary/20 bg-white dark:bg-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold">Your Typing Progress</CardTitle>
            <CardDescription>Track your improvement over time</CardDescription>
          </div>
          <Tabs defaultValue={timeRange} onValueChange={setTimeRange}>
            <TabsList>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-primary/10 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Current WPM</p>
                <h3 className="text-2xl font-bold">{currentWpm}</h3>
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded-full">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
          <div className="bg-green-500/10 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Accuracy</p>
                <h3 className="text-2xl font-bold">{currentAccuracy}%</h3>
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded-full">
                <Award className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>
          <div className="bg-blue-500/10 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Improvement</p>
                <h3 className="text-2xl font-bold text-blue-500">+{wpmImprovementPercent}%</h3>
              </div>
              <div className="bg-white dark:bg-gray-700 p-2 rounded-full">
                <ArrowUpRight className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="wpm">WPM</TabsTrigger>
            <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
            <TabsTrigger value="combined">Combined</TabsTrigger>
          </TabsList>
          
          <TabsContent value="wpm" className="h-[300px]">
            <div className="flex flex-col h-full justify-center items-center">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">WPM Progress Chart</h3>
                <p className="text-gray-600 dark:text-gray-400">Your typing speed has improved from {startWpm} to {currentWpm} WPM</p>
              </div>
              
              <div className="w-full h-40 bg-gray-100 dark:bg-gray-700 rounded-lg relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                  <div className="w-1/6 h-[30%] bg-primary/30 mx-0.5 rounded-t-sm"></div>
                  <div className="w-1/6 h-[40%] bg-primary/30 mx-0.5 rounded-t-sm"></div>
                  <div className="w-1/6 h-[35%] bg-primary/30 mx-0.5 rounded-t-sm"></div>
                  <div className="w-1/6 h-[50%] bg-primary/30 mx-0.5 rounded-t-sm"></div>
                  <div className="w-1/6 h-[60%] bg-primary/30 mx-0.5 rounded-t-sm"></div>
                  <div className="w-1/6 h-[75%] bg-primary mx-0.5 rounded-t-sm"></div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="accuracy" className="h-[300px]">
            <div className="flex flex-col h-full justify-center items-center">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-green-500 mb-2">Accuracy Progress</h3>
                <p className="text-gray-600 dark:text-gray-400">Your typing accuracy has improved from {startAccuracy}% to {currentAccuracy}%</p>
              </div>
              
              <div className="w-full h-40 bg-gray-100 dark:bg-gray-700 rounded-lg relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                  <div className="w-1/6 h-[70%] bg-green-500/30 mx-0.5 rounded-t-sm"></div>
                  <div className="w-1/6 h-[75%] bg-green-500/30 mx-0.5 rounded-t-sm"></div>
                  <div className="w-1/6 h-[80%] bg-green-500/30 mx-0.5 rounded-t-sm"></div>
                  <div className="w-1/6 h-[85%] bg-green-500/30 mx-0.5 rounded-t-sm"></div>
                  <div className="w-1/6 h-[90%] bg-green-500/30 mx-0.5 rounded-t-sm"></div>
                  <div className="w-1/6 h-[95%] bg-green-500 mx-0.5 rounded-t-sm"></div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="combined" className="h-[300px]">
            <div className="flex flex-col h-full justify-center items-center">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Combined Progress</h3>
                <p className="text-gray-600 dark:text-gray-400">View both WPM and accuracy improvements</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-medium text-center mb-2">WPM</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{startWpm}</span>
                    <div className="h-2 flex-1 mx-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-sm font-bold">{currentWpm}</span>
                  </div>
                </div>
                
                <div className="bg-green-500/10 p-4 rounded-lg">
                  <h4 className="font-medium text-center mb-2">Accuracy</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{startAccuracy}%</span>
                    <div className="h-2 flex-1 mx-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-sm font-bold">{currentAccuracy}%</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 flex justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <BarChart2 className="h-4 w-4 mr-2" />
            View Detailed Statistics
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}