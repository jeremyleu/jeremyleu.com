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

export const Button = styled('button')`
  background: rgb(0, 0, 0, 0.8);
  border-radius: 3px;
  color: white;
  font-family: 'brandon-grotesque', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  outline-color: #aaa;
`;
