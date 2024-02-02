import { withTranslation } from 'react-i18next';
import { PageBlockProps } from '../../common/types';
import { BlockSection, Content, ContentWrapper } from './styles';

const ServicesBlock = ({ t, id }: PageBlockProps) => {
  return (
    <BlockSection id={id}>
      <ContentWrapper>
        <h2>{t('Services')}</h2>
        <Content>{t('ServicesContent')}</Content>
      </ContentWrapper>
    </BlockSection>
  );
};

export default withTranslation()(ServicesBlock);
