import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import {
  Section,
  FlexContainer,
  FlexSection,
  Title,
  ExpandableSection,
  ResponsiveFlexSection,
  EqualFlexColumn,
  List,
  ListItem,
  NavButtons,
} from '../components';
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
      courses
    }
  }
`;

interface SchoolProps {
  currentSectionIdx: number;
  prevSectionIdx: number;
  goToNextSection: () => void;
  goToPrevSection: () => void;
}

const School = ({
  currentSectionIdx,
  prevSectionIdx,
  goToNextSection,
  goToPrevSection,
}: SchoolProps) => {
  const data = useStaticQuery(query);
  return (
    <Section>
      <FlexContainer>
        <Title>School</Title>
        <FlexSection marginTop={20}>
          <div dangerouslySetInnerHTML={{ __html: data.dataJson.content[0] }} />
          <Geisel>
            <Image fixed={data.dataJson.geisel.childImageSharp.fixed} />
          </Geisel>
        </FlexSection>
        <FlexSection marginTop={10}>
          <div dangerouslySetInnerHTML={{ __html: data.dataJson.content[1] }} />
        </FlexSection>
      </FlexContainer>
      <NavButtons
        goToNextSection={goToNextSection}
        goToPrevSection={goToPrevSection}
        numSections={School.sections.length}
        currentSectionIdx={currentSectionIdx}
      />
      <ExpandableSection
        sections={School.sections.map((SchoolSection, idx) => (
          <SchoolSection key={idx} schoolData={data.dataJson} />
        ))}
        currentSectionIdx={currentSectionIdx}
        prevSectionIdx={prevSectionIdx}
      />
    </Section>
  );
};

School.sections = [
  ({ schoolData }: { schoolData: any }) => {
    const { courses } = schoolData;
    const midpoint = Math.ceil(courses.length / 2);
    const coursesLeft = courses.slice(0, midpoint);
    const coursesRight = courses.slice(midpoint);
    return (
      <FlexContainer>
        <ResponsiveFlexSection marginTop={50}>
          Relevant coursework:
        </ResponsiveFlexSection>
        <ResponsiveFlexSection marginTop={10}>
          <EqualFlexColumn>
            <List>
              {coursesLeft.map((course: string) => (
                <ListItem key={course}>{course}</ListItem>
              ))}
            </List>
          </EqualFlexColumn>
          <EqualFlexColumn>
            <List>
              {coursesRight.map((course: string) => (
                <ListItem key={course}>{course}</ListItem>
              ))}
            </List>
          </EqualFlexColumn>
        </ResponsiveFlexSection>
      </FlexContainer>
    );
  },
];

export default School;
