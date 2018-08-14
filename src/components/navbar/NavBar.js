import React from 'react';
import logo from '../../logo.svg';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar default collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo"/>
            Cheecko
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} componentClass={Link} href="/" to="/">
            Home
          </NavItem>
          <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
            About
          </NavItem>
          <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
            News
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;