import { REQUEST_SIGNUP, RECEIVE_SIGNUP} from '../Actions/UserAction';
import { browserHistory } from 'react-router';

export default function Users (state = {}, action){
  switch (action.type) {
    case REQUEST_SIGNUP:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case RECEIVE_SIGNUP:
      browserHistory.push('/uploadproduct');
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
      })

    default:
      return state;
  }
}
