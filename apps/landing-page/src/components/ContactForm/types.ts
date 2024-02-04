import { WithTranslation } from 'react-i18next';
import { ValidateProps } from '../../common/types.ts';

export interface ContactProps {
  title: string;
  content: string;
  id: string;
  t: WithTranslation['t'];
}

export interface ValidationTypeProps {
  type: keyof ValidateProps;
}
