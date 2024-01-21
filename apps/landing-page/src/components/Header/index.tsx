import { Row, Col, Drawer } from 'antd';
import i18n from 'i18next';
import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '../../common/Button';
import Container from '../../common/Container';
import { SvgIcon } from '../../common/SvgIcon';
import { gScrollTo } from '../../common/utils/scroll';
import { LanguageSwitch, LanguageSwitchContainer } from '../Footer/styles';
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from './styles';

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      gScrollTo(id);
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo('whyGreenWave')}>
          <Span>{t('Why us')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('services')}>
          <Span>{t('Services')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('whoAreWe')}>
          <Span>{t('Who Are We')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('contact')}>
          <Span>{t('Contact')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall style={{ width: '180px' }} onClick={() => scrollTo('bookme')}>
          <Span>
            <Button>{t('Book Me')}</Button>
          </Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <Span>
            <LanguageSwitchContainer>
              <LanguageSwitch onClick={() => i18n.changeLanguage('en')}>
                <SvgIcon src="united-kingdom.svg" aria-label="homepage" width="48px" height="48px" />
              </LanguageSwitch>
              <LanguageSwitch onClick={() => i18n.changeLanguage('gr')}>
                <SvgIcon src="greece.svg" aria-label="homepage" width="48px" height="48px" />
              </LanguageSwitch>
            </LanguageSwitchContainer>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={onClose}>
          <Col style={{ marginBottom: '2.5rem' }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
