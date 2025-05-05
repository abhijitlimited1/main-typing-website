import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface TypingTestLinkProps {
  to: string;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
  icon?: React.ReactNode;
}

export default function TypingTestLink({
  to,
  children,
  variant = 'default',
  className,
  icon = <ArrowRight className="h-5 w-5" />
}: TypingTestLinkProps) {
  return (
    <Link to={to} className="block">
      <div 
        className={cn(
          "px-4 py-3 rounded-md transition-all duration-200 flex items-center cursor-pointer shadow-sm",
          variant === 'default' && "bg-primary/10 hover:bg-primary/20 text-foreground",
          variant === 'primary' && "bg-primary text-primary-foreground hover:bg-primary/90 pulse-animation",
          variant === 'secondary' && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          "hover:transform hover:translate-y-[-1px] hover:shadow-md relative overflow-hidden",
          className
        )}
      >
        <span className="flex-1 font-medium">{children}</span>
        <span className="ml-2 flex-shrink-0">{icon}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] hover:translate-x-[100%]"></span>
      </div>
    </Link>
  );
}