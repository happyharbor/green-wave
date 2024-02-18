import { Zoom } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import { Checkbox } from '../../common/CheckBox';
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
  const { values, errors, handleChange, handleSubmit } = useMailingListForm(t, validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span errors={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <MailingContainer>
      <Header>{t('Follow Up')}</Header>
      <Content>{t('FollowUpContent')}</Content>
      <FormGroup autoComplete="on" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={values.name || ''}
          onChange={handleChange}
          optional={false}
          idPrefix={'mailing'}
        />
        <ValidationType type="name" />
        <Input
          type="text"
          name="email"
          placeholder="Your Email"
          value={values.email || ''}
          onChange={handleChange}
          optional={false}
          idPrefix={'mailing'}
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
          <Checkbox name="consent" onChange={handleChange} checked={values.consent} />
          <CheckboxLabel>{t('Consent')}</CheckboxLabel>
        </CheckboxContainer>
        <ValidationType type="consent" />
      </FormGroup>
    </MailingContainer>
  );
};

export default withTranslation()(Contact);
