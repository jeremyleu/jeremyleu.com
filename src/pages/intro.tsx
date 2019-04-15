import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Transition } from 'react-transition-group';
import { TransitionStatus, ENTERING } from 'react-transition-group/Transition';

import {
  MyFace,
  MyFaceContainer,
  ScoreContainer,
  ButtonContainer,
  ResumeButton,
  MyRisingFace,
} from './Intro.styles';
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
      resume {
        publicURL
      }
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
  const [isGold, setIsGold] = React.useState<boolean>(false);
  const addScore = React.useCallback(() => {
    let pointsGained = isMoving ? 500 : 50;
    if (isGold) {
      pointsGained *= 3;
    }
    setScore(prevScore => prevScore + pointsGained);
    setPoints(pointsGained);
    setIsGold(false);
    setTimeout(() => {
      setPoints(0);
      if (Math.random() < 0.2) {
        setIsGold(true);
      }
    }, Math.random() * 30000 + 30000);
  }, [isMoving, isGold]);

  let face = 0;

  if (isMoving) {
    face = isGold ? 3 : 1;
  } else {
    face = isGold ? 2 : 0;
  }

  return (
    <Section>
      <BigTitle>
        {introData.title}
        {!!points && <ScoreContainer>+{points}</ScoreContainer>}
        <MyFaceContainer onClick={addScore}>
          <Transition appear in={!points} timeout={{ enter: 2000, exit: 0 }}>
            {(status: TransitionStatus) => {
              return status === ENTERING ? (
                <MyRisingFace>
                  <Image
                    fixed={introData.faces[face].childImageSharp!.fixed!}
                  />
                </MyRisingFace>
              ) : (
                <MyFace status={status}>
                  <Image
                    fixed={introData.faces[face].childImageSharp!.fixed!}
                  />
                </MyFace>
              );
            }}
          </Transition>
        </MyFaceContainer>
      </BigTitle>
      <FlexSection marginTop={20} column={true}>
        {introData.content.map((contentPiece: string, idx: number) => (
          <div key={idx}>{contentPiece}</div>
        ))}
      </FlexSection>
      <ButtonContainer>
        <NavButtons
          goToNextSection={goToNextSection}
          goToPrevSection={goToPrevSection}
          numSections={introData.numSections}
          currentSectionIdx={currentSectionIdx}
          marginTop={0}
        />
        <a href={introData.resume.publicURL} target="_blank">
          <ResumeButton>View Résumé</ResumeButton>
        </a>
      </ButtonContainer>
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
