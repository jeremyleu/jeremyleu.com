import styled from '@emotion/styled';
import {
  TransitionStatus,
  ENTERED,
  EXITED,
  ENTERING,
} from 'react-transition-group/Transition';

export const ExpandableSectionWrapper = styled('div')<{
  currentSectionIdx: number;
}>(
  ({ currentSectionIdx }: { currentSectionIdx: number }) => `
    position: relative;
    height: ${currentSectionIdx >= 0 ? '400px' : 0};
    transition: 0.4s height ease-in-out;
  `
);

const getTransformFromDifference = (difference: number) => {
  if (difference < 0) {
    return -100;
  } else if (difference > 0) {
    return 100;
  }
  return 0;
};

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
      transform: ${transform};
      opacity: ${status === ENTERED ? 1 : 0};
      display: ${status === EXITED ? 'none' : 'block'};
      position: absolute;
      transition: 0.4s all ease-in-out;
    `;
  }
);
