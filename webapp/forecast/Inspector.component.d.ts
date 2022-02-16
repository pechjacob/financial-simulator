/// <reference types="react" />
import * as actions from '../redux/actions';
import { TrackItem } from '../track-item';
declare type Props = {
    exportTimeline: typeof actions.forecast.exportTimeline;
    importTimeline: typeof actions.forecast.importTimeline;
    removeAccount: typeof actions.forecast.removeAccount;
    removeEffect: typeof actions.forecast.removeEffect;
    removeEvent: typeof actions.forecast.removeEvent;
    selectedAccountId: string | null;
    selectedTrackItem: TrackItem | null;
};
export default function InspectorComponent({ exportTimeline, importTimeline, removeAccount, removeEffect, removeEvent, selectedAccountId, selectedTrackItem, }: Props): JSX.Element;
export {};
