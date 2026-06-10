import React from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Typography = {
  H1: ({ children, className, ...props }: TypographyProps) => (
    <h1 className={className} {...props}>
      {children}
    </h1>
  ),
  H5: ({ children, className, ...props }: TypographyProps) => (
    <h5 className={className} {...props}>
      {children}
    </h5>
  ),
  H6: ({ children, className, ...props }: TypographyProps) => (
    <h6 className={className} {...props}>
      {children}
    </h6>
  ),
  P: ({ children, className, ...props }: TypographyProps) => (
    <p className={className} {...props}>
      {children}
    </p>
  ),
};

export default Typography;
