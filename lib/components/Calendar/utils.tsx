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

export function generateCalendar(month: number, year: number): number[][] {
  const calendar: number[][] = [];
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  let date = 1;
  for (let i = 0; i < 6; i++) {
    const week: number[] = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        week.push(-1);
      } else if (date > lastDate) {
        week.push(-1);
        date++;
      } else {
        week.push(date);
        date++;
      }
    }
    calendar.push(week);
  }
  return calendar;
}

export function getMonthName(month: number): string {
  switch (month) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
    default:
      return 'Unknown';
  }
}

export function getDayName(date: number): string {
  switch (new Date(date).getDay()) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return 'Unknown';
  }
}

export function isToday(
  selectedYear: number,
  selectedMonth: number,
  fieldDate: number,
): boolean {
  const currDate = new Date(selectedYear, selectedMonth, fieldDate);
  const today = new Date(Date.now());
  return (
    currDate.getDate() === today.getDate() &&
    currDate.getMonth() === today.getMonth() &&
    currDate.getFullYear() === today.getFullYear()
  );
}

export function isSelected(
  selectedDate: number,
  fieldYear: number,
  fieldMonth: number,
  fieldDate: number,
): boolean {
  const fieldDateObj = new Date(fieldYear, fieldMonth, fieldDate);
  const selectedDateObj = new Date(selectedDate);
  return (
    fieldDateObj.getDate() === selectedDateObj.getDate() &&
    fieldDateObj.getMonth() === selectedDateObj.getMonth() &&
    fieldDateObj.getFullYear() === selectedDateObj.getFullYear()
  );
}

export function isDisabled(
  min: number | undefined,
  max: number | undefined,
  fieldYear: number,
  fieldMonth: number,
  fieldDate: number,
): boolean {
  const date = new Date(fieldYear, fieldMonth, fieldDate).getTime();
  if (min && date <= min) return true;
  if (max && date >= max) return true;
  return false;
}

export function isInRange(
  min: number | undefined,
  max: number | undefined,
  date: number,
): boolean {
  if (min && date <= min) return false;
  if (max && date >= max) return false;
  return true;
}
