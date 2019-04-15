import styled from '@emotion/styled';

import { mq } from '../utils';

export const LeetCodeLogo = styled('div')`
  display: none;
  ${mq[1]} {
    display: flex;
    align-items: center;
    margin-right: 20px;
    flex: 0 0 120px;
  }
`;
