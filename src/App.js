import React, { Component } from 'react';
import SignUpForm from './Components/Auth/SignUpForm';
import SignInForm from './Components/Auth/SignInForm';
import SignOutLink from './Components/Auth/SignOutLink';
import LandingPage from './Containers/LandingPage';
import { Router, Route, Link, browserHistory } from 'react-router'
import logo from './logo.svg';
import './App.css';
var $            = require('jquery');


class App extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      signedIn : null
    }
  }

  componentWillMount() {
      $.ajax({
        method: "GET",
        url: "http://localhost:3000/auth/is_signed_in.json"
      })
      .done(function(data){
        this.setState({ signedIn: data.signed_in });
        console.log(data.signed_in);
      }.bind(this));
    }



    // <div className="App">
    //   <div className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h2>Welcome to React</h2>
    //   </div>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    //   <SignInForm />
    //   <SignOutLink />
    // </div>

  render() {
    return (
      <Router history={browserHistory}>

          <Route path="LandingPage" component={LandingPage}/>
          <Route path="signin" component={SignInForm}/>
          <Route path="signout" component={SignOutLink}/>
          <Route path="signup" component={SignUpForm}/>

      </Router>
    );
  }
}

export default App;
