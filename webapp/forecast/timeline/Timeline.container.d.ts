import * as actions from '../../redux/actions';
import { TrackItem } from '../../track-item';
import TimelineComponent from './Timeline.component';
declare type Props = {
    accountId: string;
};
declare const _default: import("react-redux").ConnectedComponent<typeof TimelineComponent, Pick<{
    accountId: string;
    addTrack: typeof actions.forecast.addTrack;
    selectTrackItem: typeof actions.forecast.selectTrackItem;
    trackIds: string[];
    trackItems: TrackItem[];
}, "accountId"> & Props>;
export default _default;
