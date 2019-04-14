import styled from '@emotion/styled';
import {
  TransitionStatus,
  ENTERED,
  EXITED,
  ENTERING,
} from 'react-transition-group/Transition';

import { mq, getTransformFromDifference } from '../utils';

export const ExpandableSectionWrapper = styled('div')<{
  currentSectionIdx: number;
}>(
  ({ currentSectionIdx }: { currentSectionIdx: number }) => `
    ${mq[1]} {
      position: relative;
      height: ${currentSectionIdx >= 0 ? '370px' : 0};
      transition: 0.4s height ease-in-out;
    }
  `
);

interface ScrollingSectionProps {
  difference: number;
  prevDifference: number;
  status: TransitionStatus;
}

export const ScrollingSection = styled('div')<ScrollingSectionProps>(
  ({ difference, prevDifference, status }: ScrollingSectionProps) => {
    let transform = 'translateY(0)';
    if (difference !== 0) {
      transform = `translateY(${getTransformFromDifference(difference)}%)`;
    } else if (status === ENTERING) {
      transform = `translateY(${getTransformFromDifference(prevDifference)}%)`;
    }
    return `
      width: 100%;
      ${mq[1]} {
        transform: ${transform};
        opacity: ${status === ENTERED ? 1 : 0};
        display: ${status === EXITED ? 'none' : 'block'};
        position: absolute;
        transition: 0.4s opacity ease-in-out, 0.4s transform ease-in-out;
      }
    `;
  }
);
