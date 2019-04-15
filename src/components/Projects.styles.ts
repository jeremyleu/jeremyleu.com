import styled from '@emotion/styled';
import { mq } from '../utils';

import { Button } from './common.styles';

export const LaunchButton = styled(Button)`
  margin-left: 20px;
`;

export const LaunchButtonAnchor = styled('a')`
  display: inline-flex;
  flex: 0 0 110px;

  ${mq[1]} {
    flex: auto;
  }
`;

export const HideOnMobile = styled('span')`
  display: none;

  ${mq[1]} {
    display: inline;
  }
`;

export const MobileOnly = styled('span')`
  ${mq[1]} {
    display: none;
  }
`;
