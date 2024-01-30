import styled from 'styled-components';
import { fontFamily } from '../../styles/styles';

export const StyledContainer = styled('div')`
  display: inline-block;
  width: 90%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;

  @media only screen and (max-width: 414px) {
    width: 87%;
  }
`;

export const StyledTextArea = styled('textarea')`
  background-color: #ffffff;
  border: 1px solid #ededed;
  border-radius: 2rem;
  height: 5.5rem;

  color: #7a7a7a;
  font-family: ${fontFamily};
  font-size: 0.93019rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Label = styled('label')`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`;
