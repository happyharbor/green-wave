import { MailingListValidateErrors, MailingListValidateProps } from '../types';

export default (values: MailingListValidateProps) => {
  let errors: MailingListValidateErrors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.consent) {
    errors.consent = 'You must agree to the policy';
  }
  return errors;
};
