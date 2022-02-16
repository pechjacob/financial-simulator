/// <reference types="react" />
import { CompoundingEffectFormulaJSON } from '../../../timeline';
import { EffectFormulaProps } from './props';
export default function CompoundingComponent({ compoundingFrequencyPerPeriod, nominalAnnualInterestRate, periodsPerYear, setFormula, }: EffectFormulaProps & CompoundingEffectFormulaJSON): JSX.Element;
