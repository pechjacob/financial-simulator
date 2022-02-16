/// <reference types="react" />
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDate, CalendarDateJSON } from '../../calendar-date';
import { Props as NullableProps } from './NullableCalendarDate.component';
declare type Props = Omit<NullableProps, 'setValue' | 'value'> & {
    setValue: (value: CalendarDate) => void;
    value: CalendarDateJSON;
};
export default function CalendarDateComponent({ setValue, value, ...props }: Props): JSX.Element;
export {};
