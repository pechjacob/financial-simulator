import { CalendarDate, CalendarDateJSON } from '../../../../../calendar-date';
import { TrackItem } from '../../../../track-item';
import * as types from '../../../types';
import { State, Track } from '../props';
export declare function getAccountWrapper(state: State, accountId: string): import("../props").AccountWrapper;
export declare function toCalendarDateOrNull(value: CalendarDateJSON | null): CalendarDate | null;
export declare function toSetTrackItemCalendarDatesAction(state: State, action: types.forecast.SetTrackItemEndsOn | types.forecast.SetTrackItemStartsOn, startsOn: CalendarDate | null, endsOn: CalendarDate | null): types.forecast.SetTrackItemCalendarDates;
export declare function trackHasItem(track: Track, item: TrackItem): boolean;
export declare function trackItemEquals(a: TrackItem, b: TrackItem): boolean;
interface DateRange {
    endsOn: CalendarDate | null;
    startsOn: CalendarDate | null;
}
export declare function trackItemToDateRange(state: State, trackItem: TrackItem): DateRange;
export {};
