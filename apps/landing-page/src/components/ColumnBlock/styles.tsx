import styled from 'styled-components';

export const ColumnBlockSection = styled('section')`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  //display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Title = styled('p')`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.75rem 0 0.75rem;
`;

export const Content = styled('p')`
  text-align: left;
  padding-left: 0.75rem;
  //padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled('div')`
  max-width: 470px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
