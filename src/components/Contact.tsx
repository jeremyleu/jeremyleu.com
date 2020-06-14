import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ContactJson } from '../schema/graphql';

import {
  Section,
  FlexColumnContainer,
  FlexSection,
  Title,
  TitleEmoji,
} from './common.styles';
import { SocialMediaAnchor, SocialMediaIcon } from './Contact.styles';

const query = graphql`
  query getContactData {
    dataJson(key: { eq: "contact" }) {
      title
      titleEmoji
      titleEmojiLabel
      content
      linkedIn
      gitHub
      instagram
      email
      footer
    }
  }
`;

interface ContactData {
  dataJson: ContactJson;
}

const Contact = () => {
  const data = useStaticQuery<ContactData>(query);
  return (
    <Section mobilePaddingBottom={80}>
      <FlexColumnContainer>
        <Title>
          {data.dataJson.title}
          <TitleEmoji role="img" aria-label={data.dataJson.titleEmojiLabel}>
            {data.dataJson.titleEmoji}
          </TitleEmoji>
        </Title>
        <FlexSection marginTop={30} column={true}>
          {data.dataJson.content.map((contentPiece, idx) => (
            <div key={idx}>{contentPiece}</div>
          ))}
        </FlexSection>
        <FlexSection marginTop={30}>
          <SocialMediaAnchor
            href={data.dataJson.gitHub}
            target="_blank"
            rel="noopener"
          >
            <SocialMediaIcon className="fab fa-github" />
          </SocialMediaAnchor>
          <SocialMediaAnchor
            href={data.dataJson.linkedIn}
            target="_blank"
            rel="noopener"
          >
            <SocialMediaIcon className="fab fa-linkedin" />
          </SocialMediaAnchor>
          <SocialMediaAnchor
            href={data.dataJson.instagram}
            target="_blank"
            rel="noopener"
          >
            <SocialMediaIcon className="fab fa-instagram" />
          </SocialMediaAnchor>
          <SocialMediaAnchor
            href={data.dataJson.email}
            target="_blank"
            rel="noopener"
          >
            <SocialMediaIcon className="fas fa-envelope" />
          </SocialMediaAnchor>
        </FlexSection>
        <FlexSection marginTop={30}>
          <div dangerouslySetInnerHTML={{ __html: data.dataJson.footer }} />
        </FlexSection>
      </FlexColumnContainer>
    </Section>
  );
};

export default Contact;
