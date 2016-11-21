import axios from 'axios';
import {serverAddress} from '../config';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const Will_Upload_Product = 'Will_Upload_Product';
export const Upload_Product = 'Upload_Product';
export const Did_Upload_Product = 'Did_Upload_Product';


export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS
  }
}


export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
}

export function filterProducts (searchTerm) {
  return {
    type : FILTER_PRODUCTS,
    searchTerm
  }
}


export function fetchProducts( ) {
  return function (dispatch) {
    dispatch(requestProducts())
      axios.get(serverAddress+'api/v1/products')
        .then((response)=>{
          dispatch(receiveProducts(response.data.data.products));
        })
  }
}


export function WillUploadProduct( ){
  return {
    type : Will_Upload_Product
  }
}

export function UploadProduct( ){
  return function (dispatch){
    dispatch(WillUploadProduct);

  }
}

export function DidUploadProduct( ){
  return {
    type : Did_Upload_Product
  }
}
