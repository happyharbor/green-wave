import { Image as ImageAntd } from 'antd';
import { withTranslation } from 'react-i18next';
import { TranslationProps } from '../../common/types';
import { ContentImageStyle, ContentWrapper, TrustedByBlockSection } from './styles';

const TrustedByBlock = ({ t }: TranslationProps) => {
  return (
    <TrustedByBlockSection>
      <h3>{t('Trusted by')}</h3>
      <ContentWrapper>
        <ContentImage image={'colore.png'} width={6.8675} height={1.63875}></ContentImage>
        <ContentImage image={'beach_born.png'} width={6.8675} height={2.74625}></ContentImage>
        <ContentImage image={'plantees.svg'} width={6.86419} height={1.29313}></ContentImage>
        <ContentImage image={'hasonlul.png'} width={6.8675} height={1.63875}></ContentImage>
        <ContentImage image={'colore.png'} width={6.8675} height={1.63875}></ContentImage>
        <ContentImage image={'mayas.png'} width={6.8675} height={3.125}></ContentImage>
        <ContentImage image={'rekorek.png'} width={5.49313} height={3.75}></ContentImage>
      </ContentWrapper>
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
      <ImageAntd preview={false} src={`/img/images/trustedBy/${image}`} width={`${width}rem`} height={`${height}rem`} />
    </ContentImageStyle>
  );
};

export default withTranslation()(TrustedByBlock);