import { Col, Row } from 'antd';
import { Zoom } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import { Button } from '../../common/Button';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import { PageBlockProps } from '../../common/types';
import { useForm } from '../../common/utils/useForm';
import validate from '../../common/utils/validationRules';
import Block from '../Block';
import { ButtonContainer, ContactContainer, FormGroup, FormGroupContainer, Span } from './styles';
import { ValidationTypeProps } from './types';

const Contact = ({ id, t }: PageBlockProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(t, validate) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Block title={'Contact form'} content={t('ContactFormContent')} />
      <FormGroup autoComplete="on" onSubmit={handleSubmit}>
        <FormGroupContainer>
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={values.name || ''}
              onChange={handleChange}
              optional={false}
            />
            <ValidationType type="name" />
          </div>
          <div>
            <Input
              type="text"
              name="email"
              placeholder="Your Email"
              value={values.email || ''}
              onChange={handleChange}
              optional={false}
            />
            <ValidationType type="email" />
          </div>
          <div>
            <TextArea
              placeholder="Your Message"
              value={values.message || ''}
              name="message"
              onChange={handleChange}
              optional={false}
            />
            <ValidationType type="message" />
          </div>
          <ButtonContainer>
            <Button name="submit">{t('Submit')}</Button>
          </ButtonContainer>
        </FormGroupContainer>
      </FormGroup>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
