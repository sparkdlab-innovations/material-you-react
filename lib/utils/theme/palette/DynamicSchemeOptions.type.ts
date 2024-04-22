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

/**
 * Dynamic Scheme Options
 * @type
 *
 * @param {string} sourceColorHex
 * The ARGB hex representation of the source color
 * Eg: 0xFF000000
 *
 * @param {boolean} isDark
 * Whether to generate the scheme in dark mode or light mode
 *
 * @param {number} contrastLevel
 * The Contrast Level is used to determine the contrast of the colors in the scheme.
 * The Contrast Level must be a number between -1 and 1. -1 represents minimum contrast, 0 represents standard (i.e. the design as spec'd), and 1 represents maximum contrast.
 */
type DynamicSchemeOptions = {
  sourceColorHex: string;
  isDark: boolean;
  contrastLevel: number;
};

export default DynamicSchemeOptions;
