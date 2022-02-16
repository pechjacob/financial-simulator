import * as types from '../../types';
import { State } from './props';
export declare function add(state: State, action: types.forecast.AddAccount): State;
export declare function addTrack(state: State, action: types.forecast.AddTrack): State;
export declare function remove(state: State, action: types.forecast.RemoveAccount): State;
export declare function setName(state: State, action: types.forecast.SetAccountName): State;
export declare function setTrack(state: State, action: types.forecast.SetTrack): State;
export declare function select(state: State, action: types.forecast.SelectAccount): State;
export declare function selectTrackItem(state: State, action: types.forecast.SelectTrackItem): State;
