import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  SkillsList,
  SkillsListItem,
  EqualFlexColumn,
  FlexSection,
  ResponsiveFlexSection,
  Title,
  MyFace,
} from './Intro.styles';
import { SectionContainer, Section } from './common.styles';

const query = graphql`
  query {
    dataJson(key: { eq: "intro" }) {
      title
      content
      image {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      familiarSkills {
        description
        skills
      }
      otherSkills {
        description
        skills
      }
      footer
    }
  }
`;

const Intro = () => (
  <StaticQuery
    query={query}
    render={data => {
      const introData = data.dataJson;
      return (
        <SectionContainer>
          <Section>
            <Title>
              {introData.title}
              <MyFace fluid={introData.image.childImageSharp.fluid} />
            </Title>
            <FlexSection
              marginTop={20}
              dangerouslySetInnerHTML={{ __html: introData.content }}
            />
            <ResponsiveFlexSection marginTop={50}>
              <EqualFlexColumn>
                {introData.familiarSkills.description}
                <SkillsList>
                  {introData.familiarSkills.skills.map((skill: string) => (
                    <SkillsListItem key={skill}>{skill}</SkillsListItem>
                  ))}
                </SkillsList>
              </EqualFlexColumn>
              <EqualFlexColumn>
                {introData.otherSkills.description}
                <SkillsList>
                  {introData.otherSkills.skills.map((skill: string) => (
                    <SkillsListItem key={skill}>{skill}</SkillsListItem>
                  ))}
                </SkillsList>
              </EqualFlexColumn>
            </ResponsiveFlexSection>
            <FlexSection marginTop={30}>{introData.footer}</FlexSection>
          </Section>
        </SectionContainer>
      );
    }}
  />
);

export default Intro;
