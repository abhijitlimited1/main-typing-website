import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen is mobile-sized
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Common breakpoint for mobile
    };

    // Check on initial load
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Clean up event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}