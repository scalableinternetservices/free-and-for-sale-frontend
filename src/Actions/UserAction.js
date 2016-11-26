import axios from 'axios';
import {serverAddress} from '../config';
export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const RECEIVE_SIGNUP = 'RECEIVE_SIGNUP';
export const LOG_OUT = 'LOG_OUT';
import { browserHistory } from 'react-router';



export function requestSignup() {
  return {
    type: REQUEST_SIGNUP
  }
}


export function receiveSignup() {
  return {
    type: RECEIVE_SIGNUP,
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
        dispatch(receiveSignup());
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
