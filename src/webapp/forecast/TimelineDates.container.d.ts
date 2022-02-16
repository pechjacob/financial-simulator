import * as actions from '../redux/actions';
import TimelineDatesComponent from './TimelineDates.component';
declare const _default: import("react-redux").ConnectedComponent<typeof TimelineDatesComponent, Pick<{
    endsOn: string;
    setDates: typeof actions.forecast.setTimelineCalendarDates;
    startsOn: string;
}, never>>;
export default _default;
