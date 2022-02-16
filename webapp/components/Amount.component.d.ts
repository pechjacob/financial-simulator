/// <reference types="react" />
import { Amount, AmountJSON } from '../../amount';
import { Props as NumberProps } from './Number.component';
declare type Props = Omit<NumberProps, 'setValue' | 'step'> & AmountJSON & {
    setAmount: (amount: Amount) => void;
};
export default function AmountComponent({ currency, setAmount, value, ...props }: Props): JSX.Element;
export {};
