import styled from 'styled-components';

export const IntroBlockSection = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.875rem;

  @media screen and (max-width: 1024px) {
  }
`;

export const ButtonSection = styled('section')`
  display: flex;
  align-items: flex-start;
  gap: 2.25rem;
`;

export const ContentWrapper = styled('div')`
  max-width: 890px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
