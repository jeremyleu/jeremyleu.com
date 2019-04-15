import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MyFaceContainer, ScoreContainer } from './Intro.styles';
import {
  List,
  ListItem,
  Section,
  EqualFlexColumn,
  FlexSection,
  ResponsiveFlexSection,
  FlexColumnContainer,
  BigTitle,
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
      numSections
    }
  }
`;

const IntroSectionTemplate = ({ introData }: { introData: IntroJson }) => (
  <FlexColumnContainer>
    <ResponsiveFlexSection marginTop={30}>
      <EqualFlexColumn>
        {introData.familiarSkills.description}
        <List>
          {introData.familiarSkills.skills.map((skill: string) => (
            <ListItem key={skill}>{skill}</ListItem>
          ))}
        </List>
      </EqualFlexColumn>
      <EqualFlexColumn>
        {introData.otherSkills.description}
        <List>
          {introData.otherSkills.skills.map((skill: string) => (
            <ListItem key={skill}>{skill}</ListItem>
          ))}
        </List>
      </EqualFlexColumn>
    </ResponsiveFlexSection>
    <FlexSection marginTop={30}>{introData.footer}</FlexSection>
  </FlexColumnContainer>
);

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

  return (
    <Section>
      <BigTitle>
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
      </BigTitle>
      <FlexSection marginTop={20} column={true}>
        {introData.content.map((contentPiece: string, idx: number) => (
          <div key={idx}>{contentPiece}</div>
        ))}
      </FlexSection>
      <NavButtons
        goToNextSection={goToNextSection}
        goToPrevSection={goToPrevSection}
        numSections={introData.numSections}
        currentSectionIdx={currentSectionIdx}
      />
      <ExpandableSection
        sections={Array(introData.numSections)
          .fill(null)
          .map((_, idx) => (
            <IntroSectionTemplate key={idx} introData={introData} />
          ))}
        currentSectionIdx={currentSectionIdx}
        prevSectionIdx={prevSectionIdx}
        setIsMoving={setIsMoving}
      />
    </Section>
  );
};

interface IntroData {
  dataJson: IntroJson;
}

const Intro = (props: IntroProps) => {
  const data = useStaticQuery<IntroData>(query);
  return <IntroWithData {...props} data={data.dataJson} />;
};

export default Intro;
