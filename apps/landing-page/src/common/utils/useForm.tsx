import { notification } from 'antd';
import { useEffect, useState } from 'react';
import { WithTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { ValidateProps } from '../types.ts';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  message: HTMLInputElement;
  name: HTMLInputElement;
}
interface ContactFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const useForm = (t: WithTranslation['t'], validate: (values: ValidateProps) => Partial<ValidateProps>) => {
  const [values, setValues] = useState<ValidateProps>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<ValidateProps>>({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification['success']({
      message: t('Success'),
      description: t('Your message has been sent!'),
    });
  };

  const handleSubmit = (event: React.FormEvent<ContactFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));

    const templateParams = {
      name: event.currentTarget.elements.name.value,
      email: event.currentTarget.elements.email.value,
      message: event.currentTarget.elements.message.value,
    };

    emailjs.send('service_755f4qy', 'template_u5vc9pe', templateParams, 'HDTQMDSDiRuxKdNee').then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setShouldSubmit(true);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues({ name: '', email: '', message: '' });
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: '' }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
