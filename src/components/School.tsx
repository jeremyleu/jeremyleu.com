import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import {
  Section,
  FlexColumnContainer,
  FlexSection,
  Title,
  ResponsiveFlexSection,
  EqualFlexColumn,
  List,
  ListItem,
} from './common.styles';
import { SchoolJson } from '../schema/graphql';
import { Geisel } from './School.styles';
import ExpandableSection from './ExpandableSection';
import NavButtons from './NavButtons';

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
      numSections
    }
  }
`;

interface SchoolProps {
  currentSectionIdx: number;
  prevSectionIdx: number;
  goToNextSection: () => void;
  goToPrevSection: () => void;
}

interface SchoolData {
  dataJson: SchoolJson;
}

const SchoolSectionTemplate = ({ schoolData }: { schoolData: SchoolJson }) => {
  const { courses } = schoolData;
  const midpoint = Math.ceil(courses.length / 2);
  const coursesLeft = courses.slice(0, midpoint);
  const coursesRight = courses.slice(midpoint);
  return (
    <FlexColumnContainer>
      <ResponsiveFlexSection marginTop={50}>
        Some classes I took:
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
    </FlexColumnContainer>
  );
};

const School = ({
  currentSectionIdx,
  prevSectionIdx,
  goToNextSection,
  goToPrevSection,
}: SchoolProps) => {
  const data = useStaticQuery<SchoolData>(query);
  return (
    <Section>
      <FlexColumnContainer>
        <Title>School</Title>
        <FlexSection marginTop={20}>
          <div dangerouslySetInnerHTML={{ __html: data.dataJson.content[0] }} />
          <Geisel>
            <Image fixed={data.dataJson.geisel.childImageSharp!.fixed} />
          </Geisel>
        </FlexSection>
        <FlexSection marginTop={10}>
          <div dangerouslySetInnerHTML={{ __html: data.dataJson.content[1] }} />
        </FlexSection>
      </FlexColumnContainer>
      <NavButtons
        goToNextSection={goToNextSection}
        goToPrevSection={goToPrevSection}
        numSections={data.dataJson.numSections}
        currentSectionIdx={currentSectionIdx}
      />
      <ExpandableSection
        sections={Array(data.dataJson.numSections)
          .fill(null)
          .map((_, idx) => (
            <SchoolSectionTemplate key={idx} schoolData={data.dataJson} />
          ))}
        currentSectionIdx={currentSectionIdx}
        prevSectionIdx={prevSectionIdx}
      />
    </Section>
  );
};

export default School;
