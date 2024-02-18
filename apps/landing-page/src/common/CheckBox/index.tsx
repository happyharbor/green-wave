import { Container, StyledCheckbox } from './styles';

export interface CheckboxProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  checked: boolean;
}

export const Checkbox = ({ name, onChange, checked }: CheckboxProps) => (
  <Container>
    <StyledCheckbox type="checkbox" name={name} onChange={onChange} checked={checked}></StyledCheckbox>
  </Container>
);
