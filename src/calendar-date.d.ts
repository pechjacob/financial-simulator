export declare const DAYS_PER_YEAR = 365.25;
export declare enum Month {
    January = 1,
    February = 2,
    March = 3,
    April = 4,
    May = 5,
    June = 6,
    July = 7,
    August = 8,
    September = 9,
    October = 10,
    November = 11,
    December = 12
}
export declare type CalendarDateJSON = string;
export declare class CalendarDate {
    year: number;
    month: Month;
    day: number;
    static fromDate(value: Date): CalendarDate;
    static fromJSON(value: CalendarDateJSON): CalendarDate;
    /**
     * Requires a "YYYY-MM-DD" format.
     */
    static fromString(value: string): CalendarDate;
    /**
     * TODO: Add timezone support.
     */
    static today(): CalendarDate;
    constructor(year: number, month: Month, day: number);
    addDays(days: number): CalendarDate;
    addMonths(months: number): CalendarDate;
    addYears(years: number): CalendarDate;
    /**
     * For sorting.
     */
    compare(date: CalendarDate): number;
    /**
     * Positive means the date is in the past.
     */
    daysAfter(date: CalendarDate): number;
    /**
     * Positive means the date is forward in time.
     */
    daysBefore(date: CalendarDate): number;
    /**
     * Calling object is the subject being evaluated against the `target`.
     *
     * If the calling date has less days in it than the target month, then
     * this will return `true`.
     */
    isSameDayOfMonthAs(target: CalendarDate): boolean;
    toDate(): Date;
    toJSON(): CalendarDateJSON;
    toString(): string;
}
export declare function isMonth(value: number): value is Month;
/**
 * a0 and a1 are the startsOn and endsOn properties of the first range,
 * respectively.
 *
 * b0 and b1 are the startsOn and endsOn properties of the second range,
 * respectively.
 */
export declare function rangesOverlap(a0: CalendarDate | null, a1: CalendarDate | null, b0: CalendarDate | null, b1: CalendarDate | null): boolean;
