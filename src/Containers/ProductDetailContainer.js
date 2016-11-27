import React, {Component} from 'react';
import {connect} from 'react-redux';

import ProductDetail from '../Components/ProductDetail';

class ProductDetailContainer extends Component{
  constructor(props){
    super(props);
  }

  getSelectedProduct(selectedProductID){
    if (this.props.products){
      for (var index = 0; index < this.props.products.length; index++){
        if (this.props.products[index].id == selectedProductID){
          return this.props.products[index];
        }
      }
    }
    return null;
  }

  render(){
    return(
      <ProductDetail
        selectedProduct = {this.getSelectedProduct(this.props.selectedProductID)}
        handleProductDetailClose={this.props.handleProductDetailClose}
        showDetailModal={this.props.showDetailModal} />)
  }
}

function mapStateToProps(state){
  return {
    products : state.Products.products,
    selectedProductID : state.Products.clickedProductID
  }

}

export default connect(mapStateToProps, null)(ProductDetailContainer);
