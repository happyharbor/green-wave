import { StyledButton } from './styles';

export enum ButtonType {
  Normal = 'Normal',
  Small = 'Small',
}
export interface ButtonProps {
  color?: string;
  type?: ButtonType;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ color, type = ButtonType.Normal, children, onClick }: ButtonProps) => (
  <StyledButton $color={color} $type={type} onClick={onClick}>
    {children
      ?.toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')}
  </StyledButton>
);
