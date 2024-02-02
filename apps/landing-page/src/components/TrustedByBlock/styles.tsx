import styled from 'styled-components';

export const TrustedByBlockSection = styled('section')`
  width: 100%;

  @media screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 414px) {
    text-align: center;
  }
`;

export const ContentWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 2rem 0 0 0;
  align-items: center;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }

  @media only screen and (max-width: 414px) {
    gap: 2.625rem;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentImageStyle = styled('div')`
  padding: 0 2rem;

  @media only screen and (max-width: 414px) {
    width: 100%;
  }
`;
