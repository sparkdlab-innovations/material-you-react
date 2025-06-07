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

import convertPropertyToCSSVariableName from '../convertPropertyToCSSVariableName';
import MaterialTypeface from './MaterialTypeface';
import { MaterialTypefaceType } from './MaterialTypeface.type';
import {
  MaterialTypescale,
  MaterialTypescaleType,
} from './MaterialTypescale.type';

export default class MaterialTypography {
  public static readonly PT_TO_REM_FACTOR: number = 0.0625;

  public readonly typeface: MaterialTypeface;

  public readonly typescale: MaterialTypescale;

  constructor(typography?: {
    typeface?: MaterialTypefaceType;
    typescale?: MaterialTypescaleType;
  }) {
    this.typeface = new MaterialTypeface(typography?.typeface ?? {});

    this.typescale = {
      displayLargeFont:
        typography?.typescale?.display?.large?.font ??
        'var(--md-ref-typeface-brand)',
      displayLargeWeight: typography?.typescale?.display?.large?.weight ?? 400,
      displayLargeSize:
        typography?.typescale?.display?.large?.size ??
        MaterialTypography.getRemFromPt(57),
      displayLargeTracking:
        typography?.typescale?.display?.large?.tracking ??
        MaterialTypography.getRemFromPt(-0.25),
      displayLargeLineHeight:
        typography?.typescale?.display?.large?.lineHeight ??
        MaterialTypography.getRemFromPt(64),

      displayMediumFont:
        typography?.typescale?.display?.medium?.font ??
        'var(--md-ref-typeface-brand)',
      displayMediumWeight:
        typography?.typescale?.display?.medium?.weight ?? 400,
      displayMediumSize:
        typography?.typescale?.display?.medium?.size ??
        MaterialTypography.getRemFromPt(45),
      displayMediumTracking:
        typography?.typescale?.display?.medium?.tracking ??
        MaterialTypography.getRemFromPt(0),
      displayMediumLineHeight:
        typography?.typescale?.display?.medium?.lineHeight ??
        MaterialTypography.getRemFromPt(52),

      displaySmallFont:
        typography?.typescale?.display?.small?.font ??
        'var(--md-ref-typeface-brand)',
      displaySmallWeight: typography?.typescale?.display?.small?.weight ?? 400,
      displaySmallSize:
        typography?.typescale?.display?.small?.size ??
        MaterialTypography.getRemFromPt(36),
      displaySmallTracking:
        typography?.typescale?.display?.small?.tracking ??
        MaterialTypography.getRemFromPt(0),
      displaySmallLineHeight:
        typography?.typescale?.display?.small?.lineHeight ??
        MaterialTypography.getRemFromPt(44),

      headlineLargeFont:
        typography?.typescale?.headline?.large?.font ??
        'var(--md-ref-typeface-brand)',
      headlineLargeWeight:
        typography?.typescale?.headline?.large?.weight ?? 400,
      headlineLargeSize:
        typography?.typescale?.headline?.large?.size ??
        MaterialTypography.getRemFromPt(32),
      headlineLargeTracking:
        typography?.typescale?.headline?.large?.tracking ??
        MaterialTypography.getRemFromPt(0),
      headlineLargeLineHeight:
        typography?.typescale?.headline?.large?.lineHeight ??
        MaterialTypography.getRemFromPt(40),

      headlineMediumFont:
        typography?.typescale?.headline?.medium?.font ??
        'var(--md-ref-typeface-brand)',
      headlineMediumWeight:
        typography?.typescale?.headline?.medium?.weight ?? 400,
      headlineMediumSize:
        typography?.typescale?.headline?.medium?.size ??
        MaterialTypography.getRemFromPt(28),
      headlineMediumTracking:
        typography?.typescale?.headline?.medium?.tracking ??
        MaterialTypography.getRemFromPt(0),
      headlineMediumLineHeight:
        typography?.typescale?.headline?.medium?.lineHeight ??
        MaterialTypography.getRemFromPt(36),

      headlineSmallFont:
        typography?.typescale?.headline?.small?.font ??
        'var(--md-ref-typeface-brand)',
      headlineSmallWeight:
        typography?.typescale?.headline?.small?.weight ?? 400,
      headlineSmallSize:
        typography?.typescale?.headline?.small?.size ??
        MaterialTypography.getRemFromPt(24),
      headlineSmallTracking:
        typography?.typescale?.headline?.small?.tracking ??
        MaterialTypography.getRemFromPt(0),
      headlineSmallLineHeight:
        typography?.typescale?.headline?.small?.lineHeight ??
        MaterialTypography.getRemFromPt(32),

      titleLargeFont:
        typography?.typescale?.title?.large?.font ??
        'var(--md-ref-typeface-brand)',
      titleLargeWeight: typography?.typescale?.title?.large?.weight ?? 400,
      titleLargeSize:
        typography?.typescale?.title?.large?.size ??
        MaterialTypography.getRemFromPt(22),
      titleLargeTracking:
        typography?.typescale?.title?.large?.tracking ??
        MaterialTypography.getRemFromPt(0),
      titleLargeLineHeight:
        typography?.typescale?.title?.large?.lineHeight ??
        MaterialTypography.getRemFromPt(28),

      titleMediumFont:
        typography?.typescale?.title?.medium?.font ??
        'var(--md-ref-typeface-plain)',
      titleMediumWeight: typography?.typescale?.title?.medium?.weight ?? 500,
      titleMediumSize:
        typography?.typescale?.title?.medium?.size ??
        MaterialTypography.getRemFromPt(16),
      titleMediumTracking:
        typography?.typescale?.title?.medium?.tracking ??
        MaterialTypography.getRemFromPt(0.15),
      titleMediumLineHeight:
        typography?.typescale?.title?.medium?.lineHeight ??
        MaterialTypography.getRemFromPt(24),

      titleSmallFont:
        typography?.typescale?.title?.small?.font ??
        'var(--md-ref-typeface-plain)',
      titleSmallWeight: typography?.typescale?.title?.small?.weight ?? 500,
      titleSmallSize:
        typography?.typescale?.title?.small?.size ??
        MaterialTypography.getRemFromPt(14),
      titleSmallTracking:
        typography?.typescale?.title?.small?.tracking ??
        MaterialTypography.getRemFromPt(0.1),
      titleSmallLineHeight:
        typography?.typescale?.title?.small?.lineHeight ??
        MaterialTypography.getRemFromPt(20),

      bodyLargeFont:
        typography?.typescale?.body?.large?.font ??
        'var(--md-ref-typeface-plain)',
      bodyLargeWeight: typography?.typescale?.body?.large?.weight ?? 400,
      bodyLargeSize:
        typography?.typescale?.body?.large?.size ??
        MaterialTypography.getRemFromPt(16),
      bodyLargeTracking:
        typography?.typescale?.body?.large?.tracking ??
        MaterialTypography.getRemFromPt(0.5),
      bodyLargeLineHeight:
        typography?.typescale?.body?.large?.lineHeight ??
        MaterialTypography.getRemFromPt(24),

      bodyMediumFont:
        typography?.typescale?.body?.medium?.font ??
        'var(--md-ref-typeface-plain)',
      bodyMediumWeight: typography?.typescale?.body?.medium?.weight ?? 400,
      bodyMediumSize:
        typography?.typescale?.body?.medium?.size ??
        MaterialTypography.getRemFromPt(14),
      bodyMediumTracking:
        typography?.typescale?.body?.medium?.tracking ??
        MaterialTypography.getRemFromPt(0.25),
      bodyMediumLineHeight:
        typography?.typescale?.body?.medium?.lineHeight ??
        MaterialTypography.getRemFromPt(20),

      bodySmallFont:
        typography?.typescale?.body?.small?.font ??
        'var(--md-ref-typeface-plain)',
      bodySmallWeight: typography?.typescale?.body?.small?.weight ?? 400,
      bodySmallSize:
        typography?.typescale?.body?.small?.size ??
        MaterialTypography.getRemFromPt(12),
      bodySmallTracking:
        typography?.typescale?.body?.small?.tracking ??
        MaterialTypography.getRemFromPt(0.14),
      bodySmallLineHeight:
        typography?.typescale?.body?.small?.lineHeight ??
        MaterialTypography.getRemFromPt(16),

      labelLargeFont:
        typography?.typescale?.label?.large?.font ??
        'var(--md-ref-typeface-plain)',
      labelLargeWeight: typography?.typescale?.label?.large?.weight ?? 500,
      labelLargeSize:
        typography?.typescale?.label?.large?.size ??
        MaterialTypography.getRemFromPt(14),
      labelLargeTracking:
        typography?.typescale?.label?.large?.tracking ??
        MaterialTypography.getRemFromPt(0.1),
      labelLargeLineHeight:
        typography?.typescale?.label?.large?.lineHeight ??
        MaterialTypography.getRemFromPt(20),

      labelMediumFont:
        typography?.typescale?.label?.medium?.font ??
        'var(--md-ref-typeface-plain)',
      labelMediumWeight: typography?.typescale?.label?.medium?.weight ?? 500,
      labelMediumSize:
        typography?.typescale?.label?.medium?.size ??
        MaterialTypography.getRemFromPt(12),
      labelMediumTracking:
        typography?.typescale?.label?.medium?.tracking ??
        MaterialTypography.getRemFromPt(0.5),
      labelMediumLineHeight:
        typography?.typescale?.label?.medium?.lineHeight ??
        MaterialTypography.getRemFromPt(16),

      labelSmallFont:
        typography?.typescale?.label?.small?.font ??
        'var(--md-ref-typeface-plain)',
      labelSmallWeight: typography?.typescale?.label?.small?.weight ?? 500,
      labelSmallSize:
        typography?.typescale?.label?.small?.size ??
        MaterialTypography.getRemFromPt(11),
      labelSmallTracking:
        typography?.typescale?.label?.small?.tracking ??
        MaterialTypography.getRemFromPt(0.5),
      labelSmallLineHeight:
        typography?.typescale?.label?.small?.lineHeight ??
        MaterialTypography.getRemFromPt(16),
    };
  }

  public static getRemFromPt(pt: number): string {
    return `${pt * MaterialTypography.PT_TO_REM_FACTOR}rem`;
  }

  public async getCssBaseline(): Promise<string> {
    const typefaceCss = await this.typeface.getCssBaseline();

    const typescaleCss = Object.keys(this.typescale)
      .map(
        (field) =>
          `--md-sys-typescale-${convertPropertyToCSSVariableName(field)}: ${this.typescale[field as keyof typeof this.typescale]};`,
      )
      .join('\n');

    return `
      ${typefaceCss}

      :root {
        ${typescaleCss}
      }
    `;
  }
}
