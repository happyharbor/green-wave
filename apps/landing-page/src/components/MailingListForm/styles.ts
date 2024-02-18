import styled from 'styled-components';
import { fontColor, fontFamily, primaryColor } from '../../styles/styles';

export const MailingContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 0 100vmax ${primaryColor};
  clip-path: inset(0 -100vmax);
  background-color: ${primaryColor};
  width: 100%;
  text-align: center;
  color: #ffffff;
  @media only screen and (max-width: 1024px) {
  }
`;

export const Header = styled('h2')`
  font-size: 3.75rem;
  margin: 0;
  font-weight: 900;
  color: #ffffff;
  padding: 4.375rem 0 2.6875rem 0;

  @media only screen and (max-width: 414px) {
    font-size: 3.333rem;
  }
`;

export const Content = styled('p')`
  color: #ffffff;
  font-weight: 800;
  font-size: 1.625rem;
  padding-bottom: 2.411875rem;

  @media only screen and (max-width: 414px) {
    font-size: 1.444rem;
  }
`;

export const FormGroup = styled('form')`
  display: flex;
  flex-direction: column;
  row-gap: 0.625rem;
  width: 400px;
  margin-bottom: 5.1875rem;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
  }

  @media only screen and (max-width: 414px) {
    width: 70%;
    max-width: 100%;
  }
`;

export const Span = styled('span')<{ errors: string | undefined }>`
  display: block;
  font-weight: 600;
  color: ${fontColor};
  //padding: 0 0 0.3rem 0.675rem;
`;

export const ButtonContainer = styled('div')`
  @media only screen and (max-width: 414px) {
  }
`;

export const MailingListButton = styled('button')`
  background-color: transparent;
  text-transform: uppercase;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 900;
  color: #ffffff;
  font-family: ${fontFamily};

  width: 100%;
  border: 5px solid #edf3f5;
  border-radius: 1.5rem;
  padding: 0.625rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 8px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active {
    border: 5px solid ${primaryColor};
    color: ${primaryColor};
  }

  @media only screen and (max-width: 414px) {
    font-size: 1rem;
  }
`;

export const CheckboxContainer = styled('label')`
  display: flex;
`;

export const CheckboxLabel = styled('p')`
  text-align: left;
  width: 100%;
  font-size: 0.7777rem;
  line-height: 0.8888rem;
  font-weight: 100;
  color: #ffffff;

  @media only screen and (max-width: 414px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;
