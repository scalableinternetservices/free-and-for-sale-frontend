//react/components/auth/SignUpForm.js
var React          = require('react');
var _              = require('lodash');
var Functions      = require('../../util/Functions.js');
var $              = require('jquery');


import { browserHistory } from 'react-router';
import {signup} from '../../Actions/UserAction';
import { connect } from 'react-redux';


var SignUpForm =
  React.createClass({
    _handleInputChange: function(ev) {
      // Get a deep clone of the component's state before the input change.
      var nextState = _.cloneDeep(this.state);

      //Update the state of the component
      nextState[ev.target.name] = ev.target.value;


      this.setState(nextState);
    },
    getInitialState: function() {
      return {
        email: '',
        password: '',
        password_confirmation: '',
        name: ''
      };
    },

    _handleRegistrationClick: function(e) {
      const { dispatch } = this.props;
      dispatch (signup(this.state.email, this.state.password));
    },

    render:function(){
      return (
          <form style={{display :'flex'}}>
            {
              // <input type='text'
              //   name='name'
              //   placeholder='name'
              //   value={this.state.name}
              //   onChange={this._handleInputChange} />
            }


              <input type='email'
                name='email'
                placeholder='email'
                value={this.state.email}
                onChange={this._handleInputChange}/>

              <input type='password'
                name='password'
                placeholder='password'
                value={this.state.password}
                onChange={this._handleInputChange} />
              {
              //   value={this.state.password_confirmation}
              //   onChange={this.handleInputChange} />
              }
            <input onClick={this._handleRegistrationClick} defaultValue="sign up"/>
          </form>
      )
    }
  });

export default connect(null, null)(SignUpForm);
