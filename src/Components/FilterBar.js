import React, { Component } from 'react';
import { Router, Route, nk, browserHistory } from 'react-router'



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
      <div style={style.ulStyle}>
        <div>Featured</div>
        <div>Furniture</div>
        <div>Office Supper</div>
        <div>Books</div>
        <div>Clothes</div>
      </div>
    );
  }
}

export default FilterBar;
