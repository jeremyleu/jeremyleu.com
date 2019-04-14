import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Section, FlexContainer, FlexSection, Title } from '../components';

const query = graphql`
  query getWorkData {
    dataJson(key: { eq: "work" }) {
      title
      content
      description
      leetCodeLogo {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const Work = () => {
  const data = useStaticQuery(query);
  return (
    <Section>
      <FlexContainer>
        <Title>{data.dataJson.title}</Title>
        <FlexSection marginTop={20}>
          <div dangerouslySetInnerHTML={{ __html: data.dataJson.content }} />
        </FlexSection>
        <FlexSection marginTop={30}>
          <div
            dangerouslySetInnerHTML={{ __html: data.dataJson.description }}
          />
        </FlexSection>
      </FlexContainer>
    </Section>
  );
};

Work.sections = [];

export default Work;
