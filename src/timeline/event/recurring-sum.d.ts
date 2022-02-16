import { Amount, AmountJSON, Currency } from '../../amount';
import { EventFormula, EventFormulaType } from './formula';
export declare type RecurringSumFormulaJSON = {
    amount: AmountJSON;
    everyXDays: number;
};
/**
 * Cash received in regular intervals.
 */
export declare class RecurringSumFormula implements EventFormula {
    readonly amount: Amount;
    readonly everyXDays: number;
    static fromJSON(value: RecurringSumFormulaJSON): RecurringSumFormula;
    constructor(amount: Amount, everyXDays: number);
    getCurrency(): Currency;
    getType(): EventFormulaType;
    toJSON(): RecurringSumFormulaJSON;
    yieldsValueOnDay(days: number): number;
}
