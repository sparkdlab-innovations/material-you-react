'use client';

import { HtmlHTMLAttributes } from 'react';
import styles from './Chip.module.css';

type ChipArguments<T> = {
  mode: T;
  label: string;

  leadingIcon?: T extends 'action' | 'input' | 'display' ? string : never;

  toggleState?: T extends 'toggle' ? boolean : never;
  showDeleteIcon?: T extends 'input' ? true : never;

  onTap?: T extends 'action' ? () => void : never;
  onToggle?: T extends 'toggle' ? () => void : never;
  onDelete?: T extends 'input' ? () => void : never;

  isDisabled?: true;
} & HtmlHTMLAttributes<HTMLDivElement>;

export default function Chip<
  T extends 'action' | 'toggle' | 'input' | 'display',
>({
  mode,
  label,
  leadingIcon,
  toggleState,
  showDeleteIcon,
  onTap,
  onToggle,
  onDelete,
  isDisabled,
  ...props
}: ChipArguments<T>) {
  // TODO: fix hover and click effect for input mode's delete icon

  return (
    <div
      className={`${styles.root} ${toggleState ? styles.selected : ''} ${
        isDisabled ? styles.disabled : ''
      } ${props['className']}`}
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

              if (mode === 'action') {
                onTap?.();
              }
              if (mode === 'toggle') {
                onToggle?.();
              }
            }
          : undefined
      }
      {...props}
    >
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>
      <div className={styles.ripple}></div>
      <div className={styles.foreground}>
        {leadingIcon && mode !== 'toggle' && (
          <span className={`${styles.leadingIcon} material-symbols-outlined`}>
            {leadingIcon}
          </span>
        )}
        {mode === 'toggle' && toggleState && (
          <span className={`${styles.leadingIcon} material-symbols-outlined`}>
            check
          </span>
        )}
        <span className={styles.label}>{label}</span>
        {showDeleteIcon && mode === 'input' && (
          <span
            className={`${styles.trailingIcon} material-symbols-outlined`}
            onClick={onDelete}
          >
            close
          </span>
        )}
      </div>
    </div>
  );
}
