import { withTranslation } from 'react-i18next';
import { InputProps } from '../types';
import { Container, StyledInput } from './styles';

const Input = ({ name, placeholder, onChange, optional, t }: InputProps) => (
  <Container>
    <StyledInput placeholder={`${t(placeholder)}${optional ? '' : '*'}`} name={name} id={name} onChange={onChange} />
  </Container>
);

export default withTranslation()(Input);
