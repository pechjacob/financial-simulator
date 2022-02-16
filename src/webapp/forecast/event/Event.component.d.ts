/// <reference types="react" />
import { EventJSON } from '../../../timeline';
import * as actions from '../../redux/actions';
declare type Props = EventJSON & {
    setEvent: typeof actions.forecast.setEvent;
};
export default function EventComponent(props: Props): JSX.Element;
export {};
