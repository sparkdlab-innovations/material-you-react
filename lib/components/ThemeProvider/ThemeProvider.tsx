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
 * Props for the ThemeProvider component.
 *
 * @typedef ThemeProviderProps
 * @property {React.ReactNode} children - The child components to be wrapped by the ThemeProvider.
 * @property {MaterialTheme} [theme] - An theme object to customize the Material UI theme. If not provided, a default theme will be used. Alternatively, you can use the `lightSourceColor` and `darkSourceColor` props to customize the theme.
 * @property {string} [lightSourceColor] - The source color for the light palette. If not provided, a default color will be used. Alternatively, you can use the `theme` prop to customize the theme.
 * @property {string} [darkSourceColor] - The source color for the dark palette. If not provided, a default color will be used. Alternatively, you can use the `theme` prop to customize the theme.
 */
interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: MaterialTheme;
  lightSourceColor?: string;
  darkSourceColor?: string;
}

/**
 * A component that provides a theme for the application.
 *
 * @component
 * @param {ThemeProviderProps} props - The component props.
 * @returns {React.JSX.Element} The rendered theme provider component.
 */
export default function ThemeProvider({
  children,
  theme,
  lightSourceColor,
  darkSourceColor,
}: ThemeProviderProps): React.JSX.Element {
  const [cssBaseline, setCssBaseline] = useState<string>('');

  // TODO: Allow users to pass in custom css classes, ensure css code is sanitized.

  const _theme = useMemo(
    () =>
      theme ??
      new MaterialTheme({
        lightPalette: MaterialPalette.fromSourceColor({
          sourceColorHex: lightSourceColor ?? '#3f0aa8',
          isDark: false,
          contrastLevel: 0,
        }),
        darkPalette: MaterialPalette.fromSourceColor({
          sourceColorHex: darkSourceColor ?? '#161b61',
          isDark: true,
          contrastLevel: 0,
        }),
      }),
    [theme, lightSourceColor, darkSourceColor],
  );

  useEffect(() => {
    _theme
      .getCssBaseline()
      .then((css) => {
        setCssBaseline(css);
      })
      .catch((error) => {
        console.error('Failed to load css baseline:', error);
      });
  }, [_theme]);

  return (
    <>
      <style>{cssBaseline}</style>
      {children}
    </>
  );
}
