import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { mq, vmq } from '../utils/constants';

export const SkillsList = styled('ul')`
  margin-top: 10px;
  margin-bottom: 0;
`;

export const SkillsListItem = styled('li')`
  margin-bottom: 0;
  font-size: 0.8em;
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

interface FlexSectionProps {
  marginTop: number;
}

export const FlexContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const FlexSection = styled('div')<FlexSectionProps>`
  margin-top: ${(props: FlexSectionProps) => props.marginTop / 2}px;
  ${vmq[0]} {
    margin-top: ${(props: FlexSectionProps) => props.marginTop}px;
  }
  font-size: 1.6em;
  display: flex;
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
  font-size: 4.8em;
  font-weight: 700;
`;

export const MyFace = styled(Image)`
  width: 80px;
  margin-left: 40px;
  margin-bottom: -20px;
  display: inline-block;
`;
