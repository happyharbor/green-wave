import { useState, useEffect } from "react";
import { notification } from "antd";
import emailjs from "@emailjs/browser";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  message: HTMLInputElement
  name: HTMLInputElement
}
interface ContactFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = (event: React.FormEvent<ContactFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API

    const templateParams = {
      name: event.currentTarget.elements.name.value,
      email: event.currentTarget.elements.email.value,
      message: event.currentTarget.elements.message.value,
    };

    emailjs.send('service_5oqg10j', 'template_wxbgvux', templateParams, 'XCXE1g8cpfoIWxoIk')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        setShouldSubmit(true);
      }, error => {
        console.log('FAILED...', error);
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
