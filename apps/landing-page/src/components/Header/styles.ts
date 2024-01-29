import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';
import { fontColor, fontFamily, thirdColor } from '../../styles/styles';

export const HeaderSection = styled('header')`
  padding: 1rem 0 0 0;
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled('div')`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled('div')`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled('div')<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? '100%' : '110px')};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled('div')`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled('div')`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled('h5')`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.125rem;
  font-weight: 800;
  color: ${fontColor};
  font-family: ${fontFamily};
  transition: color 0.2s ease-in;
  margin: 0 0 0 2.5rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled('span')`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

export const Span = styled('span')`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: ${thirdColor};
  }
`;

export const LanguageSwitch = styled('div')<any>`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 1.1rem;
`;
