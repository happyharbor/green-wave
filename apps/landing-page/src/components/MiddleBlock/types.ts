import { ContentBlockButtonProps } from '../ContentBlock/types';

export interface SectionBlockProps {
  title: string;
  content: string;
  image: string;
}
export interface MiddleBlockProps extends MiddleBlockPageProps {
  id: string;
  t: any;
}

export interface MiddleBlockPageProps {
  title: string;
  content?: string;
  button?: ContentBlockButtonProps;
  section?: SectionBlockProps[];
}
