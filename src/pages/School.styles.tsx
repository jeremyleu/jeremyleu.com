import styled from '@emotion/styled';

import { mq } from '../utils';

export const Geisel = styled('div')`
  display: none;
  ${mq[1]} {
    display: inline;
    margin-left: 20px;
    flex: 0 0 180px;
  }
`;
