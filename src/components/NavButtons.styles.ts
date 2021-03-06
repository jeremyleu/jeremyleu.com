import styled from '@emotion/styled';
import { notMobileMq } from '../utils/constants';
import { Button } from './common.styles';

export const NavButton = styled(Button)`
  :not(:first-of-type) {
    margin-left: 15px;
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

interface NavButtonContainerProps {
  marginTop?: number;
  marginRight?: number;
}

export const NavButtonContainer = styled('div')<NavButtonContainerProps>`
  margin-top: ${({ marginTop }: NavButtonContainerProps) =>
    marginTop == null ? 30 : marginTop}px;
  margin-right: ${({ marginRight }: NavButtonContainerProps) =>
    marginRight == null ? 0 : marginRight}px;
  align-self: flex-start;
  display: none;

  ${notMobileMq} {
    display: block;
  }
`;
