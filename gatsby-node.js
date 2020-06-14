/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Skills {
      description: String!
      skills: [String!]!
    }
    type IntroJson implements Node {
      title: String!
      content: [String!]!
      faces: [File!]!
      familiarSkills: Skills!
      otherSkills: Skills!
      footer: String!
      resume: File!
      numSections: Int!
    }
    type SchoolJson implements Node {
      title: String!
      content: [String!]!
      geisel: File!
      courses: [String!]!
      numSections: Int!
    }
    type Job {
      title: String!
      date: String!
      content: [String!]!
      link: String!
    }
    type WorkJson implements Node {
      title: String!
      content: [String!]!
      work: [Job!]!
      numSections: Int!
    }
    type Project {
      title: String!
      mobileTitle: String
      content: [String!]!
      link: String!
    }
    type ProjectsJson implements Node {
      title: String!
      content: [String!]!
      projects: [Project!]!
      numSections: Int!
    }
    type ContactJson implements Node {
      title: String!
      content: [String!]!
      linkedIn: String!
      instagram: String!
      gitHub: String!
      email: String!
      footer: String!
    }
  `;
  createTypes(typeDefs);
};
