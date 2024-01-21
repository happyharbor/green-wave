import { WithTranslation } from 'react-i18next';

export interface ColumnBlockProps {
  id: string;
  t: WithTranslation['t'];
  title: string;
  columnBlocks: ColumnBlockPageProps[];
}

export interface ColumnBlockPageProps {
  Icon: React.ComponentType<React.ComponentProps<'svg'>> | React.ElementType;
  title: string;
  content?: string;
}
