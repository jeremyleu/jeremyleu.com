import styled from '@emotion/styled';
import { mq } from '../utils/constants';

export const Section = styled('section')`
  display: flex;
  padding: 20px 20px 80px 20px;
  flex-direction: column;

  ${mq[1]} {
    max-width: 840px;
  }
`;
