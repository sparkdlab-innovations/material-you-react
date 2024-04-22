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

import { Breakpoint } from './breakpoint';
import { MaterialPalette } from './palette';
import { MaterialTypography } from './typography';

/**
 * Represents a Material Theme.
 */
export default class MaterialTheme {
  /**
   * The light palette of the theme.
   */
  public readonly lightPalette: MaterialPalette;
  /**
   * The dark palette of the theme.
   */
  public readonly darkPalette: MaterialPalette;

  /**
   * The breakpoints of the theme.
   */
  public readonly breakpoint: Breakpoint;

  /**
   * The typography of the theme.
   */
  public readonly typography: MaterialTypography;

  /**
   * Creates a new MaterialTheme instance.
   *
   * @constructor
   * @param {Object} options
   * The options for the theme.
   *
   * @param {MaterialPalette} options.lightPalette
   * The light palette of the theme.
   *
   * @param {MaterialPalette} options.darkPalette
   * The dark palette of the theme.
   *
   * @param {Breakpoint} options.breakpoint
   * The breakpoints of the theme.
   *
   * @param {MaterialTypography} options.typography
   * The typography of the theme.
   */
  constructor(theme: {
    lightPalette: MaterialPalette;
    darkPalette: MaterialPalette;
    breakpoint?: Breakpoint;
    typography?: MaterialTypography;
  }) {
    this.lightPalette = theme.lightPalette;
    this.darkPalette = theme.darkPalette;
    this.breakpoint = theme.breakpoint ?? new Breakpoint();
    this.typography = theme.typography ?? new MaterialTypography();
  }

  /**
   * Gets the CSS baseline for the theme.
   * @returns {string} The CSS baseline.
   */
  public async getCssBaseline(): Promise<string> {
    const typographyCss = await this.typography.getCssBaseline();

    return `
      ${this.lightPalette.getCssBaseline()}

      ${this.darkPalette.getCssBaseline()}

      ${this.breakpoint.getCssBaseline()}

      ${typographyCss}

      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html,
      body {
        max-width: 100vw;
        overflow-x: hidden;
        background-color: var(--md-sys-color-background);
        color: var(--md-sys-color-on-background);
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `;
  }
}
