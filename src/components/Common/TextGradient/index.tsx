import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';

interface ITextGradientProps {
  children: ReactNode;
  colors: string[];
  additionalClassNames?: string;
}
const TextGradient: FC<ITextGradientProps> = ({
  children,
  colors,
  additionalClassNames = '',
  ...rest
}) => {
  const gradient = `linear-gradient(to right, ${colors.join(', ')})`;

  return (
    <span
      className={classNames('bg-clip-text text-transparent', additionalClassNames)}
      style={{ backgroundImage: gradient }}
      {...rest}
    >
      {children}
    </span>
  );
};

export default TextGradient;
