import styled from '@emotion/styled';
import { mq } from '../utils/constants';
import { Button } from './common.styles';

export const NavButton = styled(Button)`
  :not(:first-of-type) {
    margin-left: 20px;
  }
  padding: 12px;
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
