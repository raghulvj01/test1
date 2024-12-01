import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}>
      {children}
    </section>
  );
};

export default Section;