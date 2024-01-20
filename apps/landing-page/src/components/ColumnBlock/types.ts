export interface ColumnBlockProps {
  t: any;
  title: string;
  columnBlocks: ColumnBlockPageProps[];
}

export interface ColumnBlockPageProps {
  Icon: React.ComponentType<React.ComponentProps<'svg'>> | React.ElementType;
  title: string;
  content?: string;
}
