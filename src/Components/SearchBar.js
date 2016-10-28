import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'



class SearchBar extends Component {
  constructor (props)
  {
    super(props);

  }

  render() {
    return (
      <input placeholder="Try to search a product."/>
    );
  }
}

export default SearchBar;
