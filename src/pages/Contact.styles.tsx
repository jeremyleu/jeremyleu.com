import styled from '@emotion/styled';

export const SocialMediaAnchor = styled('a')`
  font-size: 2em;

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const SocialMediaIcon = styled('i')`
  color: rgb(57, 92, 112);
  transition: 0.2s color ease-in-out;
  &:hover {
    color: rgb(81, 133, 163);
  }
`;
