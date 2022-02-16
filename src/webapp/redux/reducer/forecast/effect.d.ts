import * as types from '../../types';
import { State } from './props';
export declare function add(state: State, action: types.forecast.AddEffect): State;
export declare function remove(state: State, action: types.forecast.RemoveEffect): State;
export declare function set(state: State, action: types.forecast.SetEffect): State;
/**
 * Should only be called if the type is Event.
 */
export declare function setCalendarDates(state: State, action: types.forecast.SetTrackItemCalendarDates): State;
export declare function setEndsOn(state: State, action: types.forecast.SetTrackItemEndsOn): State;
export declare function setStartsOn(state: State, action: types.forecast.SetTrackItemStartsOn): State;
