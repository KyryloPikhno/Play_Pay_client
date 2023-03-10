import React from "react";
import PropTypes from "prop-types";
import { NavLink as RouteNavLink } from "react-router-dom";

import {Container, Row, Nav, NavItem, NavLink} from "shards-react";

const MainFooter = ({ contained, menuItems, copyright }) => (
  <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
    <Container fluid={contained}>
      <Row>
        <Nav>
          {menuItems.map((item, idx) => (
            <NavItem key={idx}>
              <NavLink tag={(props) => <RouteNavLink {...props} />} to={item.to}>                {item.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
      </Row>
    </Container>
  </footer>
);

MainFooter.propTypes = {

  contained: PropTypes.bool,

  menuItems: PropTypes.array,

  copyright: PropTypes.string
};

MainFooter.defaultProps = {
  contained: false,
  copyright: "Play Pay © 2023",
  menuItems: [
    {
      title: "Home",
      to: "/home"
    },
    {
      title: "Table",
      to: "/table"
    }
  ]
};

export default MainFooter;
