import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../components/ui/card";
import { Zap, Target, Clock, Award, BarChart, Keyboard, Trophy, BookOpen, Sparkles } from "lucide-react";
import TypingTestLink from "../components/typing-test-link";
import { Link } from "react-router-dom";
import { FeatureCard } from "../components/feature-card";
import { TestimonialCard } from "../components/testimonial-card";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      {/* Hero Section with Animation */}
      <div className="w-full bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex flex-col space-y-4 text-center md:text-left md:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 mx-auto md:mx-0">
                Test Your Typing Speed
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Master Your Typing Skills
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                Improve your typing speed and accuracy with TypeAce's free online typing tests and practice exercises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 mx-auto md:mx-0">
                <Link 
                  to="/typing-speed-test"
                  className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-bold text-white">Start Typing Test</span>
                    <span className="animate-pulse text-white">⚡</span>
                  </span>
                </Link>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-primary/30 text-primary hover:bg-primary/5 px-8 py-6 text-lg rounded-xl"
                >
                  <Link to="/typing-practice">
                    <span>Practice Typing</span>
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-8 pt-6">
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-3xl font-bold text-primary">100%</span>
                  <span className="text-sm text-gray-500">Free</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-3xl font-bold text-primary">10K+</span>
                  <span className="text-sm text-gray-500">Users</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-3xl font-bold text-primary">4.9/5</span>
                  <span className="text-sm text-gray-500">Rating</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20 bg-white dark:bg-gray-800">
                <div className="absolute top-0 left-0 right-0 h-10 bg-gray-100 dark:bg-gray-700 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="pt-10 p-6 bg-white dark:bg-gray-800">
                  <div className="text-center py-8 px-4">
                    <h3 className="text-2xl font-bold mb-4">Test Your Speed Now</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">Find out how fast you can type with our accurate WPM calculator</p>
                    <div className="flex justify-center">
                      <Link 
                        to="/typing-speed-test" 
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                      >
                        <span className="font-bold text-white">Start Test</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 right-1/2 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-1/4 right-1/4 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <Card className="w-full max-w-5xl mx-auto shadow-lg border-primary/20 text-center animate-in fade-in duration-500 bg-white dark:bg-gray-800">
          <CardHeader>
            <h2 className="text-3xl font-bold text-primary">Why Choose TypeAce?</h2>
            <CardDescription className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              The most accurate and user-friendly typing test platform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 text-center">
            <h2 className="text-2xl font-bold mb-8 text-center">Explore Our Typing Tests</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <FeatureCard
                icon={<Keyboard className="h-6 w-6" />}
                title="Typing Practice"
                description="Improve your skills with various timed tests and exercises designed for all skill levels."
                accentColor="var(--primary)"
                onClick={() => navigate('/typing-practice')}
              />
              <FeatureCard
                icon={<Zap className="h-6 w-6" />}
                title="Speed Test"
                description="Measure your WPM and accuracy with our professional typing speed test."
                accentColor="#0ea5e9"
                onClick={() => navigate('/typing-speed-test')}
              />
              <FeatureCard
                icon={<Target className="h-6 w-6" />}
                title="Accuracy Training"
                description="Focus on precision with tests designed to improve your typing accuracy."
                accentColor="#8b5cf6"
                onClick={() => navigate('/free-typing-test')}
              />
              <FeatureCard
                icon={<Clock className="h-6 w-6" />}
                title="Timed Tests"
                description="Challenge yourself with 30-second, 1-minute, 2-minute, and 5-minute tests."
                accentColor="#f59e0b"
                onClick={() => navigate('/typing-tests')}
              />
              <FeatureCard
                icon={<BookOpen className="h-6 w-6" />}
                title="English Typing"
                description="Improve your English typing skills with our specialized tests and exercises."
                accentColor="#10b981"
                onClick={() => navigate('/english-typing-test')}
              />
              <FeatureCard
                icon={<Trophy className="h-6 w-6" />}
                title="Progress Tracking"
                description="Monitor your improvement over time with detailed statistics and insights."
                accentColor="#ec4899"
                onClick={() => navigate('/typing-speed-test')}
              />
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 mt-12 shadow-sm">
              <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Why Improve Your Typing Skills?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Boost Productivity</h3>
                    <p className="text-gray-600 dark:text-gray-300">Save hours each week by typing faster and more accurately, allowing you to focus on what matters most.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-500/10 p-3 rounded-full group-hover:bg-blue-500/20 transition-colors">
                    <BarChart className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Track Progress</h3>
                    <p className="text-gray-600 dark:text-gray-300">See your improvement over time with detailed metrics and personalized insights.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-purple-500/10 p-3 rounded-full group-hover:bg-purple-500/20 transition-colors">
                    <Target className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Reduce Errors</h3>
                    <p className="text-gray-600 dark:text-gray-300">Improve accuracy to minimize mistakes in your work and create more professional content.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-amber-500/10 p-3 rounded-full group-hover:bg-amber-500/20 transition-colors">
                    <Clock className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Save Time</h3>
                    <p className="text-gray-600 dark:text-gray-300">Complete tasks faster with improved typing efficiency, giving you more time for other activities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonials Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center mb-2">What Our Users Say</h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Thousands of people have improved their typing skills with TypeAce</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <TestimonialCard
                  quote="TypeAce helped me increase my typing speed from 45 to 85 WPM in just three weeks. The interface is clean and the tests are challenging."
                  author="Michael Chen"
                  role="Software Developer"
                  rating={5}
                />
                <TestimonialCard
                  quote="As a writer, typing speed is crucial for my productivity. This site has the best typing test I've found online. I practice daily!"
                  author="Sarah Johnson"
                  role="Content Writer"
                  rating={5}
                />
                <TestimonialCard
                  quote="I recommend TypeAce to all my students. It's an excellent tool for improving both speed and accuracy in typing."
                  author="David Rodriguez"
                  role="Computer Science Teacher"
                  rating={4}
                />
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Challenge Yourself?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your typing journey today and see how quickly you can improve!
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center pt-6 gap-8">
            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 p-8 rounded-2xl w-full max-w-3xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Start Your Typing Journey</h3>
                  <p className="text-gray-600 dark:text-gray-300">Take your first test and begin improving today</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <TypingTestLink 
                    to="/typing-tests" 
                    variant="secondary"
                    className="text-lg px-6 py-3 w-full sm:w-auto justify-center group transition-all duration-300"
                  >
                    <span>Explore Tests</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </TypingTestLink>
                  <TypingTestLink 
                    to="/typing-speed-test" 
                    variant="primary"
                    className="text-lg px-8 py-4 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary"
                  >
                    <span className="animate-pulse mr-2">⚡</span>
                    <span>Start Typing Now</span>
                  </TypingTestLink>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-8 text-gray-500 dark:text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>No Registration Required</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Instant Results</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}