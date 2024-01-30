import { Image as ImageAntd } from 'antd';
import { withTranslation } from 'react-i18next';
import { Caption, CaptionContainer } from '../../common/Wave/styles';
import { PageBlockProps, TranslationProps } from '../../common/types';
import { WaveStyle } from '../WhyUsBlock/styles';
import { BlockSection, Content, ContentWrapper, Name, Title, UsSection, WhoAmIStyle } from './styles';

const WhoAreWeBlock = ({ t, id }: PageBlockProps) => {
  return (
    <BlockSection id={id}>
      <ContentWrapper>
        <Caption>
          <CaptionContainer>
            <WaveStyle>
              <ImageAntd src="/img/svg/wave_vector.svg" preview={false} />
            </WaveStyle>
            <h2>{t('Who Are We')}</h2>
          </CaptionContainer>
        </Caption>
        <Content>{t('WhoAreWeContent')}</Content>
        <UsSection>
          <WhoAmIContent image={'iliada.jpg'} name={'Iliada'} title={'Marketing Expert'} t={t} />
          <WhoAmIContent image={'thodoris.jpg'} name={'Thodoris'} title={'Marketing Expert'} t={t} />
          <WhoAmIContent image={'vasia.jpg'} name={'Vasia'} title={'UX/UI Designer'} t={t} />
          <WhoAmIContent image={'giorgos.jpg'} name={'Giorgos'} title={'Developer | IT Consultant'} t={t} />
        </UsSection>
      </ContentWrapper>
    </BlockSection>
  );
};

interface WhoAmIContentProps extends TranslationProps {
  image: string;
  name: string;
  title: string;
}
const WhoAmIContent = ({ t, image, name, title }: WhoAmIContentProps) => {
  return (
    <WhoAmIStyle>
      <ImageAntd
        style={{ borderRadius: '50%' }}
        preview={false}
        src={`/img/images/whoAreWe/${image}`}
        width="200px"
        height="200px"
      />
      <Name>{t(name)}</Name>
      <Title>{t(title)}</Title>
    </WhoAmIStyle>
  );
};

export default withTranslation()(WhoAreWeBlock);
