import React, { Component } from 'react';
import '../css/Banner.css';
import { Router, Route, Link, browserHistory } from 'react-router'
import Button from './Button';
import SearchIcon from './SearchIcon';



class Banner extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      searchTerm : '',
    }
  }

  handleSignUpClick(){
    browserHistory.push('/signup');
  }

  handleInputChange(e){
    this.setState({
      searchTerm : e.target.value
    })
    this.props.onSearchTermInput(e.target.value);
  }

  handleLogout(){
    this.props.onLogOutClick();
  }

  renderButtonGroup(){
    if (! this.props.is_signed_in)
    {
      return (
        <div className="buttonGroup">
          <Button handleButtonClick = {this.props.onSignUpClick} buttonName="Sign Up" />
          <Button className="signinButton" buttonName="Sign in"/>
        </div>
      )
    }

    else
    {
      return (
        <div className="buttonGroup">
          <Button className="signinButton" buttonName="Profile"/>
          <Button className="signinButton" buttonName="My Cart"/>
          <Button handleButtonClick={this.handleLogout.bind(this)}  className="signinButton" buttonName="Log Out"/>
        </div>
      )
    }
  }

  render() {
    return (
      <div className={this.props.className+ " bannerContainer " }>
        <img className="backgroundImg" src="background1.jpg" />
        <div className="buttons">
          <SearchIcon searchTerm={this.state.searchTerm} handleInputChange={this.handleInputChange.bind(this)} />
          {this.renderButtonGroup()}
        </div>

        <div className="title">
          UCLA Marketplace
        </div>
      </div>
    );
  }
}

export default Banner;
