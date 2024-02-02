import { Drawer } from 'antd';
import i18n from 'i18next';
import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { PageContainer } from '../../common/Container/styles';
import { SvgIcon } from '../../common/SvgIcon';
import { gScrollTo } from '../../common/utils/scroll';
import {
  Burger,
  CustomNavLinkSmall,
  HeaderContainer,
  HeaderSection,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
  LogoContainer,
  Menu,
  NotHidden,
  Outline,
  Span,
} from './styles';

const Header = ({ t, id }: any) => {
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
        <CustomNavLinkSmall onClick={() => scrollTo('intro')}>
          <Span>{t('Home')}</Span>
        </CustomNavLinkSmall>
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
    <HeaderSection id={id}>
      <PageContainer>
        <HeaderContainer>
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="85px" height="49.21px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </HeaderContainer>
        <Drawer closable={false} open={visible} onClose={onClose}>
          <Label onClick={onClose}>
            <Menu>{t('Menu')}</Menu>
            <Outline />
          </Label>
          <MenuItem />
        </Drawer>
      </PageContainer>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
