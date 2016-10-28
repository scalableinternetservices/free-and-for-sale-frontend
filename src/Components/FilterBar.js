import React, { Component } from 'react';
import { Router, Route, nk, browserHistory } from 'react-router';
import '../css/FilterBar.css';



class FilterBar extends Component {
  constructor (props)
  {
    super(props);

  }

  render() {
    var style = {
      ulStyle : {
        display : 'flex',

      }
    }
    style.ulStyle["justify-content"] = 'space-around';
    return (
      <div className="filterContainer" style={style.ulStyle}>
        <div className="filter">Featured</div>
        <div className="filter">Furniture</div>
        <div className="filter active">Office Supper</div>
        <div className="filter">Books</div>
        <div className="filter">Clothes</div>
        <div className="filter">More</div>
      </div>
    );
  }
}

export default FilterBar;
