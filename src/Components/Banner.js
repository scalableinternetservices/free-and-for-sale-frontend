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

  render() {
    return (
      <div className={this.props.className+ " bannerContainer " }>
        <img className="backgroundImg" src="background1.jpg" />
        <div className="buttons">
          <SearchIcon searchTerm={this.state.searchTerm} handleInputChange={this.handleInputChange.bind(this)} />

          <div className="buttonGroup">
            <Button handleButtonClick = {this.handleSignUpClick.bind(this)} buttonName="Sign Up" />
            <Button className="signinButton" buttonName="Sign in"/>
          </div>
        </div>

        <div className="title">
          UCLA Marketplace
        </div>
      </div>
    );
  }
}

export default Banner;
