import { withTranslation } from 'react-i18next';
import { PageBlockProps } from '../../common/types';
import { Content, ContentWrapper, WhatWeDoBlockSection } from './styles';

const WhatWeDoBlock = ({ t }: PageBlockProps) => {
  return (
    <WhatWeDoBlockSection>
      <ContentWrapper>
        <h2>{t('What we do')}</h2>
        <Content>{t('WhatWeDoContent')}</Content>
      </ContentWrapper>
    </WhatWeDoBlockSection>
  );
};

export default withTranslation()(WhatWeDoBlock);
