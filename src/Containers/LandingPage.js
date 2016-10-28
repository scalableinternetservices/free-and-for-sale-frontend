import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import Header from '../Components/header';
import FilterBar from '../Components/FilterBar';
import CardsContainer from '../Components/CardsContainer';



class LandingPage extends Component {
  constructor (props)
  {
    super(props);

  }

  render() {
    return (
      <div>
        <Header />
        <FilterBar />
        <CardsContainer />
      </div>
    );
  }
}

export default LandingPage;
