import { lazy, useEffect } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { getScroll } from '../../common/utils/getWindow';
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
  const stickyHeader = (event: any) => {
    const header = document.getElementById('header') as HTMLDivElement;
    const offsetFromTop = getScroll(event.target, true);
    if (offsetFromTop > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyHeader);
    return () => {
      window.removeEventListener('scroll', stickyHeader);
    };
  }, []);

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
