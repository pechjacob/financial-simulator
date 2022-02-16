import { CalendarDate } from '../../../../../calendar-date';
import * as types from '../../../types';
import { State } from '../props';
declare type Result = {
    ok: boolean;
    state: State;
};
export declare function setTrackItemCalendarDates(state: State, action: types.forecast.SetTrackItemCalendarDates, startsOn: CalendarDate | null, endsOn: CalendarDate | null, otherAccountIds: string[]): Result;
export {};
