import { AmountJSON, Currency } from '../../../../amount';
import { CalendarDateJSON } from '../../../../calendar-date';
import { AccountJSON, EffectJSON, EventJSON } from '../../../../timeline';
import { TrackItem } from '../../../track-item';
export declare type State = {
    accountWrappers: AccountWrapper[];
    chart: {
        currency: Currency;
    };
    effects: {
        [id: string]: EffectJSON;
    };
    events: {
        [id: string]: EventJSON;
    };
    selectedTrackItem: TrackItem | null;
    timeline: {
        accountId: string | null;
        chartSampleSize: ChartSampleSize;
        endsOn: CalendarDateJSON;
        startsOn: CalendarDateJSON;
    };
    trackItemAccruedAmounts: {
        [trackItemString: string]: AmountJSON;
    };
};
export declare type AccountWrapper = {
    account: AccountJSON;
    tracks: Track[];
};
export declare type Track = {
    id: string;
    items: TrackItem[];
    name: string;
};
export declare enum ChartSampleSize {
    Day = "DAILY",
    Week = "WEEKLY",
    Month = "MONTHLY",
    Quarter = "QUARTERLY",
    Year = "YEARLY"
}
export declare type ChartValue = {
    time: {
        year: number;
        month: number;
        day: number;
    };
    value: number;
};
