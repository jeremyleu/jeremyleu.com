import React from 'react';
import { useStaticQuery } from 'gatsby';
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

import { getIntroData } from '../graphql';
import { useExpander } from '../hooks';

const IntroWithData = (data: any) => {
  const introData = data;
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
        {sections[0]}
      </Section>
    </SectionContainer>
  );
};

const Intro = () => {
  const { currentSectionIdx } = useExpander(sections);
  const { dataJson } = useStaticQuery(getIntroData);
  return <IntroWithData data={dataJson} />;
};

export default Intro;
