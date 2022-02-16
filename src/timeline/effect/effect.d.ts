import { CalendarDate, CalendarDateJSON } from '../../calendar-date';
import { EffectFormula, EffectFormulaType } from './formula';
export declare type EffectJSON = {
    endsOn: CalendarDateJSON | null;
    formula: any;
    formulaType: EffectFormulaType;
    id: string;
    name: string;
    startsOn: CalendarDateJSON | null;
};
export declare class Effect {
    readonly id: string;
    formula: EffectFormula;
    startsOn: CalendarDate | null;
    endsOn: CalendarDate | null;
    name: string;
    static fromJSON(value: EffectJSON): Effect;
    constructor(id: string, formula: EffectFormula, startsOn: CalendarDate | null, endsOn: CalendarDate | null, name: string);
    toJSON(): EffectJSON;
    yieldsValueOnDay(balanceValue: number, day: number, startsOn: CalendarDate): number;
}
