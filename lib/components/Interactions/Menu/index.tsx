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

import { useEffect, useMemo, useRef, useState } from 'react';
import InkWell from '../InkWell';
import styles from './Menu.module.css';
import { ActionMenuItem, DialogCoordinates, MenuProps } from './Menu.types';
import { getInnerCoordinates } from './utils';

export default function Menu<T extends 'actions' | 'select'>({
  type,
  items,
  onSelect,
  dialogRef,
  coordinates,
  tapOutsideToDismiss,
}: MenuProps<T>) {
  const hasLeadingIcons = useMemo(
    () => items.some((item) => item.leadingIcon),
    [items],
  );
  const hasTrailingIconsOrText = useMemo(
    () => items.some((item) => item.trailingIcon || item.trailingText),
    [items],
  );

  const hasSubmenus = useMemo(
    () => items.some((item) => item.submenu),
    [items],
  );

  const innerDialogRef = useRef<HTMLDialogElement>(null);
  const [innerDialog, setInnerDialog] = useState<{
    parentIndex: number;
    coordinates: DialogCoordinates;
    items: ActionMenuItem[];
  }>({ parentIndex: -1, coordinates, items: [] });

  useEffect(() => {
    dialogRef.current?.addEventListener('click', function (event) {
      if (innerDialogRef.current?.open) {
        return;
      }
      if (!tapOutsideToDismiss) {
        return;
      }
      const rect = this.getBoundingClientRect();
      const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (isInDialog) {
        return;
      }
      dialogRef.current?.close();
    });
  }, [dialogRef, tapOutsideToDismiss]);

  return (
    <>
      <dialog
        className={styles.root}
        ref={dialogRef}
        style={{
          top: coordinates.top !== undefined ? `${coordinates.top}px` : `auto`,
          left:
            coordinates.left !== undefined ? `${coordinates.left}px` : `auto`,
          right:
            coordinates.right !== undefined ? `${coordinates.right}px` : `auto`,
          bottom:
            coordinates.bottom !== undefined
              ? `${coordinates.bottom}px`
              : `auto`,
        }}
      >
        {items.map((item, index) => (
          <InkWell
            key={`action-${index}`}
            height='48px'
            width='100%'
            borderRadius='0px'
            isDisabled={item.isDisabled}
            foregroundColor='var(--md-sys-color-on-surface)'
            overlayColor='var(--md-sys-color-on-surface)'
            disabledColor='var(--md-sys-color-on-surface)'
            onTap={
              type === 'actions' && item.submenu && !item.onTap
                ? () => {
                    setInnerDialog({
                      parentIndex: index,
                      coordinates: getInnerCoordinates(
                        coordinates,
                        dialogRef.current?.clientWidth ?? 112,
                        items.length,
                        index,
                      ),
                      items: item.submenu ?? [],
                    });
                    innerDialogRef.current?.showModal();
                  }
                : type === 'actions' && !item.submenu && item.onTap
                  ? item.onTap
                  : type === 'select' && onSelect && item.index
                    ? () => onSelect(item.index)
                    : undefined
            }
          >
            <div className={`${styles.actionMenuItem}`}>
              <div className={styles.leadingSection}>
                {item.leadingIcon && !item.isSelected && (
                  <span
                    className={`${styles.leadingIcon} material-symbols-outlined`}
                  >
                    {item.leadingIcon}
                  </span>
                )}
                {item.leadingIcon && item.isSelected && (
                  <span
                    className={`${styles.leadingIcon} material-symbols-outlined`}
                  >
                    check
                  </span>
                )}
                {!item.leadingIcon && !item.isSelected && hasLeadingIcons && (
                  <span className={styles.iconPlaceholder} />
                )}
                <span className={styles.label}>{item.label}</span>
              </div>
              <div>
                {item.trailingIcon && (
                  <span
                    className={`${styles.trailingIcon} material-symbols-outlined`}
                  >
                    {item.trailingIcon}
                  </span>
                )}
                {item.trailingText && <span>{item.trailingText}</span>}
                {!item.trailingIcon &&
                  !item.trailingText &&
                  hasTrailingIconsOrText && (
                    <span className={styles.iconPlaceholder} />
                  )}
              </div>
            </div>
          </InkWell>
        ))}
      </dialog>
      {hasSubmenus && (
        <Menu
          type='actions'
          items={innerDialog.items}
          dialogRef={innerDialogRef}
          coordinates={innerDialog.coordinates}
          tapOutsideToDismiss
        />
      )}
    </>
  );
}
