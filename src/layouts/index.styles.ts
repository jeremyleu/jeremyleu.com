import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { vmq, notMobileMq } from '../utils/constants';

export const Main = styled('main')`
  ${notMobileMq} {
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
    transition: font-size 0.18s ease-in-out;
    background-color: #fff;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
      'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    ${notMobileMq} {
      overflow: hidden;
    }
    ${vmq[1]} {
      font-size: 0.8em;
    }
  }

  a,
  a:focus,
  a:visited,
  a:active,
  a:hover {
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  a,
  a:focus,
  a:visited {
    color: rgba(34, 92, 183, 0.8);
  }

  a:hover,
  a:active {
    color: rgba(63, 137, 229, 0.8);
  }
`;
