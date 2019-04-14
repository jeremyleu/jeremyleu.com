import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { mq } from '../utils/constants';

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
    ${mq[1]} {
      overflow: hidden;
    }
  }
`;
