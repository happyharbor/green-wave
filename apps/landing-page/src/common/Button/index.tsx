import { ButtonProps, ButtonType } from '../types';
import { StyledButton } from './styles';

export const Button = ({ color, type = ButtonType.Normal, children, onClick }: ButtonProps) => (
  <StyledButton $color={color} $type={type} onClick={onClick}>
    {children
      ?.toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')}
  </StyledButton>
);
