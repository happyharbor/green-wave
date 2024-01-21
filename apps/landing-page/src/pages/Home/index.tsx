import { lazy } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import CallApp from '../../components/CalApp';
import { contactContent } from '../../content/ContactContent';
import { introContent } from '../../content/IntroContent';
import { services } from '../../content/Services';
import { whatWeDoContent } from '../../content/WhatWeDoContent';
import { whoAreWe } from '../../content/WhoAreWe';
import { whyUs } from '../../content/WhyUs';

const Contact = lazy(() => import('../../components/ContactForm'));
const MiddleBlock = lazy(() => import('../../components/MiddleBlock'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));
const ColumnBlock = lazy(() => import('../../components/ColumnBlock'));

const Home = ({ t }: WithTranslation) => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={introContent.title}
        buttons={introContent.buttons}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={whatWeDoContent.title}
        content={whatWeDoContent.content}
        button={whatWeDoContent.button}
        id="whatWeDo"
      />
      <ColumnBlock columnBlocks={whyUs} title={'Why us'} id="whyGreenWave" />
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
