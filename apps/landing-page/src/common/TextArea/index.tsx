import { withTranslation } from 'react-i18next';
import { InputProps } from '../types';
import { StyledContainer, StyledTextArea } from './styles';

const TextArea = ({ name, placeholder, onChange, t, optional }: InputProps) => (
  <StyledContainer>
    <StyledTextArea placeholder={`${t(placeholder)}${optional ? '' : '*'}`} id={name} name={name} onChange={onChange} />
  </StyledContainer>
);

export default withTranslation()(TextArea);
