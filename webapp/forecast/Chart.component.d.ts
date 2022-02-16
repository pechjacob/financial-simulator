import * as React from 'react';
import { Currency } from '../../amount';
import { CalendarDateJSON } from '../../calendar-date';
import { EffectJSON, EventJSON } from '../../timeline';
import * as actions from '../redux/actions';
import { ChartSampleSize } from '../redux/reducer/forecast/props';
declare const _default: React.MemoExoticComponent<typeof ChartComponent>;
export default _default;
declare type Props = {
    accountId: string | null;
    chartSampleSize: ChartSampleSize;
    currency: Currency;
    effects: EffectJSON[];
    events: EventJSON[];
    endsOn: CalendarDateJSON;
    setDailyBalanceResults: typeof actions.forecast.setDailyBalanceResults;
    startsOn: CalendarDateJSON;
};
export declare function ChartComponent({ accountId, chartSampleSize, currency, effects: effectsJSON, endsOn: endsOnJSON, events: eventsJSON, setDailyBalanceResults, startsOn: startsOnJSON, }: Props): JSX.Element;
