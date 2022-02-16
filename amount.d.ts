export declare enum Currency {
    USD = "USD"
}
export declare type AmountJSON = {
    currency: Currency;
    value: number;
};
/**
 * Relative to a person's net worth, so positive added money to an
 * account, and negative removed it from a person's net worth.
 */
export declare class Amount {
    currency: Currency;
    value: number;
    static fromJSON(value: AmountJSON): Amount;
    static zero(currency: Currency): Amount;
    constructor(currency: Currency, value: number);
    add(amount: Amount): Amount;
    subtract(amount: Amount): Amount;
    toJSON(): AmountJSON;
    toString(): string;
}
export declare function toCurrency(value: any): Currency;
