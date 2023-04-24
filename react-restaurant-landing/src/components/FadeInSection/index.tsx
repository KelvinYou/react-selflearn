import React, { useEffect, useRef, useState } from 'react';

import "./FadeInSection.scss";

const FadeInSection: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const domRef = useRef<HTMLElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current!);
      }
    });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <section ref={domRef} className={isVisible ? 'is-visible' : ''}>
      {children}
    </section>
  );
};

export default FadeInSection;
