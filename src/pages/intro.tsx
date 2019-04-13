import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  SkillsList,
  SkillsListItem,
  EqualFlexColumn,
  FlexSection,
  Title,
  MyFace,
} from './Intro.styles';
import { SectionContainer, Section } from './common.styles';

const query = graphql`
  query {
    dataJson {
      content
      image {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      familiarSkills
      otherSkills
    }
  }
`;

const Intro = () => (
  <StaticQuery
    query={query}
    render={data => {
      return (
        <SectionContainer>
          <Section>
            <Title>
              Hi, I'm Jeremy.
              <MyFace fluid={data.dataJson.image.childImageSharp.fluid} />
            </Title>
            <FlexSection
              marginTop={20}
              dangerouslySetInnerHTML={{ __html: data.dataJson.content }}
            />
            <FlexSection marginTop={50}>
              <EqualFlexColumn>
                I'm most familiar with:
                <SkillsList>
                  {data.dataJson.familiarSkills.map((skill: string) => (
                    <SkillsListItem key={skill}>{skill}</SkillsListItem>
                  ))}
                </SkillsList>
              </EqualFlexColumn>
              <EqualFlexColumn>
                I've also worked with:
                <SkillsList>
                  {data.dataJson.otherSkills.map((skill: string) => (
                    <SkillsListItem key={skill}>{skill}</SkillsListItem>
                  ))}
                </SkillsList>
              </EqualFlexColumn>
            </FlexSection>
            <FlexSection marginTop={30}>
              At the same time, I'm eager to learn the right tool for the job.
            </FlexSection>
          </Section>
        </SectionContainer>
      );
    }}
  />
);

export default Intro;
