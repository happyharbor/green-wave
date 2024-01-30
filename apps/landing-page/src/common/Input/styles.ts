import styled from 'styled-components';
import { fontFamily } from '../../styles/styles';

export const Container = styled('div')`
  display: inline-block;
  width: 90%;
  padding: 10px 5px 0 0;
`;

export const StyledInput = styled('input')`
  background-color: #ffffff;
  font-size: 0.875rem;
  border: 1px solid #ededed;
  border-radius: 2rem;

  color: #7a7a7a;
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
