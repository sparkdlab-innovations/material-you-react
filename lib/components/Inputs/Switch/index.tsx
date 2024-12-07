'use client';

import { HtmlHTMLAttributes } from 'react';
import styles from './Switch.module.css';

export default function Switch({
  toggleStage,
  onToggle,
  trueStateIcon,
  falseStateIcon,
  isDisabled,
  ...props
}: {
  toggleStage: boolean;
  onToggle?: () => void;
  trueStateIcon?: string;
  falseStateIcon?: string;
  isDisabled?: boolean;
} & HtmlHTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={`${styles.root} ${
        falseStateIcon && trueStateIcon ? styles.hasIcon : ''
      } ${toggleStage ? styles.active : ''} ${
        isDisabled ? styles.disabled : ''
      } ${props['className'] ?? ''}`}
      onMouseDown={
        !isDisabled
          ? (e) => {
              e.currentTarget.classList.add(styles.pressed);
            }
          : undefined
      }
      onMouseUp={
        !isDisabled
          ? (e) => {
              e.currentTarget.classList.remove(styles.pressed);
            }
          : undefined
      }
      onClick={
        onToggle && !isDisabled
          ? (e) => {
              onToggle();
              e.currentTarget.classList.remove(styles.pressed);
            }
          : undefined
      }
      {...props}
    >
      <div className={styles.background}></div>
      <div className={styles.foreground}>
        {!toggleStage && falseStateIcon && trueStateIcon && (
          <span className={`${styles.icon} material-symbols-outlined`}>
            {falseStateIcon}
          </span>
        )}
        {toggleStage && trueStateIcon && (
          <span className={`${styles.icon} material-symbols-outlined`}>
            {trueStateIcon}
          </span>
        )}
      </div>
    </div>
  );
}
