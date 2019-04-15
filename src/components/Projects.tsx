import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ProjectsJson, Project } from '../schema/graphql';

import {
  Section,
  FlexColumnContainer,
  FlexSection,
  Title,
  SmallTitle,
} from './common.styles';

import {
  LaunchButton,
  LaunchButtonAnchor,
  MobileOnly,
  HideOnMobile,
} from './Projects.styles';
import ExpandableSection from './ExpandableSection';
import NavButtons from './NavButtons';

const query = graphql`
  query getProjectsData {
    dataJson(key: { eq: "projects" }) {
      title
      content
      projects {
        title
        mobileTitle
        content
        link
      }
    }
  }
`;

interface ProjectsData {
  dataJson: ProjectsJson;
}

const ProjectInfoTemplate = ({ project }: { project: Project }) => (
  <FlexColumnContainer>
    <SmallTitle marginTop={50} mobileJustifyContent="space-between">
      {project.mobileTitle ? (
        <>
          <HideOnMobile>{project.title}</HideOnMobile>
          <MobileOnly>{project.mobileTitle}</MobileOnly>
        </>
      ) : (
        project.title
      )}
      <LaunchButtonAnchor href={project.link} target="_blank">
        <LaunchButton>Launch Web App</LaunchButton>
      </LaunchButtonAnchor>
    </SmallTitle>
    <FlexSection marginTop={30} column={true} small={true}>
      {project.content.map((contentPiece, idx) => (
        <p key={idx} dangerouslySetInnerHTML={{ __html: contentPiece }} />
      ))}
    </FlexSection>
  </FlexColumnContainer>
);

interface ProjectsProps {
  currentSectionIdx: number;
  prevSectionIdx: number;
  goToNextSection: () => void;
  goToPrevSection: () => void;
}

const Projects = ({
  currentSectionIdx,
  prevSectionIdx,
  goToNextSection,
  goToPrevSection,
}: ProjectsProps) => {
  const data = useStaticQuery<ProjectsData>(query);
  return (
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
        numSections={data.dataJson.projects.length}
        currentSectionIdx={currentSectionIdx}
      />
      <ExpandableSection
        sections={data.dataJson.projects.map((project, idx) => (
          <ProjectInfoTemplate key={idx} project={project} />
        ))}
        currentSectionIdx={currentSectionIdx}
        prevSectionIdx={prevSectionIdx}
      />
    </Section>
  );
};

export default Projects;
