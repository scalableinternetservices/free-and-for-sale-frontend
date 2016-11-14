import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import Header from '../Components/header';
import FilterBar from '../Components/FilterBar';
import CardsContainer from '../Components/CardsContainer';
import Banner from '../Components/Banner';
import { connect } from 'react-redux';
import {fetchProducts, filterProducts} from '../Actions/productsAction';
import SearchBar from '../Components/SearchBar';
import '../css/landingPage.css';


class LandingPage extends Component {
  constructor (props)
  {
    super(props);
    this.state={
      shrinkBanner : false,
      shrinked:false
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch (fetchProducts());
    window.addEventListener('scroll', this.shrinkBanner.bind(this));
  }

  handleAddProductClick(){
    browserHistory.push('/uploadproduct');
  }

  shrinkBanner( ){
    var currentHeight = window.pageYOffset;
    //if scroll down
    if (currentHeight >= 0)
    {
      this.setState ({
        shrinkBanner : true
      })
      //collapse banner by adding a css class "collapse" to minimize the height
      !this.state.shrinked && document.getElementsByClassName('title')[0] && (document.getElementsByClassName('title')[0].className += ' collapse');
      //set the flag shrinked to indicate the banner is shrinked.
      this.setState({
        shrinked:true
      })
    }
    //if scroll back to the top
    if (currentHeight == 0)
    {
      this.setState ({
        shrinkBanner : false,
        shrinked : false
      })

    //expand the banner by remove the "collapse" class
      document.getElementsByClassName('title')[0] && (document.getElementsByClassName('title')[0].classList.remove('collapse'));
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.shrinkBanner ?  "fixed" : ""}>
          <Banner className={this.state.shrinkBanner ?  "shrink" : ""} onSearchTermInput = {this.props.onSearchTermInput} />
          <FilterBar  />
        </div>

        <CardsContainer className={this.state.shrinkBanner? "moveDown" : ""}  products = {this.props.products} />
        <button onClick={this.handleAddProductClick.bind(this)} className="addProduct"><i className="fa fa-plus" aria-hidden="true"></i></button>
      </div>
    );
  }
}


function mapStateToProps(state) {

   return {
     products : state.Products.products
   }
}

function mapDispatchToProps(dispatch){
  return {
    onSearchTermInput: (searchTerm) => {
      console.log("**************");
      dispatch(filterProducts(searchTerm))
    },

    dispatch

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
