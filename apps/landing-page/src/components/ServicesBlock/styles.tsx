import styled from 'styled-components';

export const BlockSection = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 1024px) {
  }
`;

export const ContentWrapper = styled('div')`
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Content = styled('p')`
  display: flex;
  max-width: 890px;
  align-items: flex-start;
`;

export const WaveStyle = styled('div')`
  position: absolute;
  z-index: -1;
  margin-right: 1rem;
  left: 12%;
`;
