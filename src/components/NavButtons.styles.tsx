import styled from '@emotion/styled';
import { mq } from '../utils/constants';

export const Button = styled('button')`
  background: rgb(0, 0, 0, 0.8);
  border-radius: 3px;
  color: white;
  font-family: 'brandon-grotesque', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  padding: 12px;
  outline-color: #aaa;
  :not(:first-child) {
    margin-left: 20px;
  }
`;

interface ButtonIconProps {
  isNextButton: boolean;
}

export const ButtonIcon = styled('i')<ButtonIconProps>`
  margin-right: 10px;
  transform: ${({ isNextButton }: ButtonIconProps) =>
    isNextButton ? 'none' : 'rotate(180deg)'};
  transition: 0.18s transform ease-in-out;
`;

export const NavButtonContainer = styled('div')`
  margin-top: 20px;
  align-self: flex-start;
  display: none;

  ${mq[1]} {
    display: block;
  }
`;
