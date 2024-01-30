import styled from 'styled-components';
import { fontFamily, thirdColor } from '../../styles/styles';

export const MailingContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 0 100vmax ${thirdColor};
  clip-path: inset(0 -100vmax);
  background-color: ${thirdColor};
  width: 100%;
  text-align: center;
  color: #ffffff;
  @media only screen and (max-width: 1024px) {
  }
`;

export const Header = styled('h4')`
  font-size: 2.3rem;
  font-weight: 900;
  color: #ffffff;
  padding: 2rem 0;
`;

export const Content = styled('p')`
  color: #ffffff;
`;

export const FormGroup = styled('form')`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding-top: 1rem;

  @media only screen and (max-width: 1045px) {
    width: 50%;
    max-width: 100%;
  }
`;

export const Span = styled('span')<any>`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0 0.3rem 0.675rem;
`;

export const ButtonContainer = styled('div')`
  padding: 10px 5px 0 0;
  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

export const MailingListButton = styled('button')`
  background-color: transparent;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 900;
  line-height: 1.7875rem; /* 130% */
  color: #ffffff;
  font-family: ${fontFamily};

  width: 100%;
  border: 5px solid #edf3f5;
  padding: 0.625rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92);
  }

  @media only screen and (max-width: 414px) {
    font-size: 1rem;
  }
`;

export const CheckboxContainer = styled('div')`
  display: flex;
  padding-top: 1rem;
`;

export const CheckboxLabel = styled('label')`
  text-align: left;
  width: 900%;
  font-size: 0.5rem;
  font-weight: 100;
  color: #ffffff;
  padding-left: 0.5rem;
`;
