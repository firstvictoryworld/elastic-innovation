import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';

type IButtonTypes = 'button' | 'submit';

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: IButtonTypes;
  additionalClassNames?: string;
}

const Button: FC<IButtonProps> = ({
  children,
  onClick,
  type = 'button',
  additionalClassNames = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        'flex min-w-[200px] items-center justify-between rounded-full py-4 pl-6 pr-3 text-2xl text-white',
        additionalClassNames,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
