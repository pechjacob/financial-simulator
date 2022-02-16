import * as actions from '../../redux/actions';
import EffectComponent from './Effect.component';
declare type Props = {
    effectId: string;
};
declare const _default: import("react-redux").ConnectedComponent<typeof EffectComponent, Pick<import("../../../timeline").EffectJSON & {
    accountId: string | null;
    setEffect: typeof actions.forecast.setEffect;
}, never> & Props>;
export default _default;
