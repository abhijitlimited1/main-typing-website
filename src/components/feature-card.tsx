import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  accentColor?: string;
  onClick?: () => void;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  accentColor = 'var(--primary)',
  onClick
}: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-xl transition-all duration-300",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
      style={{
        borderLeft: `4px solid ${accentColor}`
      }}
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at top left, ${accentColor}15, transparent 70%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <div 
          className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
          style={{
            backgroundColor: `${accentColor}15`,
            color: accentColor
          }}
        >
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      
      {/* Corner accent */}
      <div 
        className="absolute -bottom-2 -right-2 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, ${accentColor}, transparent 70%)`,
        }}
      />
    </div>
  );
}