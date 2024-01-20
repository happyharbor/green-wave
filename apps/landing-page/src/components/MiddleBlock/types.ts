import { ContentBlockButtonProps } from '../ContentBlock/types';

export interface MiddleBlockProps extends MiddleBlockPageProps {
  t: any;
}

export interface MiddleBlockPageProps {
  title: string;
  content?: string;
  button: ContentBlockButtonProps;
}
