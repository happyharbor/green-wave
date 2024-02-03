import { Image as ImageAntd } from 'antd';
import { lazy } from 'react';
import { withTranslation } from 'react-i18next';
import { TranslationProps } from '../../common/types';
import { ContentImageStyle, ContentWrapper, TrustedByBlockSection } from './styles';

const Visible = lazy(() => import('../Visible'));

const TrustedByBlock = ({ t }: TranslationProps) => {
  return (
    <TrustedByBlockSection>
      <Visible height={124}>
        <h3>{t('Trusted by')}</h3>
        <ContentWrapper>
          <ContentImage image={'colore.webp'} width={6.8675} height={1.63875}></ContentImage>
          <ContentImage image={'beach_born.webp'} width={6.8675} height={2.74625}></ContentImage>
          <ContentImage image={'plantees.svg'} width={6.86419} height={1.29313}></ContentImage>
          <ContentImage image={'hasonlul.webp'} width={6.8675} height={1.63875}></ContentImage>
          <ContentImage image={'colore.webp'} width={6.8675} height={1.63875}></ContentImage>
          <ContentImage image={'mayas.webp'} width={6.8675} height={3.125}></ContentImage>
          <ContentImage image={'rekorek.webp'} width={5.49313} height={3.75}></ContentImage>
        </ContentWrapper>
      </Visible>
    </TrustedByBlockSection>
  );
};

interface ContentImageProps {
  image: string;
  width: number;
  height: number;
}
const ContentImage = ({ image, width, height }: ContentImageProps) => {
  return (
    <ContentImageStyle>
      <ImageAntd
        preview={false}
        src={`/img/images/trustedBy/${image}`}
        alt={image}
        width={`${width}rem`}
        height={`${height}rem`}
      />
    </ContentImageStyle>
  );
};

export default withTranslation()(TrustedByBlock);
