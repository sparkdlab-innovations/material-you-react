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

import { MaterialTypefaceProperties, MaterialTypefaceType } from './MaterialTypeface.type';

export default class MaterialTypeface {
  public readonly brand: Required<MaterialTypefaceProperties>;

  public readonly plain: Required<MaterialTypefaceProperties>;

  public readonly materialSymbolsOutlined: Required<MaterialTypefaceProperties> = {
    name: 'Material Symbols Outlined',
    url: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
    isVariable: true,
  };

  public readonly materialSymbolsRounded: Required<MaterialTypefaceProperties> = {
    name: 'Material Symbols Rounded',
    url: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
    isVariable: true,
  };

  public readonly materialSymbolsSharp: Required<MaterialTypefaceProperties> = {
    name: 'Material Symbols Sharp',
    url: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
    isVariable: true,
  };

  constructor(typeface: MaterialTypefaceType) {
    this.brand = typeface.brand
      ? {
          isVariable: false,
          ...typeface.brand,
        }
      : {
          name: 'Roboto',
          url: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900',
          isVariable: true,
        };
    this.plain = typeface.plain
      ? {
          isVariable: false,
          ...typeface.plain,
        }
      : {
          name: 'Roboto',
          url: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900',
          isVariable: true,
        };
  }

  public async getCssBaseline(): Promise<string> {
    const fontResponses = await Promise.all(
      [
        this.brand,
        this.plain,
        this.materialSymbolsOutlined,
        this.materialSymbolsRounded,
        this.materialSymbolsSharp,
      ].map((item) => fetch(item.url)),
    );

    const fontsCss = await Promise.all(fontResponses.map((item) => item.text()));

    return `
      ${fontsCss.join('\n\n')}

      .material-symbols-outlined.icon-filled,
      .material-symbols-rounded.icon-filled,
      .material-symbols-sharp.icon-filled {
        fill: currentColor;
        font-variation-settings: "FILL" 1;
      }

      :root {
        --md-ref-typeface-brand: '${this.brand.name}';
        --md-ref-typeface-plain: '${this.plain.name}';
      }
    `;
  }
}
