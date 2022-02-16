/// <reference types="react" />
import { CalendarDateJSON } from '../../calendar-date';
import * as actions from '../redux/actions';
declare type Props = {
    accountId: string;
    addEffect: typeof actions.forecast.addEffect;
    addEvent: typeof actions.forecast.addEvent;
    name: string;
    setAccountName: typeof actions.forecast.setAccountName;
    timelineStartsOn: CalendarDateJSON;
};
export default function AccountComponent({ accountId, addEffect, addEvent, name, setAccountName, timelineStartsOn, }: Props): JSX.Element;
export {};
