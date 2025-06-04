import { cn } from '../lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatarUrl,
  rating = 5,
  className
}: TestimonialCardProps) {
  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300",
      className
    )}>
      {/* Rating stars */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg 
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic">
        "{quote}"
      </blockquote>
      
      {/* Author info */}
      <div className="flex items-center">
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt={author}
            className="w-10 h-10 rounded-full mr-4 object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full mr-4 bg-primary/20 text-primary flex items-center justify-center font-bold">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">{author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}