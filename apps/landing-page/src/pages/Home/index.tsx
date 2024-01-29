import { lazy } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import CallApp from '../../components/CalApp';
import { contactContent } from '../../content/ContactContent';
import { services } from '../../content/Services';
import { whoAreWe } from '../../content/WhoAreWe';

const Contact = lazy(() => import('../../components/ContactForm'));
const MiddleBlock = lazy(() => import('../../components/MiddleBlock'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));
const IntroBlock = lazy(() => import('../../components/IntroBlock'));
const WhatWeDoBlock = lazy(() => import('../../components/WhatWeDoBlock'));
const TrustedByBlock = lazy(() => import('../../components/TrustedByBlock'));
const WhyUsBlock = lazy(() => import('../../components/WhyUsBlock'));

const Home = ({ t }: WithTranslation) => {
  return (
    <Container>
      <ScrollToTop />
      <IntroBlock />
      <WhatWeDoBlock id={'whatWeDo'} />
      <TrustedByBlock />
      <WhyUsBlock id="whyGreenWave" />
      <ContentBlock
        type="left"
        title={services.title}
        content={services.content}
        buttons={services.buttons}
        icon="graphs.svg"
        id="services"
      />
      <MiddleBlock title={whoAreWe.title} content={whoAreWe.content} section={whoAreWe.section} id="whoAreWe" />
      <Contact title={contactContent.title} content={contactContent.content} id="contact" />
      <CallApp id="bookme" />
    </Container>
  );
};

export default withTranslation()(Home);
