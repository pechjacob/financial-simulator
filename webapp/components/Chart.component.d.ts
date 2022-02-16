import * as React from 'react';
import { CalendarDateJSON } from '../../calendar-date';
declare type Props = {
    startsOn: CalendarDateJSON;
    values: Value[];
};
export declare type Value = {
    time: {
        year: number;
        month: number;
        day: number;
    };
    value: number;
};
export default class ChartComponent extends React.Component<Props> {
    private chart;
    private containerRef;
    private series;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    autoResize: () => void;
    updateValues(): void;
    render(): JSX.Element;
}
export {};
