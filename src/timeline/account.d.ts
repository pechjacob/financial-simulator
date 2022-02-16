export declare type AccountJSON = {
    effectIds: string[];
    id: string;
    name: string;
};
export declare class Account {
    readonly id: string;
    effectIds: string[];
    name: string;
    static fromJSON(value: AccountJSON): Account;
    constructor(id: string, effectIds: string[], name: string);
    toJSON(): AccountJSON;
}
