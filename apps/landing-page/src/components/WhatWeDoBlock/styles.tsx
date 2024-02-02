import styled from 'styled-components';

export const WhatWeDoBlockSection = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
  }
`;

export const ContentWrapper = styled('div')`
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Content = styled('p')`
  padding: 0 2rem;
  display: flex;
  max-width: 890px;
  align-items: flex-start;

  @media only screen and (max-width: 414px) {
    padding: 0;
  }
`;
