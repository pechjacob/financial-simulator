/// <reference types="react" />
import * as actions from '../../redux/actions';
declare type Props = {
    accountId: string;
    isSelected: boolean;
    name: string;
    selectAccount: typeof actions.forecast.selectAccount;
};
export default function AccountTabComponent({ accountId, isSelected, name, selectAccount, }: Props): JSX.Element;
export {};
