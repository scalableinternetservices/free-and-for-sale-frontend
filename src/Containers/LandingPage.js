import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import { connect } from 'react-redux';

import Header from '../Components/header';
import FilterBar from '../Components/FilterBar';
import Modal from '../Components/Modal';
import CardsContainer from '../Components/CardsContainer';
import Banner from '../Components/Banner';
import {fetchProducts, filterProducts, clickedProductID} from '../Actions/productsAction';
import {logOut} from '../Actions/UserAction';
import SearchBar from '../Components/SearchBar';
import UploadProduct from './uploadProduct';
import ProductDetail from '../Components/ProductDetail';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SignUpModal from '../Components/Auth/SignUpForm';
import ProductDetailContainer from './ProductDetailContainer';
import '../css/landingPage.css';

/*
  is_signed_in : bool
*/

class LandingPage extends Component {
  constructor (props)
  {
    super(props);
    this.state={
      shrinkBanner : false,
      shrinked:false,
      showUploadProductModal:false,
      showSignUpModal : false,
      showDetailModal: false,
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch (fetchProducts());
    window.addEventListener('scroll', this.shrinkBanner.bind(this));
  }

  handleAddProductClick(){
    // browserHistory.push('/uploadproduct');
    if (this.props.user.is_signed_in){
      this.setState({
        showUploadProductModal : true
      })
    }
    else{
      this.setState({
        showSignUpModal : true
      })
    }
  }

  shrinkBanner( ){
    var currentHeight = window.pageYOffset;
    //if scroll down
    if (currentHeight >= 0){
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
    if (currentHeight == 0){
      this.setState ({
        shrinkBanner : false,
        shrinked : false
      })

    //expand the banner by remove the "collapse" class
      document.getElementsByClassName('title')[0] && (document.getElementsByClassName('title')[0].classList.remove('collapse'));
    }
  }

  handleProductModalClose(){
    this.setState({
      showUploadProductModal : false
    })
  }

  onModalClose(){
    this.setState({
      showSignUpModal : false
    })
  }

  onSignUpClick(){
    this.setState({
      showSignUpModal : true
    })
  }

  onSucessSignUp(){
    this.setState({
      showSignUpModal:false
    })
  }

  handleProductCardClick(){
    this.setState({
      showDetailModal : true,
    })
  }

  handleProductDetailClose(){
    this.setState({
      showDetailModal : false
    })
  }

  render() {
    return (
      <div>
        <ProductDetailContainer handleProductDetailClose={this.handleProductDetailClose.bind(this)} showDetailModal={this.state.showDetailModal} />
        <SignUpModal onSucessSignUp={this.onSucessSignUp.bind(this)} onModalClose={this.onModalClose.bind(this)}  showModal={this.props.user.is_signed_in ? false : this.state.showSignUpModal} className=""/>

        {this.state.showUploadProductModal ?
          (<ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionLeaveTimeout={1000}
            >
            <UploadProduct handleProductModalClose = {this.handleProductModalClose.bind(this)} />
          </ReactCSSTransitionGroup>)
          : "" }
        <div className={"headerAndProduct " + (this.state.showUploadProductModal || this.state.showDetailModal ? "headerAndProductBlur" : " ")}>
          <div className={this.state.shrinkBanner ?  "fixed" : ""}>
            <Banner  onLogOutClick = {this.props.signOut} is_signed_in={this.props.user.is_signed_in} onSignUpClick={this.onSignUpClick.bind(this)} className={this.state.shrinkBanner ?  "shrink" : ""} onSearchTermInput = {this.props.onSearchTermInput} />
            <FilterBar  />
          </div>

          <CardsContainer getClickedProductID = {this.props.getClickedProductID} handleProductCardClick={this.handleProductCardClick.bind(this)}  className={this.state.shrinkBanner? "moveDown" : ""}  products = {this.props.products} />
          <button onClick={this.handleAddProductClick.bind(this)} className="addProduct"><i className="fa fa-plus" aria-hidden="true"></i></button>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
   return {
     products : state.Products.products,
     user : state.Users
   }
}

function mapDispatchToProps(dispatch){
  return {
    onSearchTermInput: (searchTerm) => {
      dispatch(filterProducts(searchTerm))
    },
    signOut:()=>{
      dispatch(logOut());
    },
    getClickedProductID:(ProductID)=>{
      dispatch(clickedProductID(ProductID));
    },
    dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
