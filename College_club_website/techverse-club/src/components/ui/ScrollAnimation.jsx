import { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ 
  children, 
  animation = 'fade-in', // fade-in, slide-up, slide-left, slide-right
  delay = 0,
  threshold = 0.1,
  className = '',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Animation classes
  const animationClasses = {
    'fade-in': 'opacity-0 transition-opacity duration-700 ease-in-out',
    'slide-up': 'opacity-0 translate-y-8 transition-all duration-700 ease-out',
    'slide-left': 'opacity-0 -translate-x-8 transition-all duration-700 ease-out',
    'slide-right': 'opacity-0 translate-x-8 transition-all duration-700 ease-out',
  };

  const visibleClasses = {
    'fade-in': 'opacity-100',
    'slide-up': 'opacity-100 translate-y-0',
    'slide-left': 'opacity-100 translate-x-0',
    'slide-right': 'opacity-100 translate-x-0',
  };

  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${isVisible ? visibleClasses[animation] : ''} ${className}`}
      style={delayStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;