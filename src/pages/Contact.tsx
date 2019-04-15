import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ContactJson } from '../schema/graphql';

import {
  Section,
  FlexColumnContainer,
  FlexSection,
  Title,
} from '../components';
import { SocialMediaAnchor, SocialMediaIcon } from './Contact.styles';

const query = graphql`
  query getContactData {
    dataJson(key: { eq: "contact" }) {
      title
      content
      linkedIn
      gitHub
      instagram
      email
    }
  }
`;

interface ContactData {
  dataJson: ContactJson;
}

const Contact = () => {
  const data = useStaticQuery<ContactData>(query);
  return (
    <Section>
      <FlexColumnContainer>
        <Title>{data.dataJson.title}</Title>
        <FlexSection marginTop={30} column={true}>
          {data.dataJson.content.map((contentPiece, idx) => (
            <div key={idx}>{contentPiece}</div>
          ))}
        </FlexSection>
        <FlexSection marginTop={30}>
          <SocialMediaAnchor href={data.dataJson.gitHub} target="_blank">
            <SocialMediaIcon className="fab fa-github" />
          </SocialMediaAnchor>
          <SocialMediaAnchor href={data.dataJson.linkedIn} target="_blank">
            <SocialMediaIcon className="fab fa-linkedin" />
          </SocialMediaAnchor>
          <SocialMediaAnchor href={data.dataJson.instagram} target="_blank">
            <SocialMediaIcon className="fab fa-instagram" />
          </SocialMediaAnchor>
          <SocialMediaAnchor href={data.dataJson.email} target="_blank">
            <SocialMediaIcon className="fas fa-envelope" />
          </SocialMediaAnchor>
        </FlexSection>
      </FlexColumnContainer>
    </Section>
  );
};

export default Contact;
