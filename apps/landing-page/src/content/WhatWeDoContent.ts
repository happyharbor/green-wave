import { gScrollTo } from '../common/utils/scroll';
import { MiddleBlockPageProps } from '../components/MiddleBlock/types';

export const whatWeDoContent: MiddleBlockPageProps = {
  title: 'What we do',
  content: 'WhatWeDoContent',
  button: {
    title: 'Book Me',
    onClick: () => gScrollTo('bookme'),
  },
};
