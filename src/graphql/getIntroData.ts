import { graphql } from 'gatsby';

const getIntroData = graphql`
  query getIntroData {
    dataJson(key: { eq: "intro" }) {
      title
      content
      image {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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

export default getIntroData;
