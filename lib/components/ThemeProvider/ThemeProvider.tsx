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

import React, { useEffect, useMemo, useState } from 'react';
import { MaterialPalette, MaterialTheme } from '../../utils/theme';

/**
 * A component that provides a theme for the application.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be wrapped by the theme provider.
 * @returns {React.JSX.Element} The rendered theme provider component.
 */
export default function ThemeProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [cssBaseline, setCssBaseline] = useState<string>('');

  // TODO: Add support for custom themes.
  // TODO: Allow users to pass in a custom theme object.
  // TODO: Allow users to pass in custom css classes.
  // TODO: Ensure css code is sanitized.

  const theme = useMemo(
    () =>
      new MaterialTheme({
        lightPalette: MaterialPalette.fromSourceColor({
          sourceColorHex: '#3f0aa8',
          isDark: false,
          contrastLevel: 0,
        }),
        darkPalette: MaterialPalette.fromSourceColor({
          sourceColorHex: '#161b61',
          isDark: true,
          contrastLevel: 0,
        }),
      }),
    [],
  );

  useEffect(() => {
    theme
      .getCssBaseline()
      .then((css) => {
        setCssBaseline(css);
      })
      .catch((error) => {
        console.error('Failed to load css baseline:', error);
      });
  }, [theme]);

  return (
    <div id='theme-provider-root'>
      <style>{cssBaseline}</style>
      {children}
    </div>
  );
}
