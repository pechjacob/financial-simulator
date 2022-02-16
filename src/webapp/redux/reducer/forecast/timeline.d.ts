import * as types from '../../types';
import { State } from './props';
export declare function exportTimeline(state: State, _: types.forecast.ExportTimeline): State;
export declare function importTimeline(_: State, action: types.forecast.ImportTimeline): State;
export declare function setTimelineCalendarDates(state: State, action: types.forecast.SetTimelineCalendarDates): State;
export declare function setTimelineChartSampleSize(state: State, action: types.forecast.SetTimelineChartSampleSize): State;
