import * as actions from '../redux/actions';
import AccountComponent from './Account.component';
declare type Props = {
    accountId: string;
};
declare const _default: import("react-redux").ConnectedComponent<typeof AccountComponent, Pick<{
    accountId: string;
    addEffect: typeof actions.forecast.addEffect;
    addEvent: typeof actions.forecast.addEvent;
    name: string;
    setAccountName: typeof actions.forecast.setAccountName;
    timelineStartsOn: string;
}, "accountId"> & Props>;
export default _default;
