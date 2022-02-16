import * as React from 'react';
import { Currency } from '../../../amount';
import { CalendarDate, CalendarDateJSON } from '../../../calendar-date';
import * as actions from '../../redux/actions';
import { Orientation } from '../../redux/selectors/forecast';
import { TrackItemType } from '../../track-item';
declare type Props = {
    accountId: string;
    accruedAmountCurrency: Currency | null;
    accruedAmountValue: number | null;
    endsOn: CalendarDateJSON | null;
    isSelected: boolean;
    name: string;
    orientation: Orientation;
    selectTrackItem: typeof actions.forecast.selectTrackItem;
    setCalendarDates: typeof actions.forecast.setTrackItemCalendarDates;
    setEndsOn: typeof actions.forecast.setTrackItemEndsOn;
    setStartsOn: typeof actions.forecast.setTrackItemStartsOn;
    shortDescription: string;
    startsOn: CalendarDateJSON | null;
    timelineEndsOn: CalendarDateJSON;
    timelineStartsOn: CalendarDateJSON;
    trackIndex: number;
    id: string;
    type: TrackItemType;
};
declare type State = {
    mouseDownDetails: {
        clickTarget: ClickTarget;
        containerOffsetLeft: number;
        endsOn: CalendarDateJSON | null;
        page: Point;
        startsOn: CalendarDateJSON | null;
    } | null;
};
declare type Point = {
    x: number;
    y: number;
};
declare enum ClickTarget {
    Grab = 0,
    LeftHandle = 1,
    RightHandle = 2
}
export default class SpanComponent extends React.Component<Props, State> {
    private containerRef;
    private grabRef;
    private leftHandleRef;
    private rightHandleRef;
    state: State;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getTimelineBox(): DOMRect;
    getTimelineStats(): {
        days: number;
        endsOn: CalendarDate;
        startsOn: CalendarDate;
    };
    containerClickHandler: (event: MouseEvent) => void;
    containerMouseDownHandler: (_: MouseEvent) => void;
    grabMouseDownHandler: (event: MouseEvent) => void;
    leftHandleMouseDownHandler: (event: MouseEvent) => void;
    rightHandleMouseDownHandler: (event: MouseEvent) => void;
    toMouseDownState: (event: MouseEvent, clickTarget: ClickTarget) => {
        mouseDownDetails: {
            clickTarget: ClickTarget;
            containerOffsetLeft: number;
            endsOn: string | null;
            page: {
                x: number;
                y: number;
            };
            startsOn: string | null;
        };
    };
    mouseMoveHandler: (event: MouseEvent) => void;
    mouseUpHandler: (_: MouseEvent) => void;
    render(): JSX.Element;
}
export {};
