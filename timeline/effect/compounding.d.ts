import { CalendarDate } from '../../calendar-date';
import { EffectFormula, EffectFormulaType } from './formula';
export declare type CompoundingEffectFormulaJSON = {
    compoundingFrequencyPerPeriod: number | null;
    nominalAnnualInterestRate: number;
    periodsPerYear: number;
};
/**
 * Cash received and existing over time.
 */
export declare class CompoundingEffectFormula implements EffectFormula {
    readonly nominalAnnualInterestRate: number;
    readonly compoundingFrequencyPerPeriod: number | null;
    readonly periodsPerYear: number;
    static fromJSON(value: CompoundingEffectFormulaJSON): CompoundingEffectFormula;
    protected readonly daysPerCompound: number;
    protected readonly increment: number;
    constructor(nominalAnnualInterestRate: number, // 1.0 = 100% annual interest.
    compoundingFrequencyPerPeriod: number | null, // Null means continuous.
    periodsPerYear: number);
    getType(): EffectFormulaType;
    toJSON(): CompoundingEffectFormulaJSON;
    /**
     * https://en.wikipedia.org/wiki/Compound_interest#Periodic_compounding
     */
    yieldsValueOnDay(balanceValue: number, day: number, _: CalendarDate): number;
}
