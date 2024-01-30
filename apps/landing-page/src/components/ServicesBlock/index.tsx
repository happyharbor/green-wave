import { Image as AntdImage } from 'antd';
import { withTranslation } from 'react-i18next';
import { CaptionContainer } from '../../common/Wave/styles';
import { PageBlockProps } from '../../common/types';
import { WaveStyle } from '../WhatWeDoBlock/styles';
import { Content, ContentWrapper, BlockSection } from './styles';

const ServicesBlock = ({ t, id }: PageBlockProps) => {
  return (
    <BlockSection id={id}>
      <ContentWrapper>
        <CaptionContainer>
          <WaveStyle>
            <AntdImage src="/img/svg/wave_vector.svg" preview={false} />
          </WaveStyle>
          <h2>{t('Services')}</h2>
        </CaptionContainer>
        <Content>{t('ServicesContent')}</Content>
      </ContentWrapper>
    </BlockSection>
  );
};

export default withTranslation()(ServicesBlock);
