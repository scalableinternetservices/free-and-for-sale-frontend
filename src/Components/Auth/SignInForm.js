// react/components/auth/SignInForm.js
var React          = require('react');
var Functions      = require('../../util/Functions.js');
var _              = require('lodash');
var $              = require('jquery');

var SignInForm =
  React.createClass({
    _handleInputChange: function(ev) {
      // Get a deep clone of the component's state before the input change.

      var nextState = _.cloneDeep(this.state);

      //Update the state of the component
      nextState[ev.target.name] = ev.target.value;

      // Update the component's state with the new state
      this.setState(nextState);
    },
    getInitialState: function() {
      return {
        email: '',
        password: ''
      };
    },
    _handleSignInClick: function(e) {
      console.log(Functions.getMetaContent("csrf-token"));
      $.ajax({
        method: "POST",
        url: "http://localhost:3000/users/sign_in.json",
        data: {
          user: {
            email: this.state.email,
            password: this.state.password
          },
          authenticity_token: Functions.getMetaContent("csrf-token")
        }
      })
      .done(function(data){
        //location.reload();
      }.bind(this));
    },
    render:function(){
      return (
          <form>
              <input type='email'
                name='email'
                placeholder='email'
                value={this.state.email}
                onChange={this._handleInputChange} />
              <input type='password'
                name='password'
                placeholder='password'
                value={this.state.password}
                onChange={this._handleInputChange} />
              <button type='button' onClick={this._handleSignInClick} >
                Login
              </button>
          </form>
      )
    }
  });
module.exports = SignInForm;
