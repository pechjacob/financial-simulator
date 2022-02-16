/// <reference types="react" />
import { CalendarDateJSON } from '../../calendar-date';
import * as actions from '../redux/actions';
declare type Props = {
    endsOn: CalendarDateJSON;
    setDates: typeof actions.forecast.setTimelineCalendarDates;
    startsOn: CalendarDateJSON;
};
export default function TimelineDatesComponent({ endsOn, setDates, startsOn, }: Props): JSX.Element;
export {};
