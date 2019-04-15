import styled from '@emotion/styled';
import { vmq, mq } from '../utils/constants';

export const Section = styled('section')`
  display: flex;
  padding: 20px 20px 80px 20px;
  flex-direction: column;

  ${mq[1]} {
    width: 770px;
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
  font-size: 14.4px;
  padding: 12px;
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

export const FlexRowContainer = styled('div')`
  display: flex;
`;

export const FlexColumnContainer = styled(FlexRowContainer)`
  flex-direction: column;
`;

interface FlexSectionProps {
  marginTop: number;
  column?: boolean;
  small?: boolean;
}

export const FlexSection = styled('div')<FlexSectionProps>`
  margin-top: ${(props: FlexSectionProps) => props.marginTop / 2}px;
  ${vmq[0]} {
    margin-top: ${(props: FlexSectionProps) => props.marginTop}px;
  }
  font-size: ${(props: FlexSectionProps) => (props.small ? '1.2em' : '1.6em')};
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

interface TitleProps {
  marginTop?: number;
}

export const Title = styled('header')<TitleProps>`
  font-family: 'brandon-grotesque', sans-serif;
  text-transform: uppercase;
  font-size: 3.6em;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-top: ${(props: TitleProps) => props.marginTop || 0}px;
`;

export const BigTitle = styled(Title)`
  font-size: 4.8em;
`;

export const SmallTitle = styled(Title)`
  font-size: 2.4em;
`;

export const List = styled('ul')`
  margin-top: 10px;
  margin-bottom: 0;
`;

export const ListItem = styled('li')`
  margin-bottom: 0;
  font-size: 0.8em;
`;
