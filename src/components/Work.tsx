import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { WorkJson, Job } from '../schema/graphql';

import {
  Section,
  FlexColumnContainer,
  FlexSection,
  Title,
  SmallTitle,
} from './common.styles';
import NavButtons from './NavButtons';
import ExpandableSection from './ExpandableSection';

const query = graphql`
  query getWorkData {
    dataJson(key: { eq: "work" }) {
      title
      content
      work {
        title
        date
        content
        link
      }
      numSections
    }
  }
`;

interface WorkData {
  dataJson: WorkJson;
}

// interface WorkinfoTemplateProps {}

interface WorkProps {
  currentSectionIdx: number;
  prevSectionIdx: number;
  goToNextSection: () => void;
  goToPrevSection: () => void;
}

const WorkInfoTemplate: React.FC<{ job: Job }> = ({ job }) => (
  <FlexColumnContainer>
    <SmallTitle marginTop={50} mobileJustifyContent="space-between">
      {job.title}
    </SmallTitle>
    <FlexSection marginTop={0} small italic>
      <div>{job.date}</div>
    </FlexSection>
    <FlexSection marginTop={30} column={true} small={true}>
      {job.content.map((contentPiece, idx) => (
        <p key={idx} dangerouslySetInnerHTML={{ __html: contentPiece }} />
      ))}
    </FlexSection>
  </FlexColumnContainer>
);
const Work: React.FC<WorkProps> = ({
  currentSectionIdx,
  prevSectionIdx,
  goToNextSection,
  goToPrevSection,
}) => {
  const data = useStaticQuery<WorkData>(query);
  return (
    // <Section>
    //   <FlexColumnContainer>
    //     <Title>{data.dataJson.title}</Title>
    //     <FlexRowContainer>
    //       <FlexColumnContainer>
    //         <FlexSection marginTop={20}>
    //           <div
    //             dangerouslySetInnerHTML={{ __html: data.dataJson.content[0] }}
    //           />
    //         </FlexSection>
    //         <FlexSection marginTop={30}>
    //           <div
    //             dangerouslySetInnerHTML={{ __html: data.dataJson.content[1] }}
    //           />
    //         </FlexSection>
    //       </FlexColumnContainer>
    //     </FlexRowContainer>
    //   </FlexColumnContainer>
    // </Section>
    <Section>
      <FlexColumnContainer>
        <Title>{data.dataJson.title}</Title>
        <FlexSection marginTop={20}>
          <div dangerouslySetInnerHTML={{ __html: data.dataJson.content[0] }} />
        </FlexSection>
      </FlexColumnContainer>
      <NavButtons
        goToNextSection={goToNextSection}
        goToPrevSection={goToPrevSection}
        numSections={data.dataJson.work.length}
        currentSectionIdx={currentSectionIdx}
      />
      <ExpandableSection
        sections={data.dataJson.work.map((job, idx) => (
          <WorkInfoTemplate key={idx} job={job} />
        ))}
        currentSectionIdx={currentSectionIdx}
        prevSectionIdx={prevSectionIdx}
      />
    </Section>
  );
};

export default Work;
