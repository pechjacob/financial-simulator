/// <reference types="react" />
export declare type Props = {
    min?: number;
    setValue: (value: number) => void;
    step?: number;
    value: number;
};
export default function NumberComponent({ min, setValue, step, value }: Props): JSX.Element;
