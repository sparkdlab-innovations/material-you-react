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
 * Represents the type definition for the Material Palette constructor,
 * only used in-file for the same.
 */
interface MaterialPaletteType {
  /**
   * The primary color.
   */
  primary: string;
  /**
   * The background color of the primary container.
   */
  primaryContainer: string;
  /**
   * The text color on the primary background.
   */
  onPrimary: string;
  /**
   * The text color on the primary container background.
   */
  onPrimaryContainer: string;
  /**
   * The inverse primary color.
   */
  inversePrimary: string;

  /**
   * The secondary color.
   */
  secondary: string;
  /**
   * The background color of the secondary container.
   */
  secondaryContainer: string;
  /**
   * The text color on the secondary background.
   */
  onSecondary: string;
  /**
   * The text color on the secondary container background.
   */
  onSecondaryContainer: string;

  /**
   * The tertiary color.
   */
  tertiary: string;
  /**
   * The background color of the tertiary container.
   */
  tertiaryContainer: string;
  /**
   * The text color on the tertiary background.
   */
  onTertiary: string;
  /**
   * The text color on the tertiary container background.
   */
  onTertiaryContainer: string;

  /**
   * The surface color.
   */
  surface: string;
  /**
   * The text color on the surface background.
   */
  onSurface: string;

  /**
   * The variant color of the surface.
   */
  surfaceVariant: string;
  /**
   * The text color on the variant surface background.
   */
  onSurfaceVariant: string;

  /**
   * The dim color of the surface.
   */
  surfaceDim: string;
  /**
   * The light color of the surface.
   */
  surfaceLight: string;

  /**
   * The lowest level container color of the surface.
   */
  surfaceContainerLowest: string;
  /**
   * The low level container color of the surface.
   */
  surfaceContainerLow: string;
  /**
   * The medium (default) level container color of the surface.
   */
  surfaceContainer: string;
  /**
   * The high level container color of the surface.
   */
  surfaceContainerHigh: string;
  /**
   * The highest level container color of the surface.
   */
  surfaceContainerHighest: string;

  /**
   * The inverse surface color.
   */
  inverseSurface: string;
  /**
   * The text color on the inverse surface background.
   */
  inverseOnSurface: string;

  /**
   * The background color.
   */
  background: string;
  /**
   * The text color on the background.
   */
  onBackground: string;

  /**
   * The error color.
   */
  error: string;
  /**
   * The text color on the error background.
   */
  onError: string;
  /**
   * The background color of the error container.
   */
  errorContainer: string;
  /**
   * The text color on the error container background.
   */
  onErrorContainer: string;

  /**
   * The outline color.
   */
  outline: string;
  /**
   * The variant color of the outline.
   */
  outlineVariant: string;

  /**
   * The shadow color.
   */
  shadow: string;

  /**
   * The tint color of the surface.
   */
  surfaceTint: string;

  /**
   * The temporary overlay to make content less prominent.
   */
  scrim: string;
}

export default MaterialPaletteType;
