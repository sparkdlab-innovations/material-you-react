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

import { useMemo } from 'react';
import { InkWell } from '../../Interactions';
import styles from './IconButton.module.css';

export default function IconButton({
  mode,
  icon,
  toggle,
  onTap,
  isDisabled,
  className,
}: {
  mode: 'filled' | 'filled-tonal' | 'outlined' | 'standard';
  icon: string;
  toggle?: boolean;
  onTap?: () => void;
  isDisabled?: boolean;
  className?: string;
}) {
  const inkWellProps = useMemo<{
    boxShadow?: string;
    outline?: string;
    foregroundColor: string;
    backgroundColor: string;
    overlayColor: string;
    disabledColor: string;
  }>(() => {
    switch (`${mode}-${(toggle ?? 'selected') ? 'selected' : 'unselected'}`) {
      case 'filled-unselected':
        return {
          boxShadow: '0px 0px 0px 0px var(--md-sys-color-shadow)',
          foregroundColor: 'var(--md-sys-color-primary)',
          backgroundColor: 'var(--md-sys-color-surface-container-highest)',
          overlayColor: 'var(--md-sys-color-primary)',
          disabledColor: 'var(--md-sys-color-on-surface)',
        };
      case 'filled-selected':
        return {
          boxShadow: '0px 0px 0px 0px var(--md-sys-color-shadow)',
          foregroundColor: 'var(--md-sys-color-on-primary)',
          backgroundColor: 'var(--md-sys-color-primary)',
          overlayColor: 'var(--md-sys-color-on-primary)',
          disabledColor: 'var(--md-sys-color-on-surface)',
        };
      case 'filled-tonal-unselected':
        return {
          boxShadow: '0px 0px 0px 0px var(--md-sys-color-shadow)',
          foregroundColor: 'var(--md-sys-color-on-surface-variant)',
          backgroundColor: 'var(--md-sys-color-surface-container-highest)',
          overlayColor: 'var(--md-sys-color-on-surface-variant)',
          disabledColor: 'var(--md-sys-color-on-surface)',
        };
      case 'filled-tonal-selected':
        return {
          boxShadow: '0px 0px 0px 0px var(--md-sys-color-shadow)',
          foregroundColor: 'var(--md-sys-color-on-secondary-container)',
          backgroundColor: 'var(--md-sys-color-secondary-container)',
          overlayColor: 'var(--md-sys-color-on-secondary-container)',
          disabledColor: 'var(--md-sys-color-on-surface)',
        };
      case 'outlined-unselected':
        return {
          outline: '1px solid var(--md-sys-color-outline)',
          foregroundColor: 'var(--md-sys-color-on-surface-variant)',
          backgroundColor: 'transparent',
          overlayColor: 'var(--md-sys-color-on-surface-variant)',
          disabledColor: 'var(--md-sys-color-on-surface)',
        };
      case 'outlined-selected':
        return {
          outline: 'none',
          foregroundColor: 'var(--md-sys-color-inverse-on-surface)',
          backgroundColor: 'var(--md-sys-color-inverse-surface)',
          overlayColor: 'var(--md-sys-color-inverse-on-surface)',
          disabledColor: 'var(--md-sys-color-on-surface)',
        };
      case 'standard-unselected':
        return {
          foregroundColor: 'var(--md-sys-color-on-surface-variant)',
          backgroundColor: 'transparent',
          overlayColor: 'var(--md-sys-color-on-surface-variant)',
          disabledColor: 'var(--md-sys-color-on-surface)',
        };
      case 'standard-selected':
        return {
          foregroundColor: 'var(--md-sys-color-primary)',
          backgroundColor: 'transparent',
          overlayColor: 'var(--md-sys-color-primary)',
          disabledColor: 'var(--md-sys-color-on-surface)',
        };
      default:
        throw new Error('Invalid mode');
    }
  }, [mode, toggle]);

  return (
    <InkWell
      onTap={onTap}
      isDisabled={isDisabled}
      height='40px'
      width='40px'
      {...inkWellProps}
      className={className}
    >
      <div className={styles.root}>
        <span className={`${styles.icon} material-symbols-outlined`}>
          {icon}
        </span>
      </div>
    </InkWell>
  );
}
