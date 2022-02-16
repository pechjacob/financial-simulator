import { Amount, AmountJSON, Currency } from '../../amount';
import { CalendarDate } from '../../calendar-date';
import { EventFormula, EventFormulaType } from './formula';

export type MonthlySumFormulaJSON = {
  amount: AmountJSON;
};

/**
 * Cash received in regular intervals.
 */
export class MonthlySumFormula implements EventFormula {
  public static fromJSON(value: MonthlySumFormulaJSON): MonthlySumFormula {
    const amount = Amount.fromJSON(value.amount);
    return new MonthlySumFormula(amount);
  }

  constructor(public readonly amount: Amount) {}

  public getCurrency(): Currency {
    return this.amount.currency;
  }

  public getType(): EventFormulaType {
    return EventFormulaType.MonthlySum;
  }

  public toJSON(): MonthlySumFormulaJSON {
    return {
      amount: this.amount.toJSON(),
    };
  }

  public yieldsValueOnDay(days: number, startsOn: CalendarDate): number {
    const date = startsOn.addDays(days);

    if (date.isSameDayOfMonthAs(startsOn)) {
      return this.amount.value;
    }

    return 0;
  }
}
