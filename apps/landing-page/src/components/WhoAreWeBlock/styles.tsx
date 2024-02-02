import styled from 'styled-components';
import { thirdColor } from '../../styles/styles';

export const BlockSection = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
  }
`;

export const ContentWrapper = styled('div')`
  text-align: center;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const UsSection = styled('div')`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4.25rem;
  row-gap: 3.62rem;
  justify-content: center;
`;

export const WhoAmIStyle = styled('div')`
  font-weight: 500;
  font-size: 1.375rem;
`;
export const Name = styled('div')`
  color: ${thirdColor};
  padding-top: 1.625rem;
`;
export const Title = styled('div')``;

export const Content = styled('p')`
  display: flex;
  align-items: flex-start;
  padding-bottom: 5rem;

  @media only screen and (max-width: 414px) {
    padding-bottom: 2rem;
  }
`;
