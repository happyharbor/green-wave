import { Col, Row } from 'antd';
import { Zoom } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import { Button } from '../../common/Button';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import { useForm } from '../../common/utils/useForm';
import validate from '../../common/utils/validationRules';
import Block from '../Block';
import { ButtonContainer, ContactContainer, FormGroup, Span } from './styles';
import { ContactProps, ValidationTypeProps } from './types';

const Contact = ({ title, content, id, t }: ContactProps) => {
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
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Block title={title} content={content} />
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
              />
              <ValidationType type="email" />
            </Col>
            <Col span={24}>
              <TextArea
                placeholder="Your Message"
                value={values.message || ''}
                name="Message"
                onChange={handleChange}
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
