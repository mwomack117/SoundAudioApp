import React, { Component } from "react";
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
      username: null,
      userId: null
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }



  componentDidMount() {
  }


  updateUser(userObject) {
    this.setState(userObject);
  }



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
                <Home user={this.state.user} userId={this.state.userId} loggedIn={this.state.loggedIn} />
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
              render={() => <LoginForm getUser updateUser={this.updateUser} />}
            />
            <Route path="/signup" render={() => <Signup />} />
          </Switch>
        )}
      </div>
    );
  }
}

export default App;
