import styled from 'styled-components';

export const StyledContainer = styled('div')<{ $border?: boolean }>`
  position: relative;
  width: 100%;
  max-width: 1230px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  border-top: ${(p) => (p.$border ? '1px solid #CDD1D4' : '')};
`;
