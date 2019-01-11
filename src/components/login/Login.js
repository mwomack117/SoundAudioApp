import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Sound from "../SoundContainer/SoundContainer";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          {/* <section class="form-div">
            <div class="valign-wrapper row login-box">
              <div class="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                <form autoComplete="new-password">
                  <div class="card-content">
                    <span class="card-title">Enter login details</span>
                    <div class="row">
                      <div class="input-field col s12">
                        <label for="text">User ID</label>
                        <input
                          type="text"
                          class="validate"
                          name="username"
                          id="userid"
                          autoComplete="off"
                        />
                      </div>
                      <div class="input-field col s12">
                        <label for="password">Password </label>
                        <input
                          type="password"
                          class="validate"
                          name="password"
                          id="password"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="card-action right-align">
                    <input
                      type="reset"
                      id="reset"
                      class="btn-flat grey-text waves-effect"
                    />
                    <input
                      type="submit"
                      class="btn teal waves-effect waves-light"
                      value="Login"
                    />
                  </div>
                </form>
              </div>
            </div>
          </section> */}

          <div className="form-div">
            <br />
            <h4 style={{ textAlign: "center" }}>Login</h4>
            <form className="">
              <div className="form-group">
                <div className="col-1 col-ml-auto">
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                </div>
                <div className="col-3 col-mr-auto">
                  <input
                    className="form-input"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-1 col-ml-auto">
                  <label className="form-label" htmlFor="password">
                    Password:{" "}
                  </label>
                </div>
                <div className="col-3 col-mr-auto">
                  <input
                    className="form-input"
                    placeholder="password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="col-7" />
                <button
                  className="btn btn-primary col-1 col-mr-auto"
                  onClick={this.handleSubmit}
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>{" "}
          </div>
          <Sound />
        </div>
      );
    }
  }
}

export default LoginForm;
