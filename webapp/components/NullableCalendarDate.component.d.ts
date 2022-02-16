/// <reference types="react" />
import { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDate, CalendarDateJSON } from '../../calendar-date';
export declare type Props = Partial<Omit<ReactDatePickerProps, 'value'>> & {
    setValue: (value: CalendarDate | null) => void;
    value: CalendarDateJSON | null;
};
export default function NullableCalendarDateComponent({ setValue, value, ...props }: Props): JSX.Element;
