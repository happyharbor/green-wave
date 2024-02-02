import styled from 'styled-components';
import { fontFamily } from '../../styles/styles';

export const StyledContainer = styled('div')`
  display: inline-block;
  width: calc(100% - 2rem);

  @media only screen and (max-width: 414px) {
    width: 87%;
  }
`;

export const StyledTextArea = styled('textarea')`
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid #ededed;
  border-radius: 2rem;
  height: 5.5rem;

  color: #7a7a7a;
  font-family: ${fontFamily};
  font-size: 0.915625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Label = styled('label')`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`;
