import styled from 'styled-components';

export const BlockSection = styled('section')`
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 0 2rem;

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

  font-size: 1.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.0625rem; /* 150% */

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const WaveStyle = styled('div')`
  position: absolute;
  z-index: -1;
  margin-right: 1rem;
  right: 51.5%;
`;
