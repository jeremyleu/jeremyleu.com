/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    # One must say that the type is a Node
    type Skills {
      description: String!
      skills: [String!]!
    }
    type IntroJson implements Node {
      # However Node fields are optional and you don't have to add them
      title: String!
      content: String!
      faces: [File!]!
      familiarSkills: Skills!
      otherSkills: Skills!
      footer: String!
    }
  `;
  createTypes(typeDefs);
};
