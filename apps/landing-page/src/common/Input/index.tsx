import { withTranslation } from 'react-i18next';
import { InputProps } from '../types';
import { Container, StyledInput } from './styles';

const Input = ({ name, placeholder, onChange, optional, value, t }: InputProps) => (
  <Container>
    <StyledInput
      placeholder={`${t(placeholder)}${optional ? '' : '*'}`}
      value={value}
      name={name}
      id={name}
      onChange={onChange}
    />
  </Container>
);

export default withTranslation()(Input);
