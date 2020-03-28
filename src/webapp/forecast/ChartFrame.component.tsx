import * as React from 'react';

import * as colors from '../colors';
import ChartContainer from './Chart.container';
import ChartSampleSizeContainer from './ChartSampleSize.container';

export default function ChartFrameComponent() {
  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={optionsStyle}>
          <ChartSampleSizeContainer />
        </div>
        <div style={attributionStyle}>
          Chart by{' '}
          <a
            href="https://www.tradingview.com/"
            style={attributionLinkStyle}
            target="_blank"
          >
            https://www.tradingview.com/
          </a>
          .
        </div>
      </div>
      <div style={chartContainerStyle}>
        <ChartContainer />
      </div>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const headerStyle: React.CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  height: '35px',
};

const optionsStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  height: '100%',
};

const attributionStyle: React.CSSProperties = {
  fontSize: 11,
  padding: '5px',
  textAlign: 'right',
};

const attributionLinkStyle: React.CSSProperties = {
  color: colors.WHITE,
};

const chartContainerStyle: React.CSSProperties = {
  flexGrow: 1,
};
