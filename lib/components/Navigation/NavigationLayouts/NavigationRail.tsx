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

import React, { useMemo, useState } from 'react';
import isValidChildComponent from '../../../utils/isValidChildComponent';
import NavigationContext from '../NavigationContext';
import {
  NavigationDividerItem,
  NavigationHeaderItem,
  NavigationLinkItem,
} from '../NavigationItems';
import styles from '../navigation.module.css';

function NavigationRail({
  children,
  isExpandable = false,
  actionButtonIcon,
  actionButtonOnTap,
}: {
  children: React.ReactNode;
  isExpandable?: boolean;
  actionButtonIcon?: string;
  actionButtonOnTap?: () => void;
}): React.JSX.Element {
  const [activeRouteIndex, setActiveRouteIndex] = useState<number>(0);
  const [activeRoutePath, setActiveRoutePath] = useState<string>('/');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function setActiveRoute(index: number, path: string) {
    setActiveRouteIndex(index);
    setActiveRoutePath(path);
  }

  const visibleChildren = useMemo(() => {
    return React.Children.map<boolean, React.ReactNode>(children, (child) => {
      if (
        React.isValidElement(child) &&
        child.type === NavigationLinkItem &&
        child.props.showInBar
      ) {
        return true;
      }
      return false;
    })?.filter((child) => child === true).length;
  }, [children]);

  if (
    !isValidChildComponent(children, [
      NavigationLinkItem,
      NavigationDividerItem,
      NavigationHeaderItem,
    ])
  ) {
    throw new Error(
      'Children of NavigationRail must be of type NavigationLinkItem, NavigationHeaderItem, or NavigationDividerItem only.',
    );
  }

  if (!visibleChildren || visibleChildren < 3) {
    throw new Error(
      'At least 3 NavigationLinkItem(s) must be visible in the NavigationBar.',
    );
  }

  if (visibleChildren > 7) {
    throw new Error(
      'At most 7 NavigationLinkItem(s) can be visible in the NavigationBar.',
    );
  }

  return (
    <NavigationContext.Provider
      value={{
        navigationContainerType: isExpanded && isExpandable ? 'drawer' : 'rail',
        activeRouteIndex,
        activeRoutePath,
        setActiveRoute,
      }}
    >
      <nav
        id='navigation-rail-root'
        className={`${styles.navigationRailComponentRoot} ${isExpanded && isExpandable ? styles.expandedNavigationRail : ''}`}
      >
        <div className={styles.navigationRailHeader}>
          {isExpandable && (
            <div
              className={styles.expandButton}
              onClick={() => {
                setIsExpanded((value) => !value);
              }}
            >
              <span className='material-symbols-outlined icon-filled'>
                menu
              </span>
            </div>
          )}
          {actionButtonIcon && actionButtonOnTap && (
            <div
              className={styles.navigationRailActionButton}
              onClick={actionButtonOnTap}
            >
              <span className='material-symbols-outlined icon-filled'>
                {actionButtonIcon}
              </span>
            </div>
          )}
        </div>
        <div
          className={`${styles.navigationRailContent} ${actionButtonIcon && actionButtonOnTap ? styles.navigationRailContentWithActionButton : ''}`}
        >
          {children}
        </div>
      </nav>
    </NavigationContext.Provider>
  );
}

export default NavigationRail;
