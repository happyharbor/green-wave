import { withTranslation } from 'react-i18next';
import { PageBlockProps } from '../../common/types';
import { Content, ContentWrapper, BlockSection } from './styles';

const ServicesBlock = ({ t }: PageBlockProps) => {
  return (
    <BlockSection>
      <ContentWrapper>
        <h2>{t('Services')}</h2>
        <Content>{t('ServicesContent')}</Content>
      </ContentWrapper>
    </BlockSection>
  );
};

export default withTranslation()(ServicesBlock);
