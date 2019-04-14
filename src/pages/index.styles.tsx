import styled from '@emotion/styled';
import {
  TransitionStatus,
  ENTERING,
  ENTERED,
  EXITED,
} from 'react-transition-group/Transition';

import { getTransformFromDifference, mq } from '../utils';

interface PageWrapperProps {
  difference: number;
  prevDifference: number;
  status: TransitionStatus;
}

export const PageWrapper = styled('div')<PageWrapperProps>(
  ({ difference, prevDifference, status }: PageWrapperProps) => {
    console.log(status);
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
        display: ${status === EXITED ? 'none' : 'flex'};
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
