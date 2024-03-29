import { WithTranslation } from 'react-i18next';

export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}

export interface InputProps {
  name: string;
  placeholder: string;
  t: WithTranslation['t'];
  type?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  optional: boolean;
  idPrefix?: string;
}

export interface ValidateProps {
  name: string;
  message: string;
  email: string;
}

export interface MailingListValidateProps {
  name: string;
  consent: boolean;
  email: string;
}

export interface MailingListValidateErrors {
  name?: string;
  consent?: string;
  email?: string;
}

export interface TranslationProps {
  t: WithTranslation['t'];
}

export interface PageBlockProps extends TranslationProps {
  id: string;
}
