import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import notification_white from '../assets/icons/notification-white.png';
import notification_black from '../assets/icons/notification-black.png';

const NavLinks = ({isAuthed, openModal, src}) => {
  return isAuthed
    ? <MainNav>
        <li><NavLink to="/">Home</NavLink></li>
        <li onClick={openModal}><Img src={src} /></li>
        <li><NavLink to="/logout">Logout</NavLink></li>
      </MainNav>
    : <MainNav>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/auth">Login</NavLink></li>
      </MainNav>
}

const Navbar = (props) => {

  console.log(props);

  const { openModal, isOpen, isAuthed } = props;

  const src = isOpen ? notification_white : notification_black;

  return (
    <Container>
      <Header>
        <Logo><StyledLink to="/">Notification</StyledLink></Logo>
        <NavLinks openModal={openModal} src={src} isAuthed={isAuthed} />
      </Header>
    </Container>
  )
};

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  position: fixed;
  top: 0;
  padding-top: .5em;
  padding-bottom: .5em;
  border: 1px solid #a2a2a2;
  top: 0;
  background-color: #f4f4f4;
  position: fixed;
  width: 100%;
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
`;

const MainNav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 5px;
  @media (min-width: 769px) {
    display: flex;
  }
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.45em;
`;

const Header = styled.header`
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    max-width: 1150px;
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #34495e;
  text-transform: uppercase;
  text-align: center;
  display: block;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  padding: 10px 15px;
  color: #34495e;
  text-transform: uppercase;
  text-align: center;
  display: block;
  text-decoration: none;
  font-size: .99em;
  &:hover {
    color: #718daa
  }
`;

const Img = styled.img`
  padding: 10px;
  height: 50px;
  width: 50px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  src: url(${props => props.src})
`;

export default Navbar;
