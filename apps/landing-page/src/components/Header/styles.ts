import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontColor, fontFamily, primaryColor, secondaryColor } from '../../styles/styles';

export const HeaderSection = styled('header')`
  padding: 0.5rem 0 0 0;
  background-color: #ffffff;
  z-index: 100;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  @media only screen and (max-width: 414px) {
    padding: 0;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled('div')`
  display: inline-block;
  text-align: center;
`;

export const Burger = styled('div')`
  @media only screen and (max-width: 890px) {
    display: flex;
  }

  display: none;

  svg {
    fill: ${primaryColor};
  }
`;

export const NotHidden = styled('div')`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled('p')`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.3125rem;
  font-weight: 800;
  color: ${fontColor};
  font-family: ${fontFamily};
  transition: color 0.2s ease-in;
  margin: 0 0 0 2.5rem;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const Label = styled('span')`
  font-weight: 500;
  color: ${fontColor};
  font-family: ${fontFamily};
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Span = styled('span')`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: ${secondaryColor};
  }
`;

export const LanguageSwitch = styled('div')<{ onClick: React.MouseEventHandler }>`
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
  gap: 0.625rem;
`;

export const HeaderContainer = styled('div')`
  display: flex;
  height: 85px;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;

  @media only screen and (max-width: 414px) {
    padding: 0 1rem;
  }
`;

export const MenuItemContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding-top: 3rem;
    flex-direction: column;
    row-gap: 2.5rem;
  }
`;
