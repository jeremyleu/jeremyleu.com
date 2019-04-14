import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

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

export const SkillsList = styled('ul')`
  margin-top: 10px;
  margin-bottom: 0;
`;

export const SkillsListItem = styled('li')`
  margin-bottom: 0;
  font-size: 0.8em;
`;

export const MyFaceContainer = styled('div')`
  width: 80px;
  height: 142px;
  margin-left: 40px;
  display: inline-block;
`;

export const ScoreContainer = styled(MyFaceContainer)`
  font-size: 0.4em;
  font-family: ocr-a-std, monospace;
  animation: ${scoreAnimation} 3s ease-in-out forwards;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
