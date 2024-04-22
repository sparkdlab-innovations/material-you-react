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

import { createContext } from 'react';

// Define the shape of the navigation context
export interface NavigationContextType {
  navigationContainerType: 'drawer' | 'rail' | 'bar';
  activeRouteIndex: number;
  activeRoutePath: string;
  setActiveRoute: (index: number, path: string) => void;
}

// Create the navigation context
const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export default NavigationContext;
