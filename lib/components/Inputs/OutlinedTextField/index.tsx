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

import React, { ChangeEvent, HTMLAttributes, MouseEventHandler } from 'react';
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
}): React.JSX.Element {
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
