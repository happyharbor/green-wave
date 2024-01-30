import { Image as AntdImage } from 'antd';
import { withTranslation } from 'react-i18next';
import { CaptionContainer } from '../../common/Wave/styles';
import { PageBlockProps } from '../../common/types';
import { Content, ContentWrapper, WaveStyle, WhatWeDoBlockSection } from './styles';

const WhatWeDoBlock = ({ t }: PageBlockProps) => {
  return (
    <WhatWeDoBlockSection>
      <ContentWrapper>
        <CaptionContainer>
          <WaveStyle>
            <AntdImage src="/img/svg/wave_vector.svg" preview={false} />
          </WaveStyle>
          <h2>{t('What we do')}</h2>
        </CaptionContainer>
        <Content>{t('WhatWeDoContent')}</Content>
      </ContentWrapper>
    </WhatWeDoBlockSection>
  );
};

export default withTranslation()(WhatWeDoBlock);
