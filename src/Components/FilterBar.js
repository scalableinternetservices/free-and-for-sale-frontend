import React, { Component } from 'react';
import { Router, Route, nk, browserHistory } from 'react-router';
import '../css/FilterBar.css';



class FilterBar extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      selectedFilterID : 0
    }

  }

  removeOldFilterActiveClass(id){
    document.getElementById(id).classList.remove('active');
  }

  addFilterActiveClass(id){
    document.getElementById(id).classList.add('active');
  }

  handleFilterClick(e){
    this.removeOldFilterActiveClass(this.state.selectedFilterID);
    this.setState({
      selectedFilterID : e.target.getAttribute('id')
    })
    this.addFilterActiveClass(e.target.getAttribute('id'));

  }

  render() {
    return (
      <div onClick={this.handleFilterClick.bind(this)}  className="filterContainer">
        <div id='0' className="filter active">Featured</div>
        <div id='1' className="filter">Furniture</div>
        <div id='2' className="filter">Office Supper</div>
        <div id='3' className="filter">Books</div>
        <div id='4' className="filter">Clothes</div>
        <div id='5' className="filter">More</div>
      </div>
    );
  }
}

export default FilterBar;
