import styled from 'styled-components';

export const StyledContainer = styled('div')<{ $border?: boolean }>`
  position: relative;
  width: 100%;
  max-width: 1230px;
  margin-right: auto;
  margin-left: auto;
  border-top: ${(p) => (p.$border ? '1px solid #CDD1D4' : '')};
  padding-bottom: 2.25rem;
  align-items: flex-start;
  gap: 9.75rem;
  flex-shrink: 0;
`;
