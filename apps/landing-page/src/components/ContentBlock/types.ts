export interface ContentBlockPageProps {
  title: string;
  content?: string;
  buttons?: ContentBlockButtonProps[];
  section?: { title: string; content: string }[];
}

export interface ContentBlockProps extends ContentBlockPageProps {
  icon: string;
  t?: any;
  id: string;
  type?: string;
}

export interface ContentBlockButtonProps {
  title: string;
  color?: string;
  onClick: () => void;
}
