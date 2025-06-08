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
 * Represents the type definition for a single typescale variant,
 * only used in-file within the TypescaleVariants.
 */
interface TypescaleProperties {
  font?: 'var(--md-ref-typeface-brand)' | 'var(--md-ref-typeface-plain)';
  weight?: number;
  size?: string;
  tracking?: string;
  lineHeight?: string;
}

/**
 * Represents the type definition for a single typescale,
 * only used in-file within the MaterialTypescaleType.
 */
interface TypescaleVariants {
  large?: TypescaleProperties;
  medium?: TypescaleProperties;
  small?: TypescaleProperties;
}

/**
 * Represents the type definition for the Material Typescale constructor,
 * only used in-file for the same.
 */
export interface MaterialTypescaleType {
  display?: TypescaleVariants;
  headline?: TypescaleVariants;
  title?: TypescaleVariants;
  body?: TypescaleVariants;
  label?: TypescaleVariants;
}

/**
 * The type definition for Material Typography class' typescale property.
 */
export interface MaterialTypescale {
  displayLargeFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  displayLargeWeight: number;
  displayLargeSize: string;
  displayLargeTracking: string;
  displayLargeLineHeight: string;

  displayMediumFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  displayMediumWeight: number;
  displayMediumSize: string;
  displayMediumTracking: string;
  displayMediumLineHeight: string;

  displaySmallFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  displaySmallWeight: number;
  displaySmallSize: string;
  displaySmallTracking: string;
  displaySmallLineHeight: string;

  headlineLargeFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  headlineLargeWeight: number;
  headlineLargeSize: string;
  headlineLargeTracking: string;
  headlineLargeLineHeight: string;

  headlineMediumFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  headlineMediumWeight: number;
  headlineMediumSize: string;
  headlineMediumTracking: string;
  headlineMediumLineHeight: string;

  headlineSmallFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  headlineSmallWeight: number;
  headlineSmallSize: string;
  headlineSmallTracking: string;
  headlineSmallLineHeight: string;

  titleLargeFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  titleLargeWeight: number;
  titleLargeSize: string;
  titleLargeTracking: string;
  titleLargeLineHeight: string;

  titleMediumFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  titleMediumWeight: number;
  titleMediumSize: string;
  titleMediumTracking: string;
  titleMediumLineHeight: string;

  titleSmallFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  titleSmallWeight: number;
  titleSmallSize: string;
  titleSmallTracking: string;
  titleSmallLineHeight: string;

  bodyLargeFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  bodyLargeWeight: number;
  bodyLargeSize: string;
  bodyLargeTracking: string;
  bodyLargeLineHeight: string;

  bodyMediumFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  bodyMediumWeight: number;
  bodyMediumSize: string;
  bodyMediumTracking: string;
  bodyMediumLineHeight: string;

  bodySmallFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  bodySmallWeight: number;
  bodySmallSize: string;
  bodySmallTracking: string;
  bodySmallLineHeight: string;

  labelLargeFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  labelLargeWeight: number;
  labelLargeSize: string;
  labelLargeTracking: string;
  labelLargeLineHeight: string;

  labelMediumFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  labelMediumWeight: number;
  labelMediumSize: string;
  labelMediumTracking: string;
  labelMediumLineHeight: string;

  labelSmallFont:
    | 'var(--md-ref-typeface-brand)'
    | 'var(--md-ref-typeface-plain)';
  labelSmallWeight: number;
  labelSmallSize: string;
  labelSmallTracking: string;
  labelSmallLineHeight: string;
}
