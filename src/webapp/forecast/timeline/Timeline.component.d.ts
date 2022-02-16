import * as React from 'react';
import * as actions from '../../redux/actions';
import { TrackItem } from '../../track-item';
declare type Props = {
    accountId: string;
    addTrack: typeof actions.forecast.addTrack;
    selectTrackItem: typeof actions.forecast.selectTrackItem;
    trackIds: string[];
    trackItems: TrackItem[];
};
export default class TimelineComponent extends React.Component<Props> {
    private tracksContainerRef;
    componentDidMount(): void;
    componentWillUnount(): void;
    addTrackHandler: () => void;
    deselectTrackItemHandler: (_: MouseEvent) => void;
    render(): JSX.Element;
}
export {};
