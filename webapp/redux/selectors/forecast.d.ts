import { AmountJSON } from '../../../amount';
import { CalendarDateJSON } from '../../../calendar-date';
import { TrackItem, TrackItemType } from '../../track-item';
import { State } from '../reducer';
export declare function getChart(state: State): {
    currency: import("../../../amount").Currency;
};
export declare function getEffect(state: State, effectId: string): import("../../../timeline").EffectJSON;
export declare function getEvent(state: State, eventId: string): import("../../../timeline").EventJSON;
export declare type TrackItemDetails = {
    endsOn: CalendarDateJSON | null;
    id: string;
    name: string;
    orientation: Orientation;
    type: TrackItemType;
    shortDescription: string;
    startsOn: CalendarDateJSON | null;
    trackIndex: number;
};
export declare enum Orientation {
    In = "IN",
    Neutral = "NEUTRAL",
    Out = "OUT"
}
export declare function getTrackItemDetails(state: State, trackItem: TrackItem, accountId: string): TrackItemDetails;
export declare function getTrackItemTrackIndex(state: State, trackItem: TrackItem, accountId: string): number;
export declare function getSelectedAccountWrapper(state: State): import("../reducer/forecast").AccountWrapper | null;
export declare function getAccountWrappers(state: State): import("../reducer/forecast").AccountWrapper[];
export declare function getAccountWrapper(state: State, accountId: string): import("../reducer/forecast").AccountWrapper;
export declare function getSelectedTrackItem(state: State): TrackItem | null;
export declare function getTimelineChartSampleSize(state: State): import("../reducer/forecast").ChartSampleSize;
export declare function getTimelineEndsOn(state: State): string;
export declare function getTimelineStartsOn(state: State): string;
export declare function getTrack(state: State, id: string): import("../reducer/forecast").Track;
export declare function getTrackItemAccruedAmount(state: State, trackItem: TrackItem): AmountJSON | null;
