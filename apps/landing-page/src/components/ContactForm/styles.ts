import styled from 'styled-components';
import { secondaryColor } from '../../styles/styles';

export const ContactContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 414px) {
    gap: 0;
  }
`;

export const FormGroup = styled('form')`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled('span')<any>`
  display: block;
  font-weight: 600;
  color: ${secondaryColor};
  height: 0.775rem;
  padding: 0 0 0.3rem 0.675rem;
`;

export const ButtonContainer = styled('div')`
  @media only screen and (max-width: 414px) {
  }
`;

export const FormGroupContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 407px;
`;
