import * as actions from '../redux/actions';
import ChartSampleSizeComponent from './ChartSampleSize.component';
declare const _default: import("react-redux").ConnectedComponent<typeof ChartSampleSizeComponent, Pick<{
    accountId: string | null;
    selected: import("../redux/reducer/forecast").ChartSampleSize;
    setValue: typeof actions.forecast.setTimelineChartSampleSize;
}, never>>;
export default _default;
