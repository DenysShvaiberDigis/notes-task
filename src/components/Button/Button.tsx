import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary';
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={classNames(styles.button, styles[variant], { [styles.disabled]: disabled }, className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};