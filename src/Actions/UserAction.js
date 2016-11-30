import axios from 'axios';
import {serverAddress} from '../config';
export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const RECEIVE_SIGNUP = 'RECEIVE_SIGNUP';
export const DID_SIGNIN = 'DID_SIGNIN';
export const WILL_SIGNIN = 'WILL_SIGNIN';
export const LOG_OUT = 'LOG_OUT';
import { browserHistory } from 'react-router';



export function requestSignup() {
  return {
    type: REQUEST_SIGNUP
  }
}


export function receiveSignup(email) {
  return {
    type: RECEIVE_SIGNUP,
    email
  }
}


export function signup(email, password, callback) {
  return function (dispatch) {
    dispatch(requestSignup());
    axios.post(serverAddress+'api/v1/register_user', {
        email,
        password
      })
      .then(function (response) {
        console.log(response,"======>");
        sessionStorage.setItem('token', response['data']['data']['json']['auth_token']);
        console.log(sessionStorage.getItem('token'), "=====>");
        dispatch(receiveSignup(email));
        callback&&callback();
      })
      .catch(function (error) {
        console.log(error);
      });

  }
}

export function logOut(){
  return {
    type:LOG_OUT
  }
}

//SIGN_IN
export function signin(email, password, callback){
  return function (dispatch) {
    dispatch(will_signin());
    axios.post(serverAddress+'api/v1/auth_user', {
        email,
        password
      })
      .then(function (response) {
        console.log(response,"======>");
        sessionStorage.setItem('token', response['data']['data']['json']['auth_token']);
        console.log(sessionStorage.getItem('token'), "=====>");
        dispatch(did_signin(email));
        callback&&callback();
      })
      .catch(function (error) {
        console.log(error);
      });

  }
}

export function will_signin(){
  return {
    type : WILL_SIGNIN
  }
}

export function did_signin(email){
  return {
    type : DID_SIGNIN,
    email
  }
}
