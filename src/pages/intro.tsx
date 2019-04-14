import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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

import { useExpander } from '../hooks';
import { IntroJson } from '../schema/graphql';

const query = graphql`
  query getIntroData {
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

const IntroWithData = ({ data: introData }: { data: IntroJson }) => {
  const sections = [
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
      <FlexSection marginTop={30}>{introData.footer}</FlexSection>
    </ResponsiveFlexSection>,
  ];

  const { currentSection } = useExpander(sections);

  return (
    <SectionContainer>
      <Section>
        <Title>
          {introData.title}
          <MyFace fluid={introData.image.childImageSharp!.fluid!} />
        </Title>
        <FlexSection
          marginTop={20}
          dangerouslySetInnerHTML={{ __html: introData.content }}
        />
        {currentSection}
      </Section>
    </SectionContainer>
  );
};

const Intro = () => {
  const data = useStaticQuery(query);
  return <IntroWithData data={data.dataJson} />;
};

export default Intro;
