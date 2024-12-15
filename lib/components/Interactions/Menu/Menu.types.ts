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

import { RefObject } from 'react';

export type ActionMenuItem = {
  label: string;
  leadingIcon?: string;
  isDisabled?: boolean;
} & (
  | {
      trailingIcon?: string;
      trailingText?: never;
    }
  | {
      trailingIcon?: never;
      trailingText?: string;
    }
) &
  (
    | {
        onTap: () => void;
        submenu?: never;
      }
    | {
        onTap?: never;
        submenu: ActionMenuItem[];
      }
  ) & {
    index?: never;
    isSelected?: never;
  };

export type SelectMenuItem = {
  index: string;
  label: string;
  leadingIcon?: string;
  trailingIcon?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
} & {
  trailingText?: never;
  onTap?: never;
  submenu?: never;
};

export type MenuItem<T extends 'actions' | 'select'> = T extends 'actions'
  ? ActionMenuItem
  : SelectMenuItem;

export type MenuProps<T extends 'actions' | 'select'> = {
  type: T;
  items: MenuItem<T>[];
  dialogRef: RefObject<HTMLDialogElement>;
  coordinates: DialogCoordinates;
  tapOutsideToDismiss?: boolean;
} & (T extends 'select'
  ? {
      onSelect: (index: string) => void;
    }
  : {
      onSelect?: never;
    });

export type DialogCoordinates = (
  | {
      top: number;
      bottom?: never;
    }
  | {
      top?: never;
      bottom: number;
    }
) &
  (
    | {
        left: number;
        right?: never;
      }
    | {
        left?: never;
        right: number;
      }
  );
