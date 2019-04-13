import styled from '@emotion/styled';
import Image from 'gatsby-image';

export const SkillsList = styled('ul')`
  margin-top: 10px;
`;

export const SkillsListItem = styled('li')`
  margin-bottom: 0;
  font-size: 0.8em;
`;

export const EqualFlexColumn = styled('div')`
  flex: 1 1 0;
`;

interface FlexSectionProps {
  marginTop: number;
}

export const FlexSection = styled('div')<FlexSectionProps>`
  margin-top: ${(props: FlexSectionProps) => props.marginTop}px;
  font-size: 1.6em;
  display: flex;
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
