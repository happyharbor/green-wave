import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { secondaryColor } from '../../styles/styles';

export const FooterSection = styled('footer')`
  background: rgb(241, 242, 243);
  padding: 2.5rem 0;
`;

export const Title = styled('h4')`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const Extra = styled('section')`
  background: rgb(241, 242, 243);
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const FooterContainer = styled('div')`
  width: 100%;
  display: flex;
`;

export const LogoContainer = styled('div')`
  display: flex;
  position: relative;
`;

export const SocialContainer = styled('div')`
  margin-left: auto;
  max-width: 310px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 414px) {
    width: 50%;
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: ${secondaryColor};
    }
  }
`;
