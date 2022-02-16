import { Amount, AmountJSON, Currency } from '../../amount';
import { CalendarDate } from '../../calendar-date';
import { EventFormula, EventFormulaType } from './formula';
export declare type MonthlySumFormulaJSON = {
    amount: AmountJSON;
};
/**
 * Cash received in regular intervals.
 */
export declare class MonthlySumFormula implements EventFormula {
    readonly amount: Amount;
    static fromJSON(value: MonthlySumFormulaJSON): MonthlySumFormula;
    constructor(amount: Amount);
    getCurrency(): Currency;
    getType(): EventFormulaType;
    toJSON(): MonthlySumFormulaJSON;
    yieldsValueOnDay(days: number, startsOn: CalendarDate): number;
}
