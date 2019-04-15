import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ProjectsJson, Project } from '../schema/graphql';

import {
  Section,
  FlexColumnContainer,
  FlexSection,
  Title,
  ResponsiveFlexSection,
} from '../components';

const query = graphql`
  query getProjectsData {
    dataJson(key: { eq: "projects" }) {
      title
      content
      projects {
        title
        content
        link
      }
    }
  }
`;

interface ProjectsData {
  dataJson: ProjectsJson;
}

const Projects = () => {
  const data = useStaticQuery<ProjectsData>(query);
  return (
    <Section>
      <FlexColumnContainer>
        <Title>{data.dataJson.title}</Title>
        <FlexSection marginTop={20}>
          <div dangerouslySetInnerHTML={{ __html: data.dataJson.content[0] }} />
        </FlexSection>
      </FlexColumnContainer>
    </Section>
  );
};

const ProjectInfoTemplate = (project: Project) => (
  <FlexColumnContainer>
    <Title>{project.title}</Title>
    <ResponsiveFlexSection marginTop={30}>
      {project.content.map((contentPiece, idx) => (
        <p key={idx} dangerouslySetInnerHTML={{ __html: contentPiece }} />
      ))}
    </ResponsiveFlexSection>
  </FlexColumnContainer>
);

export default Projects;
