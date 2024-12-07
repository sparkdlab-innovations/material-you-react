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

import styles from './Calendar.module.css';

export default function CalendarButton({
  value,
  isSelected,
  isToday,
  onTap,
}: {
  value: number;
  isSelected?: boolean;
  isToday?: boolean;
  onTap?: () => void;
}): JSX.Element {
  return (
    <div
      className={`${styles.calendarButton} ${!onTap ? styles.disabled : ''} ${
        isToday ? styles.today : ''
      } ${isSelected ? styles.selected : ''}`}
      onClick={onTap}
    >
      <div>{value}</div>
    </div>
  );
}
