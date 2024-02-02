import { Zoom } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import Input from '../../common/Input';
import { TranslationProps } from '../../common/types';
import validate from '../../common/utils/mailingListValidationRules';
import { useMailingListForm } from '../../common/utils/useMailingListForm';
import {
  ButtonContainer,
  CheckboxContainer,
  CheckboxLabel,
  Content,
  FormGroup,
  Header,
  MailingContainer,
  MailingListButton,
  Span,
} from './styles';
import { ValidationTypeProps } from './types';

const Contact = ({ t }: TranslationProps) => {
  const { values, errors, handleChange, handleSubmit } = useMailingListForm(t, validate) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <MailingContainer>
      <Header>{t('Follow Up')}</Header>
      <Content>{t('FollowUpContent')}</Content>
      <Content>{t("Don't Leave Me Out")}</Content>
      <FormGroup autoComplete="on" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={values.name || ''}
          onChange={handleChange}
          optional={false}
        />
        <ValidationType type="name" />
        <Input
          type="text"
          name="email"
          placeholder="Your Email"
          value={values.email || ''}
          onChange={handleChange}
          optional={false}
        />
        <ValidationType type="email" />
        <ButtonContainer>
          <MailingListButton name="submit">
            {t("Don't Leave Me Out")
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')}
          </MailingListButton>
        </ButtonContainer>
        <CheckboxContainer>
          <input
            type="checkbox"
            value={values.message || ''}
            name="consent"
            onChange={handleChange}
            checked={values.consent}
          />
          <CheckboxLabel>{t('Consent')}</CheckboxLabel>
        </CheckboxContainer>
        <ValidationType type="consent" />
      </FormGroup>
    </MailingContainer>
  );
};

export default withTranslation()(Contact);
