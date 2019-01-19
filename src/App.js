import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";

// components
import Signup from "./components/signup";
import LoginForm from "./components/login";
import NavBar from "./components/navbar";
import Home from "./components/home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

    // this.getUser = this.getUser.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  // componentDidMount() {
  //   this.getUser();
  // }

  updateUser(userObject) {
    this.setState(userObject);
  }

  // ??? getUser ???
  // getUser() {
  //   axios.get("/user/").then(response => {
  //     console.log("Get user response: ");
  //     console.log(response.data);
  //     if (response.data.user) {
  //       console.log("Get User: There is a user saved in the server session: ");

  //       this.setState({
  //         loggedIn: true,
  //         username: response.data.user.username,
  //         user: response.data.user
  //       });
  //     } else {
  //       console.log("Get user: no user");
  //       this.setState({
  //         loggedIn: false,
  //         username: null
  //       });
  //     }
  //   });
  // }

  render() {
    return (
      <div className="App">
        <NavBar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn && (
          <p style={{ marginTop: 15 }}>
            Join the party, {this.state.username}!
          </p>
        )}
        {/* Routes to different components */}
        {this.state.loggedIn ? (
          /**Logged in options */
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home user={this.state.user} loggedIn={this.state.loggedIn} />
              )}
            />
            <Route
              path="/login"
              render={() => <LoginForm updateUser={this.updateUser} />}
            />
            <Route path="/signup" render={() => <Signup />} />
          </Switch>
        ) : (
          /*Not Logged in options */
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Redirect to={{ pathname: "/login" }} />}
            />
            <Route
              path="/login"
              render={() => <LoginForm updateUser={this.updateUser} />}
            />
            <Route path="/signup" render={() => <Signup />} />
          </Switch>
        )}
      </div>
    );
  }
}

export default App;
