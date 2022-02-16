/// <reference types="react" />
import { CalendarDateJSON } from '../../../calendar-date';
import { AccountJSON } from '../../../timeline';
import * as actions from '../../redux/actions';
declare type Props = {
    accounts: AccountJSON[];
    eventId: string;
    fromAccountId: CalendarDateJSON | null;
    setEventAccountIds: typeof actions.forecast.setEventAccountIds;
    toAccountId: CalendarDateJSON | null;
};
export default function EventAccountIds({ accounts, eventId, setEventAccountIds, fromAccountId, toAccountId, }: Props): JSX.Element;
export {};
