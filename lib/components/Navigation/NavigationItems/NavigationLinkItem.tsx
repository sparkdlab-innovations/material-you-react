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

  const isShown = useMemo(() => {
    if (showInBar && navigationContext.navigationContainerType === 'bar') {
      return true;
    }

    if (showInRail && navigationContext.navigationContainerType === 'rail') {
      return true;
    }

    if (showInDrawer && navigationContext.navigationContainerType === 'drawer') {
      return true;
    }

    return false;
  }, [navigationContext, showInBar, showInRail, showInDrawer]);

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

  return (
    <div
      key={`navigation-item-${index}-link-${text.replaceAll(' ', '-')}`}
      className={`${styles.navigationLinkItem} ${isSelected ? styles.navigationItemActive : ''}`}
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
  );
}

export default NavigationLinkItem;
