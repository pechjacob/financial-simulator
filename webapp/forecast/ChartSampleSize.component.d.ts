/// <reference types="react" />
import * as actions from '../redux/actions';
import { ChartSampleSize } from '../redux/reducer/forecast/props';
declare type Props = {
    accountId: string | null;
    selected: ChartSampleSize;
    setValue: typeof actions.forecast.setTimelineChartSampleSize;
};
export default function ChartSampleSizeComponent({ accountId, selected, setValue, }: Props): JSX.Element | null;
export {};
