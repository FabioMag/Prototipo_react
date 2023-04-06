import styled from '@emotion/styled'

import { Box } from '@mantine/core'

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;

  gap: 2px;
  grid-template-columns: 1fr 1fr minmax(25px, auto);
  grid-template-areas: 'info info value' 'bar bar bar';

  @media (min-width: 768px) {
    gap: 0px 10px;
    grid-template-columns: 1fr 1fr minmax(25px, auto) 1fr 1fr 1fr;
    grid-template-areas: 'info info value bar bar bar';
    grid-template-rows: 1fr;

    &:not(:first-child) {
      border-top: 1px solid #cfd8dc;
    }
  }

  padding-top: 5px;
  padding-bottom: 5px;

  font-size: 0.9375rem;
  color: #3c3c3c;

  .information {
    width: 100%;
    grid-area: info;

    .text {
      position: relative;
      &:before {
        position: relative;
        display: inline-flex;
        counter-increment: graph-count;
        content: counter(graph-count) 'º';
        margin-right: 19px;
      }
    }
  }

  .value {
    grid-area: value;
  }

  .bar {
    grid-area: bar;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`

interface GraphBarProps {
  percent: number
  positiveColor: string
  negativeColor: string
}

export const GraphBar = styled(Box)<GraphBarProps>`
  position: relative;
  width: 100%;
  height: 9px;
  border-radius: 4px;
  background-color: #cfd8dc;
  overflow: hidden;

  @media (min-width: 768px) {
    margin-left: 15px;
    height: 16px;
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;

    width: ${(props) => props.percent + '%'};
    height: 100%;
    background-color: ${(props) => props.negativeColor};
    z-index: 1;
    transition: all 1s ease-in-out;

    ${(props) =>
      props.percent > 50 && 'background-color: ' + props.positiveColor}
  }

  ::after {
    z-index: 0;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;

    width: ${(props) => props.percent + 0.3 + '%'};
    height: 100%;
    background-color: white;
    transition: all 1.02s ease-in-out;
  }
`
