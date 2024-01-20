import { lazy } from 'react';
import { withTranslation } from 'react-i18next';
import CallApp from '../../components/CalApp';
import AboutContent from '../../content/AboutContent.json';
import ContactContent from '../../content/ContactContent.json';
import { introContent } from '../../content/IntroContent';
import { whatWeDoContent } from '../../content/MiddleBlockContent';
import MissionContent from '../../content/MissionContent.json';
import ProductContent from '../../content/ProductContent.json';
import { whyUs } from '../../content/whyUs';

const Contact = lazy(() => import('../../components/ContactForm'));
const MiddleBlock = lazy(() => import('../../components/MiddleBlock'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));
const ColumnBlock = lazy(() => import('../../components/ColumnBlock'));

const Home = ({ t }: any) => {
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
      <MiddleBlock title={whatWeDoContent.title} content={whatWeDoContent.content} button={whatWeDoContent.button} />
      <ColumnBlock columnBlocks={whyUs} title={'Why Green Wave'} />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact title={ContactContent.title} content={ContactContent.text} id="contact" />
      <CallApp id="bookme" />
    </Container>
  );
};

export default withTranslation()(Home);
