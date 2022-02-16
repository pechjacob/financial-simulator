/// <reference types="react" />
declare type Props<T> = {
    options: SelectOption<T>[];
    setValue: (value: T) => void;
    value: T;
};
declare type SelectOption<T> = {
    name?: string;
    value: T;
};
export default function SelectComponent<T extends string>({ options, setValue, value, ...props }: Props<T>): JSX.Element;
export {};
