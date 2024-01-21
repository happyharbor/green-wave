import { Row } from 'antd';
import { withTranslation } from 'react-i18next';
import Container from '../../common/Container';
import { SvgIcon } from '../../common/SvgIcon';
import { Extra, FooterContainer, LogoContainer, NavLink } from './styles';

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" key={src} aria-label={src}>
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row justify="space-between" align="middle" style={{ paddingTop: '3rem' }}>
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon src="logo.svg" aria-label="homepage" width="101px" height="64px" />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink href="https://www.instagram.com/" src="instagram.svg" />
              <SocialLink href="https://twitter.com/" src="twitter.svg" />
              <SocialLink href="https://www.linkedin.com/" src="linkedin.svg" />
              <SocialLink href="https://www.tiktok.com/" src="tiktok.svg" />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
