import styled from 'styled-components';
import { fontFamily, primaryColor, secondaryColor } from '../../styles/styles';
import { ButtonType } from '../types.ts';

const width = (type: ButtonType) => {
  switch (type) {
    case ButtonType.Small:
      return 12.125;
    case ButtonType.Normal:
    default:
      return 19.0625;
  }
};

const widthMobile = (type: ButtonType) => {
  switch (type) {
    case ButtonType.Small:
      return 9.25;
    case ButtonType.Normal:
    default:
      return 14;
  }
};

export const StyledButton = styled('button')<{ $color?: string; $type?: ButtonType; $length?: number }>`
  background: ${(p) => p.$color || primaryColor};

  font-size: 1.375rem;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 900;
  line-height: 1.7875rem; /* 130% */
  color: #ffffff;
  font-family: ${fontFamily};

  width: 100%;
  border: 0 solid #edf3f5;
  border-radius: 2rem;
  padding: 0.625rem;
  cursor: pointer;
  max-width: ${(p) => (p.$type ? `${width(p.$type)}rem` : '100%')};
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active {
    color: #fff;
    border: 1px solid ${secondaryColor};
    background-color: ${secondaryColor};
  }

  @media only screen and (max-width: 414px) {
    font-size: 1rem;
    max-width: ${(p) => (p.$type ? `${widthMobile(p.$type)}rem` : '100%')};
  }
`;

export const ButtonSection = styled('section')`
  display: flex;
  align-items: flex-start;
  gap: 2.25rem;

  @media only screen and (max-width: 414px) {
    flex-direction: column;
    gap: 1.75rem;
  }
`;
