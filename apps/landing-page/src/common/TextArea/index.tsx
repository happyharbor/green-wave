import { withTranslation } from 'react-i18next';
import { InputProps } from '../types';
import { StyledContainer, StyledTextArea } from './styles';

const TextArea = ({ name, placeholder, value, onChange, t, optional }: InputProps) => (
  <StyledContainer>
    <StyledTextArea
      placeholder={`${t(placeholder)}${optional ? '' : '*'}`}
      id={name}
      value={value}
      name={name}
      onChange={onChange}
    />
  </StyledContainer>
);

export default withTranslation()(TextArea);
