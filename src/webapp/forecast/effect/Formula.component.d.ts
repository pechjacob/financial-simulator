/// <reference types="react" />
import { EffectFormulaType } from '../../../timeline';
import { SetEffectFormulaFn } from './props';
declare type Props = {
    formula: any;
    formulaType: EffectFormulaType;
    setFormula: SetEffectFormulaFn;
};
export default function FormulaComponent({ formula, formulaType, setFormula, }: Props): JSX.Element;
export {};
