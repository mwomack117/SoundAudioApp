import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import API from "../../utils/API";
import AudioList from "../AudioList";
// import Sound from "../SoundContainer/SoundContainer";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback
} from "reactstrap";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null,
      audios: [],
      validate: {
        emailState: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handlePreview = async event => {
    const response = await API.loginSounds(event);
    console.log(response);

    this.setState({
      audios: response.data.results
    });
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  }

  handleSubmit(e) {
    e.preventDefault();
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
            username: response.data.username,
            userId: response.data._id
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
          <div className="login-page-div">
            <Container className="signInForm">
              <h2 className="text-center mb-3">
                <i className="mr-2 fas fa-sign-in-alt" />
                Log In
              </h2>
              <Form className="form">
                <Col>
                  <FormGroup>
                    <Label for="exampleusername">username</Label>
                    <Input
                      className="form-input"
                      type="username"
                      id="username"
                      name="username"
                      placeholder="username"
                      valid={this.state.validate.emailState === "has-success"}
                      invalid={this.state.validate.emailState === "has-danger"}
                      value={this.state.email}
                      onChange={e => {
                        this.validateEmail(e);
                        this.handleChange(e);
                      }}
                    />
                    <FormFeedback valid>
                      That's a valid looking email you've got there.
                    </FormFeedback>
                    <FormFeedback>Please input a valid email.</FormFeedback>
                  </FormGroup>
                </Col>

                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      className="form-input"
                      placeholder="password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                    <FormFeedback>Uh oh! Wrong password.</FormFeedback>
                  </FormGroup>
                </Col>
                <Button
                  className="btn"
                  color="primary"
                  onClick={this.handleSubmit}
                  type="submit"
                >
                  Submit
                </Button>
                <p className="mt-3 ml-1">
                  No Account? <a href="/signup"> Register</a>
                </p>
              </Form>
            </Container>
            {/* <Sound /> */}
          </div>
          <div className="login-content">
            <Button
              className="preview-button btn-success"
              onClick={this.handlePreview}
            >
              Click for a preview
            </Button>
            <AudioList className="list" audios={this.state.audios} />
          </div>
        </div>
      );
    }
  }
}

export default LoginForm;
