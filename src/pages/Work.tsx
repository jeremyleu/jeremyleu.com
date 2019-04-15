import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { WorkJson } from '../schema/graphql';

import {
  Section,
  FlexColumnContainer,
  FlexSection,
  Title,
  FlexRowContainer,
} from '../components';

import { LeetCodeLogo } from './Work.styles';

const query = graphql`
  query getWorkData {
    dataJson(key: { eq: "work" }) {
      title
      content
      leetCodeLogo {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;

interface WorkData {
  dataJson: WorkJson;
}

const Work = () => {
  const data = useStaticQuery<WorkData>(query);
  return (
    <Section>
      <FlexColumnContainer>
        <Title>{data.dataJson.title}</Title>
        <FlexRowContainer>
          <LeetCodeLogo>
            <Image fixed={data.dataJson.leetCodeLogo.childImageSharp!.fixed} />
          </LeetCodeLogo>
          <FlexColumnContainer>
            <FlexSection marginTop={20}>
              <div
                dangerouslySetInnerHTML={{ __html: data.dataJson.content[0] }}
              />
            </FlexSection>
            <FlexSection marginTop={30}>
              <div
                dangerouslySetInnerHTML={{ __html: data.dataJson.content[1] }}
              />
            </FlexSection>
          </FlexColumnContainer>
        </FlexRowContainer>
      </FlexColumnContainer>
    </Section>
  );
};

Work.sections = [];

export default Work;
