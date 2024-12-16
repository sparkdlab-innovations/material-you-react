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
import { usePath } from '../../../utils';
import { InkWell } from '../../Interactions';
import styles from './NavigationItem.module.css';
import { RouteType } from './NavigationItem.type';

export default function NavigationItem({
  mode,
  href,
  shortLabel,
  label,
  icon,
  activeRegex,
  LinkElement = 'a',
}: {
  mode: 'compact' | 'expanded';
  LinkElement?: React.ElementType;
} & RouteType): JSX.Element {
  const pathname = usePath();
  const isActive = useMemo(() => {
    return new RegExp(activeRegex).test(pathname);
  }, [activeRegex, pathname]);

  return (
    <LinkElement
      href={href}
      className={styles.root}
    >
      <InkWell
        height={mode === 'expanded' ? '56px' : '32px'}
        width={mode === 'expanded' ? '336px' : '56px'}
        borderRadius={mode === 'expanded' ? '28px' : '16px'}
        backgroundColor={
          isActive ? 'var(--md-sys-color-secondary-container)' : 'transparent'
        }
        foregroundColor='var(--md-sys-color-on-secondary-container)'
        overlayColor='var(--md-sys-color-on-secondary-container)'
      >
        <div
          className={`${styles.inkwellContent} ${mode === 'expanded' && styles.expanded}`}
        >
          <span
            className={`${styles.icon} ${isActive && styles.active} material-symbols-outlined`}
          >
            {icon}
          </span>
          {mode === 'expanded' && (
            <span className={`${styles.label} ${isActive && styles.active}`}>
              {label}
            </span>
          )}
        </div>
      </InkWell>
      {mode === 'compact' && (
        <span className={`${styles.label} ${isActive && styles.active}`}>
          {shortLabel}
        </span>
      )}
    </LinkElement>
  );
}
