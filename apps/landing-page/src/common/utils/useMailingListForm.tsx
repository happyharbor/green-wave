import { notification } from 'antd';
import { useEffect, useState } from 'react';
import { WithTranslation } from 'react-i18next';
import { MailingListValidateErrors, MailingListValidateProps } from '../types';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  name: HTMLInputElement;
  consent: HTMLInputElement;
}
interface ContactFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const useMailingListForm = (
  t: WithTranslation['t'],
  validate: (values: MailingListValidateProps) => MailingListValidateErrors,
) => {
  const [values, setValues] = useState<MailingListValidateProps>({ name: '', email: '', consent: false });
  const [errors, setErrors] = useState<MailingListValidateErrors>({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification['success']({
      message: t('Success'),
      description: t('You have been added to the mailing list!'),
    });
  };

  const handleSubmit = (event: React.FormEvent<ContactFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));

    const templateParams = {
      name: event.currentTarget.elements.name.value,
      email: event.currentTarget.elements.email.value,
    };

    process.env.REACT_APP_BREVO_API_KEY &&
      fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'api-key': process.env.REACT_APP_BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: templateParams.email,
          attributes: {
            NAME: templateParams.name,
          },
          listIds: [2],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          setShouldSubmit(true);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues({ name: '', email: '', consent: false });
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value || (isHTMLInputElement(event.target) && event.target.checked),
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

const isHTMLInputElement = (element: HTMLInputElement | HTMLTextAreaElement): element is HTMLInputElement => {
  return 'value' in element;
};
