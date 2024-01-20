import { gScrollTo } from '../common/utils/scroll';
import { MiddleBlockPageProps } from '../components/MiddleBlock/types';

export const whatWeDoContent: MiddleBlockPageProps = {
  title: 'What We Do',
  content: 'WhatWeDoContent',
  button: {
    title: 'Book Me',
    onClick: () => gScrollTo('bookme'),
  },
};
