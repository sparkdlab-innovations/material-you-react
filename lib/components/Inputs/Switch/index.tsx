/**
 * @license
 * Material You React Package
 * Copyright (C) 2024  Rutaj Dash
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, only version 3 of the License.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * The contact information of the author and copyright owner of this
 * program can be found at <https://github.com/rutajdash>
 */

'use client';

import React, { HtmlHTMLAttributes } from 'react';
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
} & HtmlHTMLAttributes<HTMLDivElement>): React.JSX.Element {
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
