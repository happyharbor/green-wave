export interface ContentBlockPageProps {
  title: string;
  content?: string;
  buttons?: ContentBlockButtonProps[];
}

export interface ContentBlockProps extends ContentBlockPageProps {
  icon: string;
  section?: any;
  t?: any;
  id: string;
  type?: string;
}

export interface ContentBlockButtonProps {
  title: string;
  color?: string;
  onClick: () => void;
}
