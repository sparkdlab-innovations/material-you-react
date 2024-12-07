'use client';

import { HtmlHTMLAttributes } from 'react';
import styles from './RadioButton.module.css';

export default function RadioButton({
  toggleState,
  onToggle,
  isDisabled,
  ...props
}: {
  toggleState: boolean;
  onToggle?: () => void;
  isDisabled?: boolean;
} & HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${styles.root} ${
        toggleState ? styles.unselected : ''
      } ${isDisabled ? styles.disabled : ''} ${props['className'] ?? ''}`}
      onMouseDown={
        !isDisabled
          ? (e) => {
              const ripple = e.currentTarget.querySelector(`.${styles.ripple}`);
              const mouseX =
                e.clientX -
                e.currentTarget.getBoundingClientRect().left -
                e.currentTarget.getBoundingClientRect().width / 2;
              const mouseY =
                e.clientY -
                e.currentTarget.getBoundingClientRect().top -
                e.currentTarget.getBoundingClientRect().height / 2;

              if (ripple) {
                const boxDimension = e.currentTarget.clientWidth * 2.5;

                ripple.setAttribute(
                  'style',
                  `transform: translate(${mouseX}px, ${mouseY}px); transition: opacity 250ms, width 500ms, height 500ms; opacity: 0.2; width: ${boxDimension}px; height: ${boxDimension}px;`,
                );
              }
            }
          : undefined
      }
      onClick={
        !isDisabled
          ? (e) => {
              const ripple = e.currentTarget.querySelector(`.${styles.ripple}`);
              const mouseX =
                e.clientX -
                e.currentTarget.getBoundingClientRect().left -
                e.currentTarget.getBoundingClientRect().width / 2;
              const mouseY =
                e.clientY -
                e.currentTarget.getBoundingClientRect().top -
                e.currentTarget.getBoundingClientRect().height / 2;

              if (ripple) {
                const boxDimension = e.currentTarget.clientWidth * 2.5;

                setTimeout(() => {
                  ripple.setAttribute(
                    'style',
                    `transform: translate(${mouseX}px, ${mouseY}px); transition: opacity 350ms, width 500ms, height 500ms; opacity: 0; width: ${boxDimension}px; height: ${boxDimension}px;`,
                  );
                }, 300);

                setTimeout(() => {
                  ripple.setAttribute(
                    'style',
                    `transform: translate(${mouseX}px, ${mouseY}px); transition: opacity 200ms, width 0ms, height 0ms; opacity: 0; width: 0px; height: 0px;`,
                  );
                }, 300 + 350);
              }

              onToggle?.();
            }
          : undefined
      }
      {...props}
    >
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>
      <div className={styles.ripple}></div>
      <div className={styles.foreground}>
        <span className={`${styles.icon} material-symbols-outlined`}>
          check
        </span>
      </div>
    </div>
  );
}
