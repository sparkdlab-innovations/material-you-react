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

import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { IconButton } from '../Buttons';
import styles from './Calendar.module.css';
import { getMonthName } from './utils';

export default function CalendarRangeContainer({
  selectedMonth,
  selectedYear,
  setSelectedMonth,
  setSelectedYear,
  min,
  max,
}: {
  selectedMonth: number;
  selectedYear: number;
  setSelectedMonth: Dispatch<SetStateAction<number>>;
  setSelectedYear: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
}): React.JSX.Element {
  const isLeftActive = useMemo(() => {
    if (!min) {
      return true;
    }
    const now = new Date(Date.now());
    const minDate =
      min < 0
        ? new Date(now.getFullYear(), now.getMonth(), now.getDate())
        : new Date(min);

    const currDate = new Date(selectedYear, selectedMonth, 1);
    currDate.setDate(currDate.getDate() - 1);

    const bool = currDate.getTime() > minDate.getTime();
    return bool;
  }, [selectedMonth, selectedYear, min]);

  const isRightActive = useMemo(() => {
    if (!max) {
      return true;
    }
    const now = new Date(Date.now());
    const maxDate =
      max < 0
        ? new Date(now.getFullYear(), now.getMonth(), now.getDate())
        : new Date(max);

    const currDate = new Date(selectedYear, selectedMonth, 1);
    currDate.setMonth(currDate.getMonth() + 1);

    const bool = currDate.getTime() < maxDate.getTime();
    return bool;
  }, [selectedMonth, selectedYear, max]);

  return (
    <div className={styles.rangeContainer}>
      <div className={styles.rangeDropdown}>
        <span>
          {getMonthName(selectedMonth)} {selectedYear}
        </span>
        <IconButton
          mode='standard'
          icon='arrow_drop_down'
          // TODO: implement month/year selection
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onTap={() => {}}
        />
      </div>
      <div className={styles.rangeButtons}>
        <IconButton
          mode='standard'
          icon='chevron_left'
          onTap={
            isLeftActive
              ? () => {
                  if (selectedMonth === 0) {
                    setSelectedMonth(11);
                    setSelectedYear((prev) => prev - 1);
                    return;
                  }
                  setSelectedMonth((prev) => prev - 1);
                }
              : undefined
          }
        />
        <IconButton
          mode='standard'
          icon='chevron_right'
          onTap={
            isRightActive
              ? () => {
                  if (selectedMonth === 11) {
                    setSelectedMonth(0);
                    setSelectedYear((prev) => prev + 1);
                    return;
                  }
                  setSelectedMonth((prev) => prev + 1);
                }
              : undefined
          }
        />
      </div>
    </div>
  );
}
