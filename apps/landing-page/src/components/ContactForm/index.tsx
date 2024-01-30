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
import { ButtonContainer, ContactContainer, FormGroup, Span } from './styles';
import { ValidationTypeProps } from './types';

const Contact = ({ id, t }: PageBlockProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate) as any;

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
      <Row>
        <Col lg={12} md={11} sm={24} xs={24}>
          <Block title={'Contact form'} content={t('ContactFormContent')} />
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <FormGroup autoComplete="off" onSubmit={handleSubmit}>
            <Col span={24}>
              <Input
                type="text"
                name="Name"
                placeholder="Your Name"
                value={values.name || ''}
                onChange={handleChange}
                optional={false}
              />
              <ValidationType type="name" />
            </Col>
            <Col span={24}>
              <Input
                type="text"
                name="Email"
                placeholder="Your Email"
                value={values.email || ''}
                onChange={handleChange}
                optional={false}
              />
              <ValidationType type="email" />
            </Col>
            <Col span={24}>
              <TextArea
                placeholder="Your Message"
                value={values.message || ''}
                name="Message"
                onChange={handleChange}
                optional={false}
              />
              <ValidationType type="message" />
            </Col>
            <ButtonContainer>
              <Button name="submit">{t('Submit')}</Button>
            </ButtonContainer>
          </FormGroup>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
