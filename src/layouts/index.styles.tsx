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
    background-color: #eee;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
      'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    ${mq[1]} {
      overflow: hidden;
    }
    ${vmq[0]} {
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
