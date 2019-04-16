import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import {
  TransitionStatus,
  EXITED,
  EXITING,
} from 'react-transition-group/Transition';

const rise = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
`;

const scoreAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  10%, 80% {
    transform: none;
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Container = styled('div')`
  width: 80px;
  height: 142px;
  flex: 0 0 80px;
  margin-left: 40px;
`;

interface MyFaceContainerProps {
  status: TransitionStatus;
}

export const MyFaceContainer = styled(Container)<MyFaceContainerProps>`
  overflow: hidden;
  display: inline-block;
  ${({ status }: MyFaceProps) =>
    `display: ${status === EXITED || status === EXITING ? 'none' : 'block'};`}
  &:hover {
    transform: rotate(6deg);
  }
`;

interface MyFaceProps {
  status: TransitionStatus;
}

export const MyFace = styled('div')<MyFaceProps>(
  ({ status }: MyFaceProps) => `
    display: ${status === EXITED || status === EXITING ? 'none' : 'block'};
  `
);

export const MyRisingFace = styled('div')`
  animation: ${rise} 2s ease-in-out forwards;
`;

export const ScoreContainer = styled(Container)`
  font-size: 0.4em;
  font-family: ocr-a-std, monospace;
  animation: ${scoreAnimation} 3s ease-in-out forwards;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled('div')`
  margin-top: 20px;
  display: flex;
`;
