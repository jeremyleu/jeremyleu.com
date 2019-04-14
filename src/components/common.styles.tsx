import styled from '@emotion/styled';
import { vmq, mq } from '../utils/constants';

export const Section = styled('section')`
  display: flex;
  padding: 20px 20px 80px 20px;
  flex-direction: column;

  ${mq[1]} {
    max-width: 730px;
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

export const EqualFlexColumn = styled('div')`
  flex: 1 1 0;
  &:not(:first-of-type) {
    margin-top: 20px;
    ${mq[1]} {
      margin-top: 0;
      margin-left: 20px;
    }
  }
`;

export const FlexContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

interface FlexSectionProps {
  marginTop: number;
  column?: boolean;
}

export const FlexSection = styled('div')<FlexSectionProps>`
  margin-top: ${(props: FlexSectionProps) => props.marginTop / 2}px;
  ${vmq[0]} {
    margin-top: ${(props: FlexSectionProps) => props.marginTop}px;
  }
  font-size: 1.6em;
  display: flex;
  flex-direction: ${({ column }: FlexSectionProps) =>
    column ? 'column' : 'row'};
`;

export const ResponsiveFlexSection = styled(FlexSection)`
  flex-direction: column;
  ${mq[1]} {
    flex-direction: row;
  }
`;

export const Title = styled('header')`
  font-family: 'brandon-grotesque', sans-serif;
  text-transform: uppercase;
  font-size: 3.6em;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const BigTitle = styled(Title)`
  font-size: 4.8em;
`;

export const List = styled('ul')`
  margin-top: 10px;
  margin-bottom: 0;
`;

export const ListItem = styled('li')`
  margin-bottom: 0;
  font-size: 0.8em;
`;
