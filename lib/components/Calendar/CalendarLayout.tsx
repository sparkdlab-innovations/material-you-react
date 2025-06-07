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

import React, { Dispatch, SetStateAction } from 'react';
import styles from './Calendar.module.css';
import CalendarButton from './CalendarButton';
import { generateCalendar, isDisabled, isSelected, isToday } from './utils';

export default function CalendarLayout({
  selectedMonth,
  selectedYear,
  selectedDate,
  setSelectedDate,
  min,
  max,
}: {
  selectedMonth: number;
  selectedYear: number;
  selectedDate: number;
  setSelectedDate: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
}): React.JSX.Element {
  return (
    <>
      {generateCalendar(selectedMonth, selectedYear).map((week, index1) => (
        <tr
          key={`week-${index1}`}
          className={styles.table}
        >
          {week.map((date, index2) => (
            <td
              key={`week-${index1}-date-${index2}`}
              className={styles.table}
            >
              {date >= 0 && (
                <CalendarLayoutItem
                  date={date}
                  selectedDate={selectedDate}
                  selectedMonth={selectedMonth}
                  selectedYear={selectedYear}
                  setSelectedDate={setSelectedDate}
                  min={min}
                  max={max}
                />
              )}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

function CalendarLayoutItem({
  date,
  selectedDate,
  selectedMonth,
  selectedYear,
  setSelectedDate,
  min,
  max,
}: {
  date: number;
  selectedDate: number;
  selectedYear: number;
  selectedMonth: number;
  setSelectedDate: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
}): React.JSX.Element {
  const disabled = isDisabled(min, max, selectedYear, selectedMonth, date);
  return (
    <CalendarButton
      value={date}
      isToday={isToday(selectedYear, selectedMonth, date)}
      isSelected={isSelected(selectedDate, selectedYear, selectedMonth, date)}
      onTap={
        !disabled
          ? () => {
              const newDate = new Date(
                selectedYear,
                selectedMonth,
                date,
              ).getTime();
              setSelectedDate(newDate);
            }
          : undefined
      }
    />
  );
}
