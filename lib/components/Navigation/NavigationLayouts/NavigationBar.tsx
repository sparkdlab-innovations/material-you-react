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

import React, { useState } from 'react';
import isValidChildComponent from '../../../utils/isValidChildComponent';
import NavigationContext from '../NavigationContext';
import { NavigationDividerItem, NavigationHeaderItem, NavigationLinkItem } from '../NavigationItems';
import styles from '../navigation.module.css';

function NavigationBar({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [activeRouteIndex, setActiveRouteIndex] = useState<number>(0);
  const [activeRoutePath, setActiveRoutePath] = useState<string>('/');

  function setActiveRoute(index: number, path: string) {
    setActiveRouteIndex(index);
    setActiveRoutePath(path);
  }

  if (!isValidChildComponent(children, [NavigationLinkItem, NavigationDividerItem, NavigationHeaderItem])) {
    throw new Error(
      'Children of NavigationBar must be of type NavigationLinkItem, NavigationHeaderItem, or NavigationDividerItem only.',
    );
  }

  return (
    <NavigationContext.Provider
      value={{
        navigationContainerType: 'bar',
        activeRouteIndex,
        activeRoutePath,
        setActiveRoute,
      }}
    >
      <nav
        id='navigation-bar-root'
        className={styles.navigationBarComponentRoot}
      >
        {children}
      </nav>
    </NavigationContext.Provider>
  );
}

export default NavigationBar;
