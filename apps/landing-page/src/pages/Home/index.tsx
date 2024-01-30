import { lazy } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import CallApp from '../../components/CalApp';

const Contact = lazy(() => import('../../components/ContactForm'));
const Container = lazy(() => import('../../common/Container'));
const IntroBlock = lazy(() => import('../../components/IntroBlock'));
const WhatWeDoBlock = lazy(() => import('../../components/WhatWeDoBlock'));
const TrustedByBlock = lazy(() => import('../../components/TrustedByBlock'));
const WhyUsBlock = lazy(() => import('../../components/WhyUsBlock'));
const ServicesBlock = lazy(() => import('../../components/ServicesBlock'));
const WhoAreWeBlock = lazy(() => import('../../components/WhoAreWeBlock'));
const MailingListForm = lazy(() => import('../../components/MailingListForm'));

const Home = ({ t }: WithTranslation) => {
  return (
    <Container>
      <IntroBlock id={'intro'} />
      <WhatWeDoBlock id={'whatWeDo'} />
      <TrustedByBlock />
      <WhyUsBlock id="whyGreenWave" />
      <ServicesBlock id="services" />
      <WhoAreWeBlock id="whoAreWe" />
      <Contact id="contact" />
      <CallApp id="bookme" />
      <MailingListForm />
    </Container>
  );
};

export default withTranslation()(Home);
