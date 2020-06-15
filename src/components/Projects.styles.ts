import styled from '@emotion/styled';
import { notMobileMq } from '../utils';

export const LaunchButtonAnchor = styled('a')`
  display: inline-flex;
  flex: 0 0 110px;
  margin-left: 20px;

  ${notMobileMq} {
    flex: 0 0 auto;
  }
`;

export const HideOnMobile = styled('span')`
  display: none;

  ${notMobileMq} {
    display: inline-flex;
  }
`;

export const MobileOnly = styled('span')`
  ${notMobileMq} {
    display: none;
  }
`;
