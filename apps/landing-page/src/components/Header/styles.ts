import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';
import { fontColor, fontFamily, thirdColor } from '../../styles/styles';

export const HeaderSection = styled('header')`
  padding: 0.5rem 0 0 0;
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
    padding-right: 1.5rem;
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

export const Menu = styled('p')`
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
    padding-left: 9rem;
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled('span')`
  padding-top: 0.9rem;
  font-weight: 500;
  color: ${fontColor};
  font-family: ${fontFamily};
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
