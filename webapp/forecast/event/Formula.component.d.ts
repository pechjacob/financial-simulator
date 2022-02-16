/// <reference types="react" />
import { EventFormulaType } from '../../../timeline';
import { SetEventFormulaFn } from './props';
declare type Props = {
    formula: any;
    formulaType: EventFormulaType;
    setFormula: SetEventFormulaFn;
};
export default function FormulaComponent({ formula, formulaType, setFormula, }: Props): JSX.Element;
export {};
