import { lazy } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import CallApp from '../../components/CalApp';
import { contactContent } from '../../content/ContactContent';

const Contact = lazy(() => import('../../components/ContactForm'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const IntroBlock = lazy(() => import('../../components/IntroBlock'));
const WhatWeDoBlock = lazy(() => import('../../components/WhatWeDoBlock'));
const TrustedByBlock = lazy(() => import('../../components/TrustedByBlock'));
const WhyUsBlock = lazy(() => import('../../components/WhyUsBlock'));
const ServicesBlock = lazy(() => import('../../components/ServicesBlock'));
const WhoAreWeBlock = lazy(() => import('../../components/WhoAreWeBlock'));

const Home = ({ t }: WithTranslation) => {
  return (
    <Container>
      <ScrollToTop />
      <IntroBlock />
      <WhatWeDoBlock id={'whatWeDo'} />
      <TrustedByBlock />
      <WhyUsBlock id="whyGreenWave" />
      <ServicesBlock id="services" />
      <WhoAreWeBlock id="whoAreWe" />
      <Contact title={contactContent.title} content={contactContent.content} id="contact" />
      <CallApp id="bookme" />
    </Container>
  );
};

export default withTranslation()(Home);
