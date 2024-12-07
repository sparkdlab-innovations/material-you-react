import { StandardButton } from '../Buttons';
import styles from './Calendar.module.css';

export default function CalendarFooter({
  selectedDate,
  cancel,
  submit,
}: {
  selectedDate: number;
  cancel: () => void;
  submit?: (value: number) => void;
}): JSX.Element {
  return (
    <div className={styles.footerContainer}>
      <StandardButton
        mode='text'
        label='Cancel'
        onTap={cancel}
      />
      <StandardButton
        mode='text'
        label='OK'
        onTap={submit ? () => submit(selectedDate) : undefined}
      />
    </div>
  );
}
