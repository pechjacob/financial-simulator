import * as actions from '../redux/actions';
import InspectorComponent from './Inspector.component';
declare const _default: import("react-redux").ConnectedComponent<typeof InspectorComponent, Pick<{
    exportTimeline: typeof actions.forecast.exportTimeline;
    importTimeline: typeof actions.forecast.importTimeline;
    removeAccount: typeof actions.forecast.removeAccount;
    removeEffect: typeof actions.forecast.removeEffect;
    removeEvent: typeof actions.forecast.removeEvent;
    selectedAccountId: string | null;
    selectedTrackItem: import("../track-item").TrackItem | null;
}, never>>;
export default _default;
