import { lazy } from 'react';
import { withTranslation } from 'react-i18next';

const Contact = lazy(() => import('../../components/ContactForm'));
const Container = lazy(() => import('../../common/Container'));
const IntroBlock = lazy(() => import('../../components/IntroBlock'));
const WhatWeDoBlock = lazy(() => import('../../components/WhatWeDoBlock'));
const WhyUsBlock = lazy(() => import('../../components/WhyUsBlock'));
const ServicesBlock = lazy(() => import('../../components/ServicesBlock'));
const WhoAreWeBlock = lazy(() => import('../../components/WhoAreWeBlock'));
const CalApp = lazy(() => import('../../components/CalApp'));
const MailingListForm = lazy(() => import('../../components/MailingListForm'));

const Home = () => {
  return (
    <Container>
      <IntroBlock id={'intro'} />
      <WhatWeDoBlock id={'whatWeDo'} />
      <WhyUsBlock id="whyGreenWave" />
      <ServicesBlock id="services" />
      <WhoAreWeBlock id="whoAreWe" />
      <Contact id="contact" />
      <CalApp id="bookme" />
      <MailingListForm />
    </Container>
  );
};

export default withTranslation()(Home);
