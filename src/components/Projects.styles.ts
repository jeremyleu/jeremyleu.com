import styled from '@emotion/styled';
import { mq } from '../utils';

export const LaunchButtonAnchor = styled('a')`
  display: inline-flex;
  flex: 0 0 110px;
  margin-left: 20px;

  ${mq[1]} {
    flex: 0 0 auto;
  }
`;

export const HideOnMobile = styled('span')`
  display: none;

  ${mq[1]} {
    display: inline-flex;
  }
`;

export const MobileOnly = styled('span')`
  ${mq[1]} {
    display: none;
  }
`;
