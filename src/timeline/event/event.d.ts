import { CalendarDate, CalendarDateJSON } from '../../calendar-date';
import { EventFormula, EventFormulaType } from './formula';
export declare type EventJSON = {
    endsOn: CalendarDateJSON | null;
    formula: any;
    formulaType: EventFormulaType;
    fromAccountId: string | null;
    id: string;
    name: string;
    startsOn: CalendarDateJSON;
    toAccountId: string | null;
};
export declare class Event {
    readonly id: string;
    fromAccountId: string | null;
    toAccountId: string | null;
    formula: EventFormula;
    startsOn: CalendarDate;
    endsOn: CalendarDate | null;
    name: string;
    static fromJSON(value: EventJSON): Event;
    protected endsAfterDays: number;
    constructor(id: string, fromAccountId: string | null, toAccountId: string | null, formula: EventFormula, startsOn: CalendarDate, endsOn: CalendarDate | null, name: string);
    belongsToAccountIds(): string[];
    getDateRange(): [CalendarDate, CalendarDate | null];
    getEndsOn(): CalendarDate | null;
    getName(): string;
    getStartsOn(): CalendarDate;
    /**
     * Returns true if both events share at least one day.
     */
    overlapsWith(event: Event): boolean;
    setDateRange(startsOn: CalendarDate, endsOn: CalendarDate | null): void;
    setEndsOn(endsOn: CalendarDate | null): void;
    protected setEndsAfterDays(): void;
    setStartsOn(startsOn: CalendarDate): void;
    toJSON(): EventJSON;
    yieldBalanceValues(startsOn: CalendarDate, days: number): Generator<number>;
    yieldsValueOnDay(day: number): number;
}
