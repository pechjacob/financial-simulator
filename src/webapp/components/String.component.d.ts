/// <reference types="react" />
declare type Props = {
    setValue: (value: string) => void;
    value: string;
};
export default function StringComponent({ setValue, value }: Props): JSX.Element;
export {};
