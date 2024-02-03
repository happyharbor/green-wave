import { Image as ImageAntd } from 'antd';
import { withTranslation } from 'react-i18next';
import { PageBlockProps, TranslationProps } from '../../common/types';
import { BlockSection, Content, ContentWrapper, Name, Title, UsSection, WhoAmIStyle } from './styles';

const WhoAreWeBlock = ({ t, id }: PageBlockProps) => {
  return (
    <BlockSection id={id}>
      <ContentWrapper>
        <h2>{t('Who Are We')}</h2>
        <Content>{t('WhoAreWeContent')}</Content>
        <UsSection>
          <WhoAmIContent image={'iliada.avif'} name={'Iliada'} title={'Marketing Expert'} t={t} />
          <WhoAmIContent image={'thodoris.avif'} name={'Thodoris'} title={'Marketing Expert'} t={t} />
          <WhoAmIContent image={'vasia.avif'} name={'Vasia'} title={'UX/UI Designer'} t={t} />
          <WhoAmIContent image={'giorgos.avif'} name={'Giorgos'} title={'Developer | IT Consultant'} t={t} />
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
        alt={image}
        width="200px"
      />
      <Name>{t(name)}</Name>
      <Title>{t(title)}</Title>
    </WhoAmIStyle>
  );
};

export default withTranslation()(WhoAreWeBlock);
