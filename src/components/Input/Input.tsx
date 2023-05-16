import classNames from 'classnames';
import { FC, InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

type TFormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<TFormInputProps> = ({ label, ...otherProps }) => {
  const hasValue = otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length;
  
  return (
    <div className={styles.group}>
      <input className={classNames(styles.input, { [styles.hasValue]: hasValue })} {...otherProps} />

      {label && (
        <label className={classNames(styles.label, { [styles.shrink]: hasValue })}>
          {label}
        </label>
      )}
    </div>
  );
};
