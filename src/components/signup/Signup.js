import React, { Component } from "react";
import axios from "axios";
import "./Signup.css";

import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  FormFeedback
} from "reactstrap";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      password: "",
      password2: "",
      errorMsg: "",
      redirectTo: null,
      modal: false,
      validate: {
        emailState: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

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

  toggleError() {
    this.setState({ errorMsg: "" });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleSubmit(e) {
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    e.preventDefault();

    this.checkform();
  }

  checkform = () => {
    console.log("this ran");
    if (
      this.state.password !== "" &&
      this.state.password === this.state.password2
    ) {
      if (this.state.password.length < 6) {
        this.setState({
          errorMsg: "Error: Password must contain at least six characters!"
        });
        setTimeout(() => {
          this.toggleError();
        }, 3000);
        return false;
      }
    } else {
      this.setState({
        errorMsg:
          "Error: Please check that you've entered and confirmed your password!"
      });
      setTimeout(() => {
        this.toggleError();
      }, 3000);
      return false;
    }

    this.toggle();
    //request to server to add a new email/password
    axios
      .post("/user/", {
        name: this.state.name,
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          this.setState({
            //redirect to login page
            // redirectTo: "/login"
            redirect: true
          });
        } else {
          console.log("username already taken");
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  };

  render() {
    return (
      <div className="inline">
        <Button
          className="form-toggle"
          outline
          color="warning"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
          size="lg"
        >
          Register
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Container className="signUpForm">
            <h2 className="text-center mb-3">
              <i className="mr-2 fas fa-user-plus" />
              Sign Up
              <button
                type="button"
                onClick={this.toggle}
                className="close"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </h2>
            <Form>
              <Col>
                <FormGroup>
                  <Label for="exampleName">Name</Label>
                  <Input
                    className="form-input"
                    placeholder="Name"
                    type="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    className="form-input"
                    type="email"
                    id="username"
                    name="username"
                    placeholder="username"
                    valid={this.state.validate.emailState === "has-success"}
                    invalid={this.state.validate.emailState === "has-danger"}
                    value={this.state.username}
                    onChange={e => {
                      this.validateEmail(e);
                      this.handleChange(e);
                    }}
                  />
                  <FormFeedback valid>
                    That's a valid looking email you've got there.
                  </FormFeedback>
                  <FormFeedback>
                    Uh oh! Please input a valid email.
                  </FormFeedback>
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
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Confirm</Label>
                  <Input
                    className="form-input"
                    placeholder="Confrim Password"
                    type="password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <p className="text-danger">{this.state.errorMsg}</p>
              <Button
                className="btn"
                color="primary"
                onClick={this.handleSubmit}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Container>
        </Modal>
      </div>
    );
  }
}

export default Signup;
