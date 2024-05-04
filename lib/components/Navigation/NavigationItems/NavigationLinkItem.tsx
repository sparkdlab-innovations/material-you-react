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

import { useLongPress } from '@uidotdev/usehooks';
import React, { useContext, useMemo, useRef } from 'react';
import NavigationContext from '../NavigationContext';
import styles from '../navigation.module.css';

function NavigationLinkItem({
  index,
  routePath,

  text,
  badge,

  icon,
  selectedIcon,
  disabledIcon,

  showInBar,
  showInRail,
  showInDrawer,

  isDisabled,

  onTap,
  onHover,
  onLongPress,
}: {
  index: number;
  routePath?: string;

  text: string;
  badge?: string;

  icon: string;
  selectedIcon?: string;
  disabledIcon?: string;

  showInBar?: boolean;
  showInRail?: boolean;
  showInDrawer?: boolean;

  isDisabled?: boolean;

  onTap: () => void;
  onHover?: () => void;
  onLongPress?: () => void;
}): React.JSX.Element {
  const navigationContext = useContext(NavigationContext);
  if (!navigationContext) {
    throw new Error('NavigationLinkItem must be used within a NavigationDrawer, NavigationRail, or NavigationBar');
  }

  const buttonRef = useRef<HTMLDivElement>(null);

  const isSelected = useMemo(() => {
    return navigationContext.activeRouteIndex === index;
  }, [navigationContext, index]);

  const currentIcon = useMemo(() => {
    if (isSelected) {
      return selectedIcon ?? icon;
    } else if (isDisabled) {
      return disabledIcon ?? icon;
    }
    return icon;
  }, [icon, selectedIcon, disabledIcon, isSelected, isDisabled]);

  const isDrawerItem = useMemo(() => {
    return navigationContext.navigationContainerType === 'drawer';
  }, [navigationContext]);

  const isRailItem = useMemo(() => {
    return navigationContext.navigationContainerType === 'rail';
  }, [navigationContext]);

  const isBarItem = useMemo(() => {
    return navigationContext.navigationContainerType === 'bar';
  }, [navigationContext]);

  const isShown = useMemo(() => {
    if (showInBar && isBarItem) {
      return true;
    }

    if (showInRail && isRailItem) {
      return true;
    }

    if (showInDrawer && isDrawerItem) {
      return true;
    }

    return false;
  }, [showInBar, showInRail, showInDrawer, isBarItem, isRailItem, isDrawerItem]);

  const longPressAttributes = useLongPress(
    () => {
      if (isDisabled) return;
      if (onLongPress) {
        onLongPress();
      } else {
        if (routePath) {
          navigationContext.setActiveRoute(index, routePath);
        }
        onTap();
      }
    },
    {
      onStart: () => {
        if (isDisabled) return;
        buttonRef.current?.querySelector(`div.${styles.navigationLinkItemRipple}`)?.classList.add(styles.rippleActive);
      },
      onFinish: () => {
        if (isDisabled) return;
        buttonRef.current
          ?.querySelector(`div.${styles.navigationLinkItemRipple}`)
          ?.classList.remove(styles.rippleActive);
      },
      onCancel: () => {
        if (isDisabled) return;
        buttonRef.current
          ?.querySelector(`div.${styles.navigationLinkItemRipple}`)
          ?.classList.replace(styles.rippleActive, styles.rippleActiveDisappear);
        setTimeout(() => {
          buttonRef.current
            ?.querySelector(`div.${styles.navigationLinkItemRipple}`)
            ?.classList.remove(styles.rippleActiveDisappear);
        }, 500);
        if (routePath) {
          navigationContext.setActiveRoute(index, routePath);
        }
        onTap();
      },
      threshold: 200,
    },
  );

  if (!isShown) {
    return <></>;
  }

  if (isBarItem) {
    return (
      <div
        key={`navigation-item-${index}-link-${text.replaceAll(' ', '-')}`}
        className={`${styles.navigationLinkItem} ${styles.barItem} ${isSelected ? styles.navigationItemActive : ''}`}
        ref={buttonRef}
        {...longPressAttributes}
        onMouseOver={onHover}
      >
        <div className={styles.navigationBarItemContent}>
          <span className={`material-symbols-outlined icon-filled ${styles.navigationLinkItemIcon}`}>
            {currentIcon}
          </span>
          <div className={styles.navigationBarItemRipple}></div>
          <div className={styles.navigationBarItemBackdrop}></div>
        </div>
        <div className={styles.navigationLinkItemLabel}>{text}</div>
      </div>
    );
  }

  return (
    <>
      <div
        key={`navigation-item-${index}-link-${text.replaceAll(' ', '-')}`}
        className={`${styles.navigationLinkItem} ${isSelected ? styles.navigationItemActive : ''} ${isRailItem ? styles.railItem : ''}`}
        ref={buttonRef}
        {...longPressAttributes}
        onMouseOver={onHover}
      >
        <div className={styles.navigationLinkItemContent}>
          <div className={styles.navigationItemPrimaryContent}>
            <span className={`material-symbols-outlined icon-filled ${styles.navigationLinkItemIcon}`}>
              {currentIcon}
            </span>
            {
              // TODO: use typography component
            }
            <span className={styles.navigationLinkItemLabel}>{text}</span>
          </div>
          {
            // TODO: use typography component
          }
          <span className={styles.navigationLinkItemBadge}>{badge}</span>
        </div>
        <div className={styles.navigationLinkItemRipple}></div>
        <div className={styles.navigationLinkItemBackdrop}></div>
      </div>
      {isRailItem && (
        <div className={styles.navigationRailLinkItemLabelContainer}>
          <span className={`${styles.navigationRailLinkItemLabel} ${isSelected ? styles.navigationItemActive : ''}`}>
            {text}
          </span>
        </div>
      )}
    </>
  );
}

export default NavigationLinkItem;
