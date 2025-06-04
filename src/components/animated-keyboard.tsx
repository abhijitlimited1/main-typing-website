import { useEffect, useRef, useState } from 'react';

export function AnimatedKeyboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Delay animation start to improve initial page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    
    setCanvasDimensions();
    
    // Use a throttled resize listener to improve performance
    let resizeTimeout: number | null = null;
    const handleResize = () => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
      resizeTimeout = window.setTimeout(() => {
        setCanvasDimensions();
      }, 200);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Define keyboard keys - reduced number for better performance
    const keys = [
      'Q', 'W', 'E', 'R', 'T', 
      'A', 'S', 'D', 'F', 
      'Z', 'X', 'C', 'V'
    ];
    
    // Create particles for each key - reduced number and complexity
    const particles = keys.map(key => ({
      key,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 18 + Math.random() * 10, // Smaller size
      speedX: (Math.random() - 0.5) * 0.8, // Slower movement
      speedY: (Math.random() - 0.5) * 0.8, // Slower movement
      color: `hsl(${Math.random() * 360}, 70%, 70%)`,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1 // Slower rotation
    }));
    
    // Use requestAnimationFrame with frame limiting for better performance
    let lastFrameTime = 0;
    const targetFPS = 30; // Lower FPS for better performance
    const frameInterval = 1000 / targetFPS;
    
    // Animation loop with frame limiting
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastFrameTime;
      
      if (deltaTime > frameInterval) {
        lastFrameTime = currentTime - (deltaTime % frameInterval);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          // Update position
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.rotation += particle.rotationSpeed;
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.speedX *= -1;
          }
          if (particle.y < 0 || particle.y > canvas.height) {
            particle.speedY *= -1;
          }
          
          // Draw key with simplified rendering
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate((particle.rotation * Math.PI) / 180);
          
          // Key background - removed shadow for better performance
          ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
          
          // Key text
          ctx.fillStyle = particle.color;
          ctx.font = `${particle.size * 0.6}px sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(particle.key, 0, 0);
          
          ctx.restore();
        });
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    let animationId = requestAnimationFrame(animate);
    
    // Add visibility detection to pause animation when not visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animationId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationId);
      }
    }, { threshold: 0.1 });
    
    observer.observe(canvas);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, [isVisible]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full -z-10 opacity-15"
      aria-hidden="true"
      style={{ display: isVisible ? 'block' : 'none' }}
    />
  );
}