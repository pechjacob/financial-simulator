import * as actions from '../../redux/actions';
import TimelineFrameComponent from './TimelineFrame.component';
declare const _default: import("react-redux").ConnectedComponent<typeof TimelineFrameComponent, Pick<{
    accountIds: string[];
    addAccount: typeof actions.forecast.addAccount;
    selectedAccountId: string | null;
}, never>>;
export default _default;
