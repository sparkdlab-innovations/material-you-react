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

import React, { useRef } from 'react';
import { NavigationItem, RouteType } from '..';
import { InkWell } from '../../Interactions';
import styles from './NavigationRail.module.css';

export default function NavigationRail({
  routes,
  expandable,
  action,
  alignMode = 'start',
  LinkElement = 'a',
}: {
  routes: RouteType[];
  expandable?: true;
  action?: {
    icon: string;
    onTap?: () => void;
  };
  alignMode?: 'start' | 'center' | 'end';
  LinkElement?: React.ElementType;
}): React.JSX.Element {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <nav
        className={`${styles.root} ${expandable && styles.expandable} ${action && styles.hasAction}`}
      >
        <div className={styles.navHeader}>
          {expandable && (
            <InkWell
              height='56px'
              width='56px'
              borderRadius='12px'
              backgroundColor='transparent'
              foregroundColor='var(--md-sys-color-on-surface)'
              overlayColor='var(--md-sys-color-on-surface-variant)'
              onTap={() => {
                dialog.current?.showModal();
              }}
            >
              <span className={`${styles.icon} material-symbols-outlined`}>
                menu
              </span>
            </InkWell>
          )}
          {action && (
            <InkWell
              height='56px'
              width='56px'
              borderRadius='12px'
              backgroundColor='var(--md-sys-color-primary-container)'
              foregroundColor='var(--md-sys-color-on-primary-container)'
              overlayColor='var(--md-sys-color-on-primary-container)'
              boxShadow='0 1px 1px 0 var(--md-sys-color-shadow)'
            >
              <span className={`${styles.icon} material-symbols-outlined`}>
                {action.icon}
              </span>
            </InkWell>
          )}
        </div>
        <div
          className={`${styles.navItems} ${alignMode === 'start' && styles.startAlign} ${alignMode === 'center' && styles.centerAlign} ${alignMode === 'end' && styles.endAlign}`}
        >
          {routes.map((route) => (
            <NavigationItem
              key={`nav-item-${route.href}`}
              mode='compact'
              {...route}
              LinkElement={LinkElement}
            />
          ))}
        </div>
      </nav>
      {expandable && (
        <dialog
          className={styles.dialog}
          ref={dialog}
        >
          <div className={styles.dialogContent}>
            <InkWell
              height='56px'
              width='56px'
              borderRadius='12px'
              foregroundColor='var(--md-sys-color-on-surface)'
              overlayColor='var(--md-sys-color-on-surface-variant)'
              onTap={() => {
                dialog.current?.close();
              }}
              className={styles.closeButton}
            >
              <span className={`${styles.icon} material-symbols-outlined`}>
                close
              </span>
            </InkWell>
            {routes.map((route) => (
              <NavigationItem
                key={`nav-item-${route.href}`}
                mode='expanded'
                {...route}
                LinkElement={LinkElement}
              />
            ))}
          </div>
        </dialog>
      )}
    </>
  );
}
