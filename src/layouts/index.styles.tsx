import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { mq, vmq } from '../utils/constants';

export const Main = styled('main')`
  ${mq[1]} {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
`;

export const globalStyles = css`
  body {
    font-size: 0.6em;
    transition: font-size 0.18s ease-in-out;
    ${mq[1]} {
      overflow: hidden;
    }
    ${vmq[0]} {
      font-size: 0.8em;
    }
  }
`;
