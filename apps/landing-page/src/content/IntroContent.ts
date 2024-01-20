import { gScrollTo } from '../common/utils/scroll';
import { ContentBlockPageProps } from '../components/ContentBlock/types';

export const introContent: ContentBlockPageProps = {
  title: 'Title',
  buttons: [
    {
      title: 'Portfolio',
      onClick: () => null,
    },
    {
      title: 'Book Me',
      color: '#fff',
      onClick: () => gScrollTo('bookme'),
    },
  ],
};
