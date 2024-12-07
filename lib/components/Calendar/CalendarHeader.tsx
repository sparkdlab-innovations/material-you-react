import { IconButton } from '../Buttons';
import styles from './Calendar.module.css';
import { getDayName, getMonthName } from './utils';

export default function CalendarHeader({
  selectedDate,
}: {
  selectedDate: number;
}): JSX.Element {
  return (
    <div className={styles.headerContainer}>
      <span className={styles.supportingText}>Select date</span>
      <div className={styles.headlineContainer}>
        <span className={styles.headline}>
          {selectedDate >= 0
            ? `${getDayName(selectedDate).substring(0, 3)}, ${getMonthName(
                new Date(selectedDate).getMonth(),
              ).substring(0, 3)} ${new Date(selectedDate).getDate()}`
            : 'No deadline'}
        </span>
        <IconButton
          mode='standard'
          icon='edit'
          onTap={() => {}}
        />
      </div>
    </div>
  );
}
