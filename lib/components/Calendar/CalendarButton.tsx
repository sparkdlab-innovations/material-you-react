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
