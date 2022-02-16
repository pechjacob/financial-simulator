import { CalendarDate } from '../calendar-date';
import { Account, Effect, EffectFormulaType, Event, EventFormulaType } from '../timeline';
export declare function newAccount(): Account;
export declare function newEffect(formulaType: EffectFormulaType): Effect;
export declare function newEvent(accountId: string, startsOn: CalendarDate, formulaType: EventFormulaType, isIncome: boolean): Event;
