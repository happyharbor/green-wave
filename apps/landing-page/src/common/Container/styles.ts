import styled from 'styled-components';

export const StyledContainer = styled('div')<{ $border?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12.75rem;
  flex-shrink: 0;
`;

export const PageContainer = styled('div')<{ $border?: boolean }>`
  max-width: 1230px;
  margin-right: auto;
  margin-left: auto;
  border-top: ${(p) => (p.$border ? '1px solid #CDD1D4' : '')};
`;
