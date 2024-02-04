import { ValidateProps } from '../types';

export default function validate(values: ValidateProps) {
  const errors: Partial<ValidateProps> = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.message) {
    errors.message = 'Message is required';
  }
  return errors;
}
