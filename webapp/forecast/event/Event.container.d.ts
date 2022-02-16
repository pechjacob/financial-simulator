import * as actions from '../../redux/actions';
import EventComponent from './Event.component';
declare type Props = {
    eventId: string;
};
declare const _default: import("react-redux").ConnectedComponent<typeof EventComponent, Pick<import("../../../timeline").EventJSON & {
    setEvent: typeof actions.forecast.setEvent;
}, never> & Props>;
export default _default;
