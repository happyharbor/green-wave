import { withTranslation } from 'react-i18next';
import Container from '../../common/Container';
import { SvgIcon } from '../../common/SvgIcon';
import { Extra, FooterContainer, LogoContainer, NavLink, SocialContainer } from './styles';

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {
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
          <FooterContainer>
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon src="logo.svg" aria-label="homepage" width="101px" height="64px" />
              </LogoContainer>
            </NavLink>
            <SocialContainer>
              <SocialLink href="https://www.instagram.com/" src="instagram.svg" />
              <SocialLink href="https://www.linkedin.com/" src="linkedin.svg" />
            </SocialContainer>
          </FooterContainer>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
