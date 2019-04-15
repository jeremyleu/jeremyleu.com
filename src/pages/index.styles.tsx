import styled from '@emotion/styled';
import {
  TransitionStatus,
  ENTERING,
  ENTERED,
  EXITED,
} from 'react-transition-group/Transition';
import { Button } from '../components';

import { getTransformFromDifference, mq, Direction } from '../utils';

interface PageWrapperProps {
  difference: number;
  prevDifference: number;
  status: TransitionStatus;
}

export const PageWrapper = styled('div')<PageWrapperProps>(
  ({ difference, prevDifference, status }: PageWrapperProps) => {
    let transform = 'translateX(0)';
    if (difference !== 0) {
      transform = `translateX(${getTransformFromDifference(difference)}%)`;
    } else if (status === ENTERING) {
      transform = `translateX(${getTransformFromDifference(prevDifference)}%)`;
    }
    return `
      width: 100%;
      ${mq[1]} {
        transform: ${transform};
        opacity: ${status === ENTERED ? 1 : 0};
        display: flex;
        visibility: ${status === EXITED ? 'hidden' : 'visible'};
        position: absolute;
        transition: 0.4s opacity ease-in-out, 0.4s transform ease-in-out;
        width: 100vw;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
    `;
  }
);

const GRID_GAP = 5;
const BUTTON_SIZE = 50;

export const ArrowButtonsContainer = styled('div')`
  display: none;
  ${mq[1]} {
    width: ${BUTTON_SIZE * 3 + GRID_GAP * 2}px;
    height: ${BUTTON_SIZE * 2 + GRID_GAP}px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: absolute;
    right: 40px;
    bottom: 40px;
    grid-gap: ${GRID_GAP}px;
  }
`;

interface ArrowButtonProps {
  direction: Direction;
}

export const ArrowButton = styled(Button)<ArrowButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: ${({ direction }: ArrowButtonProps) =>
    direction === Direction.Up ? 1 : 2};
  grid-column: ${({ direction }: ArrowButtonProps) => {
    if (direction === Direction.Left) {
      return 1;
    } else if (direction === Direction.Right) {
      return 3;
    }
    return 2;
  }};
`;

export const ScoreDisplay = styled('div')`
  display: none;
  ${mq[1]} {
    display: block;
    position: absolute;
    text-transform: uppercase;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    font-family: ocr-a-std, monospace;
    font-size: 1.6em;
  }
`;
