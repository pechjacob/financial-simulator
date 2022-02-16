import * as actions from '../../redux/actions';
import AccountTabComponent from './AccountTab.component';
declare type Props = {
    accountId: string;
};
declare const _default: import("react-redux").ConnectedComponent<typeof AccountTabComponent, Pick<{
    accountId: string;
    isSelected: boolean;
    name: string;
    selectAccount: typeof actions.forecast.selectAccount;
}, "accountId"> & Props>;
export default _default;
