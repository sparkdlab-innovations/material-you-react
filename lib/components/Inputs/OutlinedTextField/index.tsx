'use client';

import { ChangeEvent, HTMLAttributes, MouseEventHandler } from 'react';
import styles from './OutlinedTextField.module.css';

// TODO: Add error message display and styling
// TODO: Add tap to focus on root for input
export default function OutlinedTextField({
  name,
  label,
  placeholder,
  className,
  leadingIcon,
  trailingIcon,
  onClickTrailingIcon,
  onEnterKey,
  enterKeyHint,
  handleInputChange,
  containerProps,
  inputProps,
}: {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  onClickTrailingIcon?: MouseEventHandler<HTMLSpanElement>;
  onEnterKey?: (value: string) => void;
  enterKeyHint?: HTMLAttributes<HTMLInputElement>['enterKeyHint'];
  handleInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  inputProps?: HTMLAttributes<HTMLInputElement>;
}): JSX.Element {
  return (
    <div
      className={`${styles.root} ${!label ? styles.noLabel : ''} ${className}`}
      {...containerProps}
    >
      {leadingIcon && (
        <span className={`${styles.leadingIcon} material-symbols-outlined`}>
          {leadingIcon}
        </span>
      )}
      <div className={styles.inputContainer}>
        {label && (
          <label className={styles.label}>
            <span>{label}</span>
          </label>
        )}
        <input
          name={name}
          aria-label={label}
          title={label}
          placeholder={!label && placeholder ? placeholder : ''}
          className={styles.input}
          enterKeyHint={enterKeyHint}
          onKeyUpCapture={(e) => {
            if (e.key === 'Enter' && onEnterKey) {
              onEnterKey(e.currentTarget.value);
            }
          }}
          onChange={(e) => handleInputChange?.(e)}
          {...inputProps}
        />
      </div>
      {trailingIcon && (
        <span
          className={`${styles.trailingIcon} material-symbols-outlined`}
          onClick={onClickTrailingIcon}
        >
          {trailingIcon}
        </span>
      )}
    </div>
  );
}
