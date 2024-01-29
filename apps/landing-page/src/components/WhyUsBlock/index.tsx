import { Building2, Cpu, Leaf, Presentation as PresentationIcon } from 'lucide-react';
import { withTranslation } from 'react-i18next';
import { PageBlockProps, TranslationProps } from '../../common/types';
import { ContentContainerStyle, ContentWrapper, BlockSection, Content } from './styles';

const WhyUsBlock = ({ t }: PageBlockProps) => {
  return (
    <BlockSection>
      <h2>{t('Why us')}</h2>
      <ContentWrapper>
        <ContentContainer
          t={t}
          Icon={Leaf}
          title="Opting for sustainability-driven solutions"
          content="OptingForSustainabilityContent"
        />
        <ContentContainer
          t={t}
          Icon={Cpu}
          title="Utilizing cutting-edge eco-friendly technologies"
          content="UtilizingCuttingEdgeContent"
        />
        <ContentContainer
          t={t}
          Icon={Building2}
          title="Demonstrated success with like-minded businesses"
          content="DemonstratedSuccessContent"
        />
        <ContentContainer
          t={t}
          Icon={PresentationIcon}
          title="Offering a holistic sustainability strategy"
          content="OfferingAHolisticContent"
        />
      </ContentWrapper>
    </BlockSection>
  );
};

interface WhyUsContentProps extends TranslationProps {
  Icon: React.ComponentType<React.ComponentProps<'svg'>> | React.ElementType;
  title: string;
  content: string;
}

const ContentContainer = ({ t, Icon, title, content }: WhyUsContentProps) => {
  return (
    <ContentContainerStyle>
      <Icon size={64} />
      <h4>{t(title)}</h4>
      <Content>{t(content)}</Content>
    </ContentContainerStyle>
  );
};

export default withTranslation()(WhyUsBlock);
