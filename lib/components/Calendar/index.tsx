'use client';

import { RefObject, useEffect, useState } from 'react';
import styles from './Calendar.module.css';
import CalendarFooter from './CalendarFooter';
import CalendarHeader from './CalendarHeader';
import CalendarLayout from './CalendarLayout';
import CalendarRangeContainer from './CalendarRangeContainer';
import { isInRange } from './utils';

export default function Calendar({
  value,
  min,
  max,
  dialogRef,
  close,
  submit,
}: {
  value: number;
  min?: number;
  max?: number;
  dialogRef: RefObject<HTMLDialogElement>;
  close: () => void;
  submit?: (value: number) => void;
}): JSX.Element {
  const [selectedDate, setSelectedDate] = useState(value);
  const [selectedMonth, setSelectedMonth] = useState(
    new Date(value).getMonth(),
  );
  const [selectedYear, setSelectedYear] = useState(
    new Date(value).getFullYear(),
  );

  useEffect(() => {
    setSelectedMonth(new Date(selectedDate).getMonth());
    setSelectedYear(new Date(selectedDate).getFullYear());
  }, [selectedDate]);

  return (
    <dialog
      className={styles.dialog}
      ref={dialogRef}
    >
      <div className={styles.root}>
        <CalendarHeader selectedDate={selectedDate} />
        <CalendarRangeContainer
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          setSelectedMonth={setSelectedMonth}
          setSelectedYear={setSelectedYear}
          min={min}
          max={max}
        />
        <div className={styles.calendarContainer}>
          <table className={styles.table}>
            <thead className={styles.table}>
              <tr className={styles.table}>
                <th className={styles.table}>S</th>
                <th className={styles.table}>M</th>
                <th className={styles.table}>T</th>
                <th className={styles.table}>W</th>
                <th className={styles.table}>T</th>
                <th className={styles.table}>F</th>
                <th className={styles.table}>S</th>
              </tr>
            </thead>
            <tbody className={styles.table}>
              <CalendarLayout
                selectedMonth={selectedMonth}
                selectedYear={selectedYear}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                min={min}
                max={max}
              />
            </tbody>
          </table>
        </div>
        <CalendarFooter
          selectedDate={selectedDate}
          cancel={() => {
            close();
            setSelectedDate(value);
            setSelectedMonth(new Date(value).getMonth());
            setSelectedYear(new Date(value).getFullYear());
          }}
          submit={
            submit && isInRange(min, max, selectedDate)
              ? () => {
                  close();
                  submit(selectedDate);
                }
              : undefined
          }
        />
      </div>
    </dialog>
  );
}
