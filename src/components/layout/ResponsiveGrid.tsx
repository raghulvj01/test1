import React from 'react';

interface ResponsiveGridProps {
  children: React.ReactNode;
  cols?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
  className?: string;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  cols = { base: 1, sm: 2, lg: 3 },
  gap = '8',
  className = '',
}) => {
  const getGridCols = () => {
    return `
      grid-cols-${cols.base || 1}
      ${cols.sm ? `sm:grid-cols-${cols.sm}` : ''}
      ${cols.md ? `md:grid-cols-${cols.md}` : ''}
      ${cols.lg ? `lg:grid-cols-${cols.lg}` : ''}
      ${cols.xl ? `xl:grid-cols-${cols.xl}` : ''}
    `;
  };

  return (
    <div className={`grid gap-${gap} ${getGridCols()} ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;