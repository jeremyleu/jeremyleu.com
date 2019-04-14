import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  SkillsList,
  SkillsListItem,
  MyFaceContainer,
  ScoreContainer,
} from './Intro.styles';
import {
  Section,
  EqualFlexColumn,
  FlexSection,
  ResponsiveFlexSection,
  FlexContainer,
  Title,
} from '../components';
import Image from 'gatsby-image';

import { IntroJson } from '../schema/graphql';
import { ExpandableSection, NavButtons } from '../components';

type IntroProps = {
  currentSectionIdx: number;
  prevSectionIdx: number;
  goToNextSection: () => void;
  goToPrevSection: () => void;
  isMoving: boolean;
  setIsMoving: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
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
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
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
  setScore,
}: IntroWithDataProps) => {
  const [points, setPoints] = React.useState<number>(0);
  const addScore = React.useCallback(() => {
    const pointsGained = isMoving ? 500 : 50;
    setScore(prevScore => prevScore + pointsGained);
    setPoints(pointsGained);
    setTimeout(() => {
      setPoints(0);
    }, Math.random() * 30000 + 30000);
  }, [isMoving]);
  console.log(points);
  return (
    <Section>
      <Title>
        {introData.title}
        {!!points ? (
          <ScoreContainer>+{points}</ScoreContainer>
        ) : (
          <MyFaceContainer onClick={addScore}>
            <Image
              fixed={introData.faces[isMoving ? 1 : 0].childImageSharp!.fixed!}
            />
          </MyFaceContainer>
        )}
      </Title>
      <FlexSection marginTop={20} column={true}>
        {introData.content.map((contentPiece: string, idx: number) => (
          <div key={idx}>{contentPiece}</div>
        ))}
      </FlexSection>
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
