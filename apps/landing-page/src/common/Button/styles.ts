import styled from 'styled-components';
import { fontColor, fontFamily } from '../../styles/styles';

export const StyledButton = styled('button')<{ $color?: string; $fixedWidth?: boolean }>`
  background: ${(p) => p.$color || '#4AFFDC'};

  font-size: 1.375rem;
  font-style: normal;
  font-weight: 900;
  line-height: 1.7875rem; /* 130% */
  color: ${fontColor};
  font-family: ${fontFamily};

  width: 100%;
  border: 0 solid #edf3f5;
  border-radius: 2rem;
  padding: 0.625rem;
  cursor: pointer;
  max-width: ${(p) => (p.$fixedWidth ? '200px' : '100%')};
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92);
  }
`;

export const ButtonSection = styled('section')`
  display: flex;
  align-items: flex-start;
  gap: 2.25rem;
`;
