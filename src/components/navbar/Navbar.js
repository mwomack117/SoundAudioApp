import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.logout = this.logout.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div>
        {loggedIn ? (
          <Navbar color="dark" light expand="md">
            <NavbarBrand className="text-white brand">
              Sound Audio App
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto nav" navbar>
                <div className="current-user">
                  <i className="fas fa-user" style={{ fontSize: 24 }} />
                  <p>{this.props.username}</p>
                </div>
                <NavItem>
                  <Link
                    to="#"
                    className="text-white links"
                    onClick={this.logout}
                  >
                    Log Out
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        ) : (
          <Navbar color="dark" light expand="md">
            <NavbarBrand className="text-white brand">
              Sound Audio App
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto nav" navbar>
                <NavItem>
                  <Link to="/login" className="text-white links">
                    Log In
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/signup" className="text-white links">
                    Sign Up
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        )}
      </div>
    );
  }
}

export default NavBar;
