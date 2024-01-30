import styled from 'styled-components';

export const ContactContainer = styled('div')`
  width: 100%;
  @media only screen and (max-width: 1024px) {
  }
`;

export const FormGroup = styled('form')`
  width: 100%;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled('span')<any>`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled('div')`
  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
