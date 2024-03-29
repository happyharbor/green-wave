import styled from 'styled-components';

export const BlockSection = styled('section')`
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
  }
`;

export const ContentWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16.88rem;
  row-gap: 3.62rem;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }

  @media only screen and (max-width: 414px) {
    row-gap: 2rem;
  }
`;

export const ContentContainerStyle = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 28.6875rem;
  align-items: center;

  @media only screen and (max-width: 414px) {
    width: 100%;
  }
`;

export const Content = styled('p')`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
