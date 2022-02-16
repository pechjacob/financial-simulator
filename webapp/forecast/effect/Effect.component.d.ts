/// <reference types="react" />
import { EffectJSON } from '../../../timeline';
import * as actions from '../../redux/actions';
declare type Props = EffectJSON & {
    accountId: string | null;
    setEffect: typeof actions.forecast.setEffect;
};
export default function EffectComponent(props: Props): JSX.Element;
export {};
