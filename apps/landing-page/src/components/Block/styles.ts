import styled from 'styled-components';

export const Content = styled('p')`
  margin-top: 1.5rem;

  @media only screen and (max-width: 414px) {
    margin-top: 0;
  }
`;

export const Container = styled('div')`
  padding: 0 2rem;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding: 0;
  }
`;

export const TextWrapper = styled('div')`
  max-width: 434px;
`;
