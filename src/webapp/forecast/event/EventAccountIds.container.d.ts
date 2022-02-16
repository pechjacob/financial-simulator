import * as actions from '../../redux/actions';
import EventAccountIdsComponent from './EventAccountIds.component';
declare type Props = {
    eventId: string;
};
declare const _default: import("react-redux").ConnectedComponent<typeof EventAccountIdsComponent, Pick<{
    accounts: import("../../../timeline").AccountJSON[];
    eventId: string;
    fromAccountId: string | null;
    setEventAccountIds: typeof actions.forecast.setEventAccountIds;
    toAccountId: string | null;
}, "eventId"> & Props>;
export default _default;
