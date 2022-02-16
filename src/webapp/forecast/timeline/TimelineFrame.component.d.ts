/// <reference types="react" />
import * as actions from '../../redux/actions';
declare type Props = {
    accountIds: string[];
    addAccount: typeof actions.forecast.addAccount;
    selectedAccountId: string | null;
};
export default function TimelineFrameComponent({ accountIds, addAccount, selectedAccountId, }: Props): JSX.Element;
export {};
