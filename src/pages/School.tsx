import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Section, FlexContainer, FlexSection, Title } from '../components';
import { Geisel } from './School.styles';

const query = graphql`
  query getSchoolData {
    dataJson(key: { eq: "school" }) {
      title
      content
      geisel {
        childImageSharp {
          fixed(width: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;

const School = () => {
  const data = useStaticQuery(query);
  return (
    <Section>
      <FlexContainer>
        <Title>School</Title>
        <FlexSection marginTop={20}>
          <div dangerouslySetInnerHTML={{ __html: data.dataJson.content[0] }} />
          <Geisel fixed={data.dataJson.geisel.childImageSharp.fixed} />
        </FlexSection>
        <FlexSection marginTop={30}>
          <div dangerouslySetInnerHTML={{ __html: data.dataJson.content[1] }} />
        </FlexSection>
      </FlexContainer>
    </Section>
  );
};

School.sections = [];

export default School;