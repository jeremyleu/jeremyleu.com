import styled from '@emotion/styled';

import { notMobileMq } from '../utils';

export const Geisel = styled('div')`
  display: none;
  ${notMobileMq} {
    display: inline;
    margin-left: 20px;
    flex: 0 0 180px;
  }
`;
