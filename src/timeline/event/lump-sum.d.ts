import { Amount, AmountJSON, Currency } from '../../amount';
import { EventFormula, EventFormulaType } from './formula';
export declare type LumpSumFormulaJSON = {
    amount: AmountJSON;
};
/**
 * Cash received and existing over time.
 */
export declare class LumpSumFormula implements EventFormula {
    readonly amount: Amount;
    static fromJSON(value: LumpSumFormulaJSON): LumpSumFormula;
    constructor(amount: Amount);
    getCurrency(): Currency;
    getType(): EventFormulaType;
    toJSON(): LumpSumFormulaJSON;
    yieldsValueOnDay(day: number): number;
}
