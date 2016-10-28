import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import Header from '../Components/header';
import FilterBar from '../Components/FilterBar';
import '../css/uploadProduct.css';
var $              = require('jquery');



class LandingPage extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      name:'',
      description:'',
      price: 0,
      imageURL :''
    };

  }

  handleImgInputChange(ev)
  {
    this.setState({
      imageURL : ev.target.value
    })
  }

  handleNameInputChange(ev)
  {
    console.log(ev.target.value);
    this.setState({
      name : ev.target.value
    })
  }

  handleDescriptionInputChange(ev)
  {
    this.setState({
      description : ev.target.value
    })
  }

  handleNumberInputChange(ev)
  {
    this.setState({
      number : ev.target.value
    })
  }

  productUpload()
  {

    $.ajax({
      beforeSend : function(xhr) {
        debugger
        if (sessionStorage.getItem('token')) {
            xhr.setRequestHeader("Accept", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            xhr.setRequestHeader("Authorization", "Bearer " +  sessionStorage.getItem('token'));
        }
      },
      crossDomain: true,
      method: "POST",
      // dataType: "json",
      url: "http://localhost:3000/api/v1/product",
      // dataType : 'jsonp',
      data: {
          name: this.state.name,
          description: this.state.description,
          price:this.state.price,
          imageURL:this.state.imageURL
      },

      // console.log(sessionStorage.getItem('token'), "====>"
    })
    .done(function(data){
      // location.reload()

    }.bind(this));
  }

  render() {
    return (
      <div>
        <Header />
        <FilterBar />
        <div className="inputGroup">
          <input
            type='string'
            name='name'
            placeholder='name'
            value = {this.state.name}
            onChange = {this.handleNameInputChange.bind(this)}
           />
          <input type='string'
           name='description'
           placeholder='description'
           value = {this.state.description}
           onChange = {this.handleDescriptionInputChange.bind(this)}
          />
          <input type='number'
            name='price'
            placeholder='price'
            value={this.state.price}
            onChange = {this.handleNumberInputChange.bind(this)}
           />
          <input type='string'
           name='img_url'
           placeholder='Image'
           value={this.state.imageURL}
           onChange = {this.handleImgInputChange.bind(this)}
          />

        <input type="button" onClick={this.productUpload.bind(this)} defaultValue="Post!"/>
        </div>
      </div>
    );
  }
}

export default LandingPage;
