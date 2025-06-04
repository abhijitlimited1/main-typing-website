// src/components/layout/header.tsx
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu, Feather, Home, Keyboard, Info, Mail, X, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useState, useEffect } from 'react';
import { ThemeSwitcher } from '../theme-switcher';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/typing-speed-test', label: 'Speed Test', icon: Keyboard },
  { href: '/typing-practice', label: 'Practice', icon: Keyboard },
  { href: '/typing-tests', label: 'All Tests', icon: Keyboard },
  { href: '/about', label: 'About', icon: Info },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Header() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
      scrolled && "shadow-sm"
    )}>
      <div className="container flex h-14 md:h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 no-bg">
          <Feather className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">TypeAce</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80 hover:bg-muted px-3 py-2 rounded-md no-bg',
                pathname === link.href 
                  ? 'text-foreground font-medium bg-muted/50' 
                  : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-2">
            <ThemeSwitcher />
            <div className="relative">
              <Link 
                to="/typing-speed-test" 
                className="flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Sparkles className="h-4 w-4 text-white" />
                <span className="font-bold text-white">Start Test</span>
              </Link>
            </div>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="h-9 w-9 rounded-md border"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px] pl-0 border-l">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 px-2 border-b">
                  <div className="flex items-center space-x-2">
                    <Feather className="h-6 w-6 text-primary" />
                    <span className="font-bold text-xl text-black dark:text-white">TypeAce</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-9 w-9 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="Close menu"
                    onClick={closeMobileMenu}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <nav className="flex flex-col py-6 px-3">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-4 mb-2">NAVIGATION</h3>
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={cn(
                          'flex items-center gap-3 px-4 py-3 my-1 rounded-md transition-colors no-bg',
                          isActive 
                            ? 'bg-primary/10 text-primary font-medium' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white'
                        )}
                        onClick={closeMobileMenu}
                      >
                        <Icon className={cn(
                          "h-5 w-5",
                          isActive ? "text-primary" : "text-gray-600 dark:text-gray-400"
                        )} />
                        <span className="text-base font-medium">{link.label}</span>
                      </Link>
                    );
                  })}
                </nav>
                
                <div className="mt-auto border-t py-4 px-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} TypeAce
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}