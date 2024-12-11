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

import {
  DynamicScheme,
  Hct,
  SchemeTonalSpot,
  Theme,
  argbFromHex,
  hexFromArgb,
  themeFromImage,
} from '@material/material-color-utilities';
import { Variant } from '@material/material-color-utilities/dynamiccolor/variant';
import convertPropertyToCSSVariableName from '../convertPropertyToCSSVariableName';
import DynamicSchemeOptions from './DynamicSchemeOptions.type';
import MaterialPaletteType from './MaterialPalette.type';

/**
 * A support class for the Material Theme class' palette section containing
 * all relevant functionality to aid to use of colors across the library.
 */
export default class MaterialPalette {
  /**
   * The primary color.
   */
  public readonly primary: string;
  /**
   * The background color of the primary container.
   */
  public readonly primaryContainer: string;
  /**
   * The text color on the primary background.
   */
  public readonly onPrimary: string;
  /**
   * The text color on the primary container background.
   */
  public readonly onPrimaryContainer: string;
  /**
   * The inverse primary color.
   */
  public readonly inversePrimary: string;

  /**
   * The secondary color.
   */
  public readonly secondary: string;
  /**
   * The background color of the secondary container.
   */
  public readonly secondaryContainer: string;
  /**
   * The text color on the secondary background.
   */
  public readonly onSecondary: string;
  /**
   * The text color on the secondary container background.
   */
  public readonly onSecondaryContainer: string;

  /**
   * The tertiary color.
   */
  public readonly tertiary: string;
  /**
   * The background color of the tertiary container.
   */
  public readonly tertiaryContainer: string;
  /**
   * The text color on the tertiary background.
   */
  public readonly onTertiary: string;
  /**
   * The text color on the tertiary container background.
   */
  public readonly onTertiaryContainer: string;

  /**
   * The surface color.
   */
  public readonly surface: string;
  /**
   * The text color on the surface background.
   */
  public readonly onSurface: string;

  /**
   * The variant color of the surface.
   */
  public readonly surfaceVariant: string;
  /**
   * The text color on the variant surface background.
   */
  public readonly onSurfaceVariant: string;

  /**
   * The dim color of the surface.
   */
  public readonly surfaceDim: string;
  /**
   * The light color of the surface.
   */
  public readonly surfaceLight: string;

  /**
   * The lowest level container color of the surface.
   */
  public readonly surfaceContainerLowest: string;
  /**
   * The low level container color of the surface.
   */
  public readonly surfaceContainerLow: string;
  /**
   * The medium (default) level container color of the surface.
   */
  public readonly surfaceContainer: string;
  /**
   * The high level container color of the surface.
   */
  public readonly surfaceContainerHigh: string;
  /**
   * The highest level container color of the surface.
   */
  public readonly surfaceContainerHighest: string;

  /**
   * The inverse surface color.
   */
  public readonly inverseSurface: string;
  /**
   * The text color on the inverse surface background.
   */
  public readonly inverseOnSurface: string;

  /**
   * The background color.
   */
  public readonly background: string;
  /**
   * The text color on the background.
   */
  public readonly onBackground: string;

  /**
   * The error color.
   */
  public readonly error: string;
  /**
   * The text color on the error background.
   */
  public readonly onError: string;
  /**
   * The background color of the error container.
   */
  public readonly errorContainer: string;
  /**
   * The text color on the error container background.
   */
  public readonly onErrorContainer: string;

  /**
   * The outline color.
   */
  public readonly outline: string;
  /**
   * The variant color of the outline.
   */
  public readonly outlineVariant: string;

  /**
   * The shadow color.
   */
  public readonly shadow: string;

  /**
   * The tint color of the surface.
   */
  public readonly surfaceTint: string;

  /**
   * The temporary overlay to make content less prominent.
   */
  public readonly scrim: string;

  /**
   * Whether the color scheme is in dark mode or not.
   */
  public readonly isDark: boolean;

  /**
   * The base constructor for Material Palette class.
   * It is recommended to use one of the convenience constructors.
   *
   * @param palette
   * An object containing all properties of the Material Palette class.
   *
   * @param isDark
   * Specifies whether the scheme is in dark mode or not.
   * Defaults to true.
   */
  constructor(palette: MaterialPaletteType, isDark: boolean = true) {
    this.primary = palette.primary;
    this.primaryContainer = palette.primaryContainer;
    this.onPrimary = palette.onPrimary;
    this.onPrimaryContainer = palette.onPrimaryContainer;
    this.inversePrimary = palette.inversePrimary;

    this.secondary = palette.secondary;
    this.secondaryContainer = palette.secondaryContainer;
    this.onSecondary = palette.onSecondary;
    this.onSecondaryContainer = palette.onSecondaryContainer;

    this.tertiary = palette.tertiary;
    this.tertiaryContainer = palette.tertiaryContainer;
    this.onTertiary = palette.onTertiary;
    this.onTertiaryContainer = palette.onTertiaryContainer;

    this.surface = palette.surface;
    this.onSurface = palette.onSurface;

    this.surfaceVariant = palette.surfaceVariant;
    this.onSurfaceVariant = palette.onSurfaceVariant;

    this.surfaceDim = palette.surfaceDim;
    this.surfaceLight = palette.surfaceLight;

    this.surfaceContainerLowest = palette.surfaceContainerLowest;
    this.surfaceContainerLow = palette.surfaceContainerLow;
    this.surfaceContainer = palette.surfaceContainer;
    this.surfaceContainerHigh = palette.surfaceContainerHigh;
    this.surfaceContainerHighest = palette.surfaceContainerHighest;

    this.inverseSurface = palette.inverseSurface;
    this.inverseOnSurface = palette.inverseOnSurface;

    this.background = palette.background;
    this.onBackground = palette.onBackground;

    this.error = palette.error;
    this.onError = palette.onError;
    this.errorContainer = palette.errorContainer;
    this.onErrorContainer = palette.onErrorContainer;

    this.outline = palette.outline;
    this.outlineVariant = palette.outlineVariant;

    this.shadow = palette.shadow;

    this.surfaceTint = palette.surfaceTint;

    this.scrim = palette.scrim;

    this.isDark = isDark;
  }

  /**
   * Gets the medium surface container color.
   * This is an alias for the surfaceContainer property.
   * It provides a backwards compatible way to access the
   * medium surface container color.
   *
   * @returns The medium surface container color.
   */
  get surfaceContainerMedium(): string {
    return this.surfaceContainer;
  }

  /**
   * This convenience constructor takes a DynamicScheme and
   * generates a MaterialPalette.
   *
   * @param scheme A generated DynamicScheme
   *
   * @returns A constructed MaterialPalette
   */
  protected static _fromScheme(scheme: DynamicScheme): MaterialPalette {
    // TODO: Add check for options (non-TS support)
    if (scheme.isDark) {
      return this._fromSchemeDark(scheme);
    }
    return this._fromSchemeLight(scheme);
  }

  /**
   * This convenience constructor takes a DynamicScheme and
   * generates a MaterialPalette in Dark Mode
   * @private
   *
   * @param scheme A generated DynamicScheme
   *
   * @returns A constructed MaterialPalette
   */
  private static _fromSchemeDark(scheme: DynamicScheme): MaterialPalette {
    return new MaterialPalette(
      {
        primary: hexFromArgb(scheme.primaryPalette.tone(80)),
        primaryContainer: hexFromArgb(scheme.primaryPalette.tone(30)),
        onPrimary: hexFromArgb(scheme.primaryPalette.tone(20)),
        onPrimaryContainer: hexFromArgb(scheme.primaryPalette.tone(90)),
        inversePrimary: hexFromArgb(scheme.primaryPalette.tone(40)),

        secondary: hexFromArgb(scheme.secondaryPalette.tone(80)),
        secondaryContainer: hexFromArgb(scheme.secondaryPalette.tone(30)),
        onSecondary: hexFromArgb(scheme.secondaryPalette.tone(20)),
        onSecondaryContainer: hexFromArgb(scheme.secondaryPalette.tone(90)),

        tertiary: hexFromArgb(scheme.tertiaryPalette.tone(80)),
        tertiaryContainer: hexFromArgb(scheme.tertiaryPalette.tone(30)),
        onTertiary: hexFromArgb(scheme.tertiaryPalette.tone(20)),
        onTertiaryContainer: hexFromArgb(scheme.tertiaryPalette.tone(90)),

        surface: hexFromArgb(scheme.neutralPalette.tone(6)),
        onSurface: hexFromArgb(scheme.neutralPalette.tone(90)),

        surfaceVariant: hexFromArgb(scheme.neutralPalette.tone(30)),
        onSurfaceVariant: hexFromArgb(scheme.neutralPalette.tone(80)),

        surfaceDim: hexFromArgb(scheme.neutralPalette.tone(6)),
        surfaceLight: hexFromArgb(scheme.neutralPalette.tone(24)),

        surfaceContainerLowest: hexFromArgb(scheme.neutralPalette.tone(4)),
        surfaceContainerLow: hexFromArgb(scheme.neutralPalette.tone(10)),
        surfaceContainer: hexFromArgb(scheme.neutralPalette.tone(12)),
        surfaceContainerHigh: hexFromArgb(scheme.neutralPalette.tone(17)),
        surfaceContainerHighest: hexFromArgb(scheme.neutralPalette.tone(22)),

        inverseSurface: hexFromArgb(scheme.neutralPalette.tone(90)),
        inverseOnSurface: hexFromArgb(scheme.neutralPalette.tone(20)),

        background: hexFromArgb(scheme.neutralPalette.tone(6)),
        onBackground: hexFromArgb(scheme.neutralPalette.tone(90)),

        error: hexFromArgb(scheme.errorPalette.tone(80)),
        onError: hexFromArgb(scheme.errorPalette.tone(30)),
        errorContainer: hexFromArgb(scheme.errorPalette.tone(20)),
        onErrorContainer: hexFromArgb(scheme.errorPalette.tone(90)),

        outline: hexFromArgb(scheme.neutralVariantPalette.tone(60)),
        outlineVariant: hexFromArgb(scheme.neutralVariantPalette.tone(30)),

        shadow: hexFromArgb(scheme.neutralPalette.tone(0)),

        surfaceTint: hexFromArgb(scheme.primaryPalette.tone(80)), // Primary

        scrim: hexFromArgb(scheme.neutralPalette.tone(0)),
      },
      true,
    );
  }

  /**
   * This convenience constructor takes a DynamicScheme and
   * generates a MaterialPalette in Light Mode
   * @private
   *
   * @param scheme A generated DynamicScheme
   *
   * @returns A constructed MaterialPalette
   */
  private static _fromSchemeLight(scheme: DynamicScheme): MaterialPalette {
    return new MaterialPalette(
      {
        primary: hexFromArgb(scheme.primaryPalette.tone(40)),
        primaryContainer: hexFromArgb(scheme.primaryPalette.tone(90)),
        onPrimary: hexFromArgb(scheme.primaryPalette.tone(100)),
        onPrimaryContainer: hexFromArgb(scheme.primaryPalette.tone(10)),
        inversePrimary: hexFromArgb(scheme.primaryPalette.tone(80)),

        secondary: hexFromArgb(scheme.secondaryPalette.tone(40)),
        secondaryContainer: hexFromArgb(scheme.secondaryPalette.tone(90)),
        onSecondary: hexFromArgb(scheme.secondaryPalette.tone(100)),
        onSecondaryContainer: hexFromArgb(scheme.secondaryPalette.tone(10)),

        tertiary: hexFromArgb(scheme.tertiaryPalette.tone(40)),
        tertiaryContainer: hexFromArgb(scheme.tertiaryPalette.tone(90)),
        onTertiary: hexFromArgb(scheme.tertiaryPalette.tone(100)),
        onTertiaryContainer: hexFromArgb(scheme.tertiaryPalette.tone(10)),

        surface: hexFromArgb(scheme.neutralPalette.tone(98)),
        onSurface: hexFromArgb(scheme.neutralPalette.tone(10)),

        surfaceVariant: hexFromArgb(scheme.neutralPalette.tone(90)),
        onSurfaceVariant: hexFromArgb(scheme.neutralPalette.tone(30)),

        surfaceDim: hexFromArgb(scheme.neutralPalette.tone(87)),
        surfaceLight: hexFromArgb(scheme.neutralPalette.tone(98)),

        surfaceContainerLowest: hexFromArgb(scheme.neutralPalette.tone(100)),
        surfaceContainerLow: hexFromArgb(scheme.neutralPalette.tone(96)),
        surfaceContainer: hexFromArgb(scheme.neutralPalette.tone(94)),
        surfaceContainerHigh: hexFromArgb(scheme.neutralPalette.tone(92)),
        surfaceContainerHighest: hexFromArgb(scheme.neutralPalette.tone(90)),

        inverseSurface: hexFromArgb(scheme.neutralPalette.tone(20)),
        inverseOnSurface: hexFromArgb(scheme.neutralPalette.tone(95)),

        background: hexFromArgb(scheme.neutralPalette.tone(98)),
        onBackground: hexFromArgb(scheme.neutralPalette.tone(10)),

        error: hexFromArgb(scheme.errorPalette.tone(40)),
        onError: hexFromArgb(scheme.errorPalette.tone(100)),
        errorContainer: hexFromArgb(scheme.errorPalette.tone(90)),
        onErrorContainer: hexFromArgb(scheme.errorPalette.tone(10)),

        outline: hexFromArgb(scheme.neutralVariantPalette.tone(50)),
        outlineVariant: hexFromArgb(scheme.neutralVariantPalette.tone(80)),

        shadow: hexFromArgb(scheme.neutralPalette.tone(0)),

        surfaceTint: hexFromArgb(scheme.primaryPalette.tone(40)), // Primary

        scrim: hexFromArgb(scheme.neutralPalette.tone(0)),
      },
      false,
    );
  }

  /**
   * This convenience constructor takes a source color to generate a
   * MaterialPalette using the DynamicScheme class.
   *
   * @param options
   * The options for creating the dynamic color scheme.
   * The source color is used to determine the hue and chroma of
   * the colors in the scheme.
   * The source color must be provided as an ARGB hex string.
   * The isDark option is used to determine whether the scheme is in
   * dark mode or light mode.
   * The Contrast Level is used to determine the contrast of the colors
   * in the scheme.
   * The Contrast Level must be a number between -1 and 1. -1
   * represents minimum contrast, 0 represents standard
   * (i.e. the design as spec'd), and 1 represents maximum contrast.
   *
   * @example
   * const palette = MaterialPalette.fromSourceColor({
   *  sourceColorHex: '#3f0aa8',
   *  isDark: true,
   *  contrastLevel: 0,
   * });
   *
   * @returns A generated MaterialPalette
   */
  public static fromSourceColor(
    options: DynamicSchemeOptions,
  ): MaterialPalette {
    // TODO: Add check for options (non-TS support)
    const scheme = new SchemeTonalSpot(
      Hct.fromInt(argbFromHex(options.sourceColorHex)),
      options.isDark,
      options.contrastLevel,
    ) as DynamicScheme;

    return MaterialPalette._fromScheme(scheme);
  }

  /**
   * This convenience constructor takes a source color to generate a
   * MaterialPalette using the DynamicScheme class.
   *
   * @async
   *
   * @param options
   * An object containing imageSource, variant, isDark and contrastLevel.
   * _imageSource_ is the source of the image from which to generate
   * the scheme. It must be a valid URL, local path, or data URI.
   * _variant_ is the style of the theme.
   * Possible values are MONOCHROME, NEUTRAL, TONAL_SPOT, VIBRANT,
   * EXPRESSIVE, FIDELITY, CONTENT, RAINBOW, and FRUIT_SALAD.
   * isDark specifies whether the scheme is in dark mode or light mode.
   * contrastLevel specifies a value from -1 to 1. -1 represents minimum
   * contrast, 0 represents standard (i.e. the design as spec'd),
   * and 1 represents maximum contrast.
   *
   * @example
   * const palette = await MaterialPalette.fromSourceImage({
   *  imageSource: 'https://example.com/image.png',
   *  variant: Variant.VIBRANT,
   *  isDark: true,
   *  contrastLevel: 0.5,
   * });
   *
   * @returns A promise containing a generated MaterialPalette
   */
  public static async fromSourceImage(options: {
    imageSource: string;
    variant: Variant;
    isDark: boolean;
    contrastLevel: number;
  }): Promise<MaterialPalette> {
    // TODO: Add check for options (non-TS support)
    const image = new Image();
    image.src = options.imageSource;
    image.crossOrigin = 'anonymous';
    image.setAttribute('crossOrigin', 'anonymous');

    const theme: Theme = await themeFromImage(image);

    const scheme = new DynamicScheme({
      sourceColorArgb: theme.palettes.primary.tone(40),
      variant: options.variant,
      isDark: options.isDark,
      contrastLevel: options.contrastLevel,
      primaryPalette: theme.palettes.primary,
      secondaryPalette: theme.palettes.secondary,
      tertiaryPalette: theme.palettes.tertiary,
      neutralPalette: theme.palettes.neutral,
      neutralVariantPalette: theme.palettes.neutralVariant,
    });

    return MaterialPalette._fromScheme(scheme);
  }

  public getCssBaseline(): string {
    const cssText = Object.keys(this)
      .map((field) =>
        typeof this[field as keyof typeof this] === 'string'
          ? `--md-sys-color-${convertPropertyToCSSVariableName(field)}: ${this[field as keyof typeof this]};`
          : null,
      )
      .filter((item) => item)
      .join('\n');

    if (this.isDark) {
      return `
        @media (prefers-color-scheme: dark) {
          :root {
            ${cssText}
          }
        }
      `;
    }

    return `
      :root {
        ${cssText}
      }
    `;
  }
}
