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
  FlexContainer,
} from './Intro.styles';
import { Section } from './common.styles';

import { IntroJson } from '../schema/graphql';
import { ExpandableSection, NavButtons } from '../components';

type IntroProps = {
  currentSectionIdx: number;
  prevSectionIdx: number;
  goToNextSection: () => void;
  goToPrevSection: () => void;
  isMoving: boolean;
  setIsMoving: React.Dispatch<React.SetStateAction<boolean>>;
};

type IntroWithDataProps = IntroProps & { data: IntroJson };

const query = graphql`
  query getIntroData {
    dataJson(key: { eq: "intro" }) {
      title
      content
      faces {
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

const IntroWithData = ({
  data: introData,
  goToPrevSection,
  goToNextSection,
  currentSectionIdx,
  prevSectionIdx,
  isMoving,
  setIsMoving,
}: IntroWithDataProps) => {
  return (
    <Section>
      <Title>
        {introData.title}
        <MyFace
          fluid={introData.faces[isMoving ? 1 : 0].childImageSharp!.fluid!}
        />
      </Title>
      <FlexSection
        marginTop={20}
        dangerouslySetInnerHTML={{ __html: introData.content }}
      />
      <NavButtons
        goToNextSection={goToNextSection}
        goToPrevSection={goToPrevSection}
        numSections={Intro.sections.length}
        currentSectionIdx={currentSectionIdx}
      />
      <ExpandableSection
        sections={Intro.sections.map((IntroSection, idx) => (
          <IntroSection key={idx} introData={introData} />
        ))}
        currentSectionIdx={currentSectionIdx}
        prevSectionIdx={prevSectionIdx}
        setIsMoving={setIsMoving}
      />
    </Section>
  );
};

const Intro = (props: IntroProps) => {
  const data = useStaticQuery(query);
  return <IntroWithData {...props} data={data.dataJson} />;
};

Intro.sections = [
  ({ introData }: { introData: IntroJson }) => (
    <FlexContainer>
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
    </FlexContainer>
  ),
];

export default Intro;
