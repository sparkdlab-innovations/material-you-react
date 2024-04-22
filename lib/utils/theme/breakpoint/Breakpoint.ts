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
 * Represents the available breakpoint types.
 * @type {'compact' | 'medium' | 'expanded' | 'large' | 'xlarge'} BreakpointTypes
 */
type BreakpointTypes = 'compact' | 'medium' | 'expanded' | 'large' | 'xlarge';

/**
 * Represents a breakpoint configuration for responsive design.
 */
export default class Breakpoint {
  /**
   * The compact breakpoint value.
   */
  public readonly compact: number;
  /**
   * The medium breakpoint value.
   */
  public readonly medium: number;
  /**
   * The expanded breakpoint value.
   */
  public readonly expanded: number;
  /**
   * The large breakpoint value.
   */
  public readonly large: number;
  /**
   * The extra large breakpoint value.
   */
  public readonly xlarge: number;

  /**
   * Creates a new instance of the Breakpoint class.
   * @param breakpoints - The breakpoint configuration options.
   */
  constructor(breakpoints?: { compact?: number; medium?: number; expanded?: number; large?: number; xlarge?: number }) {
    this.compact = breakpoints?.compact ?? 600;
    this.medium = breakpoints?.medium ?? 860;
    this.expanded = breakpoints?.expanded ?? 1200;
    this.large = breakpoints?.large ?? 1600;
    this.xlarge = breakpoints?.xlarge ?? Number.POSITIVE_INFINITY;
  }

  /**
   * Gets the media query string for the specified breakpoint size.
   * @param size - The breakpoint size.
   * @returns The media query string.
   */
  public getMediaQuery(size: BreakpointTypes): string {
    switch (size) {
      case 'compact':
        return `@media (max-width: ${this.compact}px)`;
      case 'medium':
        return `@media (min-width: ${this.compact}px) and (max-width: ${this.medium}px)`;
      case 'expanded':
        return `@media (min-width: ${this.medium}px) and (max-width: ${this.expanded}px)`;
      case 'large':
        return `@media (min-width: ${this.expanded}px) and (max-width: ${this.large}px)`;
      case 'xlarge':
        return `@media (min-width: ${this.large}px)`;
    }
  }

  /**
   * Checks if the current window matches the specified breakpoint size.
   * @param size - The breakpoint size.
   * @param window - The window object.
   * @returns True if the breakpoint matches, false otherwise.
   */
  public isBreakpointMatch(size: BreakpointTypes, window: Window): boolean {
    return window.matchMedia(this.getMediaQuery(size).replace('@media ', '')).matches;
  }

  /**
   * Gets the CSS baseline styles for the breakpoints.
   * @returns The CSS baseline styles.
   */
  public getCssBaseline(): string {
    return `
      :root {
        --md-sys-breakpoint-compact: ${this.compact}px;
        --md-sys-breakpoint-medium: ${this.medium}px;
        --md-sys-breakpoint-expanded: ${this.expanded}px;
        --md-sys-breakpoint-large: ${this.large}px;
        --md-sys-breakpoint-xlarge: ${this.xlarge}px;
      }
    `;
  }
}
