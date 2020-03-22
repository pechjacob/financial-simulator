import * as React from 'react';

import { CalendarDate, CalendarDateJSON } from '../../../calendar-date';
import { FormulaType } from '../../../timeline';
import * as actions from '../../redux/actions';

type Props = {
  endsOn: CalendarDateJSON | null;
  eventId: string;
  formulaType: FormulaType;
  setEventCalendarDates: typeof actions.forecast.setEventCalendarDates;
  setEventEndsOn: typeof actions.forecast.setEventEndsOn;
  setEventStartsOn: typeof actions.forecast.setEventStartsOn;
  startsOn: CalendarDateJSON;
  timelineEndsOn: CalendarDateJSON;
  timelineStartsOn: CalendarDateJSON;
};

type State = {
  mouseDownDetails: {
    clickTarget: ClickTarget;
    endsOn: CalendarDateJSON | null;
    page: Point;
    startsOn: CalendarDateJSON;
  } | null;
};

type Point = {
  x: number;
  y: number;
};

enum ClickTarget {
  Grab,
  LeftHandle,
  RightHandle,
}

export default class SpanComponent extends React.Component<Props, State> {
  private grabRef: HTMLDivElement | null = null;
  private leftHandleRef: HTMLDivElement | null = null;
  private rightHandleRef: HTMLDivElement | null = null;

  state: State = {
    mouseDownDetails: null,
  };

  componentDidMount() {
    this.grabRef!.addEventListener('mousedown', this.grabMouseDownHandler);
    this.leftHandleRef!.addEventListener(
      'mousedown',
      this.leftHandleMouseDownHandler,
    );
    this.rightHandleRef!.addEventListener(
      'mousedown',
      this.rightHandleMouseDownHandler,
    );
    window.addEventListener('mousemove', this.mouseMoveHandler);
    window.addEventListener('mouseup', this.mouseUpHandler);
  }

  componentWillUnmount() {
    this.grabRef!.removeEventListener('mousedown', this.grabMouseDownHandler);
    this.leftHandleRef!.removeEventListener(
      'mousedown',
      this.leftHandleMouseDownHandler,
    );
    this.rightHandleRef!.removeEventListener(
      'mousedown',
      this.rightHandleMouseDownHandler,
    );
    window.removeEventListener('mousemove', this.mouseMoveHandler);
    window.removeEventListener('mouseup', this.mouseUpHandler);
  }

  getTimelineStats() {
    const startsOn = CalendarDate.fromJSON(this.props.timelineStartsOn);
    const endsOn = CalendarDate.fromJSON(this.props.timelineEndsOn);
    const days = startsOn.daysBefore(endsOn) + 1;
    return { days, endsOn, startsOn };
  }

  grabMouseDownHandler = (event: MouseEvent) => {
    this.setState(this.toMouseDownState(event, ClickTarget.Grab));
  };

  leftHandleMouseDownHandler = (event: MouseEvent) => {
    this.setState(this.toMouseDownState(event, ClickTarget.LeftHandle));
  };

  rightHandleMouseDownHandler = (event: MouseEvent) => {
    this.setState(this.toMouseDownState(event, ClickTarget.RightHandle));
  };

  toMouseDownState = (event: MouseEvent, clickTarget: ClickTarget) => {
    return {
      mouseDownDetails: {
        clickTarget,
        endsOn: this.props.endsOn,
        page: {
          x: event.pageX,
          y: event.pageY,
        },
        startsOn: this.props.startsOn,
      },
    };
  };

  mouseMoveHandler = (event: MouseEvent) => {
    if (!this.state.mouseDownDetails) {
      return;
    }

    const { clickTarget, endsOn, page, startsOn } = this.state.mouseDownDetails;
    const spanContainer = this.grabRef!.parentElement!.parentElement!;
    const timelineWidth = spanContainer.offsetWidth;
    const {
      days: timelineDays,
      endsOn: timelineEndsOn,
    } = this.getTimelineStats();

    const daysPerPixel = timelineDays / timelineWidth;
    const dx = event.pageX - page.x;
    const days = Math.round(dx * daysPerPixel);

    if (clickTarget === ClickTarget.Grab) {
      const newStartsOn = CalendarDate.fromJSON(startsOn).addDays(days);
      const newEndsOn = endsOn
        ? CalendarDate.fromJSON(endsOn).addDays(days)
        : null;
      this.props.setEventCalendarDates(
        this.props.eventId,
        newStartsOn,
        newEndsOn,
      );
    }

    if (clickTarget === ClickTarget.LeftHandle) {
      const newStartsOn = CalendarDate.fromJSON(startsOn).addDays(days);
      this.props.setEventStartsOn(this.props.eventId, newStartsOn);
    }

    if (clickTarget === ClickTarget.RightHandle) {
      const newEndsOn = endsOn
        ? CalendarDate.fromJSON(endsOn).addDays(days)
        : timelineEndsOn.addDays(days);
      this.props.setEventEndsOn(this.props.eventId, newEndsOn);
    }
  };

  mouseUpHandler = (_: MouseEvent) => {
    this.setState({
      mouseDownDetails: null,
    });
  };

  render() {
    const { endsOn: endsOnJSON, startsOn: startsOnJSON } = this.props;

    const timeline = this.getTimelineStats();

    const startsOn = CalendarDate.fromJSON(startsOnJSON);
    const endsOn = endsOnJSON ? CalendarDate.fromJSON(endsOnJSON) : null;
    const spanDays = startsOn.daysBefore(endsOn || timeline.endsOn) + 1;
    const spanStartsOnDay = timeline.startsOn.daysBefore(startsOn);

    const spanLeft = spanStartsOnDay / timeline.days;
    const spanWidth = spanDays / timeline.days;

    const dynamicContainerStyle = {
      left: `${spanLeft * 100}%`,
      width: `${spanWidth * 100}%`,
    };

    return (
      <div style={{ ...containerStyle, ...dynamicContainerStyle }}>
        <div ref={ref => (this.grabRef = ref)} style={grabStyle}>
          {this.props.formulaType}
        </div>
        <div style={bottomStyle}>
          <div
            ref={ref => (this.leftHandleRef = ref)}
            style={leftHandleStyle}
          />
          <div
            ref={ref => (this.rightHandleRef = ref)}
            style={rightHandleStyle}
          />
        </div>
      </div>
    );
  }
}

const containerStyle: React.CSSProperties = {
  background: 'rgb(127, 127, 255)',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minWidth: '1px',
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  userSelect: 'none',
};

const grabStyle: React.CSSProperties = {
  background: 'rgba(0, 0, 0, 0.1)',
  cursor: 'grab',
  height: '50%',
  zIndex: 10,
};

const bottomStyle: React.CSSProperties = {
  flexGrow: 1,
  position: 'relative',
  zIndex: 1,
};

const handleStyle: React.CSSProperties = {
  background: 'rgba(0,0,0, 0.1)',
  bottom: 0,
  height: '100%',
  position: 'absolute',
  width: '5px',
};

const leftHandleStyle: React.CSSProperties = {
  ...handleStyle,
  cursor: 'w-resize',
  left: 0,
  zIndex: 4,
};

const rightHandleStyle: React.CSSProperties = {
  ...handleStyle,
  cursor: 'e-resize',
  right: 0,
  zIndex: 5,
};