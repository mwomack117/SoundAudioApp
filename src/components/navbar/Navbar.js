import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";

const linkStyle = {
  marginLeft: "25px",
  fontSize: "1.4em"
};

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
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
      <React.Fragment>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              BrandLogo
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            {loggedIn ? (
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link
                    to="#"
                    className=""
                    style={linkStyle}
                    onClick={this.logout}
                  >
                    <span className="">logout</span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/" className="" style={linkStyle}>
                    <span className="">home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="" style={linkStyle}>
                    <span className="">login</span>
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="" style={linkStyle}>
                    <span className="">sign up</span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>

        {/* <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/login">Sign Up</Link>
          </li>
        </ul> */}
      </React.Fragment>
    );
  }
}

export default Navbar;

{
  /* <div class="">
          <img src="" alt="" />
          <div class="">
            <div class="">
              <Link to="/" className="">
                <span className="each-nav-item">home</span>
              </Link>
              <Link to="/login" className="">
                <span className="each-nav-item">login</span>
              </Link>
              <Link to="/signup" className="">
                <span className="each-nav-item">join</span>
              </Link>
            </div>
          </div>
        </div> */
}
