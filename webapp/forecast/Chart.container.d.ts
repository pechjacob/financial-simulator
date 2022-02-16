/// <reference types="react" />
import { EffectJSON, EventJSON } from '../../timeline';
import * as actions from '../redux/actions';
declare const _default: import("react-redux").ConnectedComponent<import("react").MemoExoticComponent<typeof import("./Chart.component").ChartComponent>, Pick<{
    accountId: string | null;
    chartSampleSize: import("../redux/reducer/forecast").ChartSampleSize;
    currency: import("../..").Currency;
    effects: EffectJSON[];
    events: EventJSON[];
    endsOn: string;
    setDailyBalanceResults: typeof actions.forecast.setDailyBalanceResults;
    startsOn: string;
}, never>>;
export default _default;
