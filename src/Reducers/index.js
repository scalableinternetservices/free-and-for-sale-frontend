import { combineReducers } from 'redux';

import Users from './User';
import Products from './Products';

var rootUsers = combineReducers({Products, Users});

export default rootUsers;
