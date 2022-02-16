import { Currency } from '../amount';
import { CalendarDate } from '../calendar-date';
import { Effect } from './effect';
import { Event } from './event';
declare type Options = {
    accountId: string;
    currency: Currency;
    durationInDays: number;
    effects: Effect[];
    events: Event[];
    startsOn: CalendarDate;
};
export declare type DailyBalanceResults = {
    effectStates: EffectState[];
    eventStates: EventState[];
};
export declare function calculateDailyBalanceValues({ accountId, currency, durationInDays, effects, events, startsOn, }: Options): Generator<number, DailyBalanceResults>;
declare type EventState = {
    accruedValue: number;
    event: Event;
    generator: Generator<number>;
    multiplier: number;
};
declare type EffectState = {
    accruedValue: number;
    effect: Effect;
};
export {};
