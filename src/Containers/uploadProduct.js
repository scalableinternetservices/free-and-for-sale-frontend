import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import Banner from '../Components/Banner';
import FilterBar from '../Components/FilterBar';
import Dropzone from 'react-dropzone';
import $ from 'jquery';
import request from 'superagent';
// import {base64} from 'base-64';
var base64 = require('base-64');
import '../css/uploadProduct.css';
import '../css/font-awesome/css/font-awesome.css';
import {serverAddress} from '../config';



class UploadProduct extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      Product : {},
    };
  }

  handleNameInputChange(ev)
  {
    console.log(ev.target.value);
    this.setState({
      Product : Object.assign({}, this.state.Product, {name : ev.target.value})
    })
  }

  handleDescriptionInputChange(ev)
  {
    this.setState({
      Product : Object.assign({}, this.state.Product, {description : ev.target.value})
    })
  }

  handlePriceInputChange(ev)
  {
    this.setState({
      Product : Object.assign({}, this.state.Product, {price : ev.target.value})
    })
  }

  onDrop (files) {
    this.setState({
      Product : Object.assign({}, this.state.Product, {image : files} )
    })
  }

  getBase64Image(imgElem) {
  // imgElem must be on the same server otherwise a cross-origin error will be thrown "SECURITY_ERR: DOM Exception 18"
    var canvas = document.createElement("canvas");
    canvas.width = imgElem.naturalWidth;
    canvas.height = imgElem.naturalHeight;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgElem, 0, 0);
    var dataURL = canvas.toDataURL("image/png", 0.5);
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  productUpload()
  {
    request.post(serverAddress+'api/v1/product')
      .type('json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Accept', 'application/x-www-form-urlencoded')
      .set('Authorization', "Bearer " +  sessionStorage.getItem('token'))
      .send('{"name":"tj","description":"tobi", "price":"123"}')
      .attach(this.state.Product.image[0].name, this.state.Product.image[0])
      .end(function(){
        console.log("succeed!");
      })
    $.ajax({
      beforeSend : function(xhr) {
        // debugger
        if (sessionStorage.getItem('token')) {
            xhr.setRequestHeader("Accept", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            xhr.setRequestHeader("Authorization", "Bearer " +  sessionStorage.getItem('token'));
        }
      },
      crossDomain: true,
      method: "POST",
      url: serverAddress+"api/v1/product",
      data: {
          name: this.state.Product.name,
          description: this.state.Product.description,
          price:this.state.Product.price,
          image:JSON.stringify(this.getBase64Image(document.getElementById('uploadedImg')))
      },
    })
    .done(function(data){
      browserHistory.push('/landingPage');
    })
    .catch (function(error){
      console.log("error uploading the product error:", error);
    }.bind(this));
  }

  renderImgPreview(){
    if (this.state.Product.image == null)
    {
      return (
        <i className="fa fa-plus fa-3x plusIcon" aria-hidden="true"></i>
      )
    }
    else
    {
      return (
        <img id="uploadedImg" style={{width:"70px", height:"70px"}} src={this.state.Product.image[0].preview} />
      )
    }
  }

  render() {
    return (
      <div>
        <Banner  />
        {/*<Header />*/}
        <FilterBar />
        <div className="postProduct">
          <div className="productInfo">

            <div className="productPhotos">
              <div className="header">
                <div className="headerText"><h4>Item Photos.</h4></div>
                <i className="fa fa-times fa-lg closeIcon" aria-hidden="true"></i>
              </div>
              <div className="photos">
                <Dropzone className="addPhoto" onDrop={this.onDrop.bind(this)}>
                    {this.renderImgPreview()}
                </Dropzone>
              </div>
            </div>

            <div className="inputs">

              <input
                className="input"
                type='string'
                name='name'
                placeholder='Write the name of your listing'
                value = {this.state.Product.name}
                onChange = {this.handleNameInputChange.bind(this)}
               />
              <input
               className="input"
               type='string'
               name='description'
               placeholder='Typr or select tags of your listing'
               value = {this.state.Product.description}
               onChange = {this.handleDescriptionInputChange.bind(this)}
              />
              <input
                className="input"
                type='number'
                name='price'
                placeholder='Price'
                value={this.state.Product.price}
                onChange = {this.handlePriceInputChange.bind(this)}
               />
            </div>

            <div className="postButton" onClick={this.productUpload.bind(this)}>
              Post !
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default UploadProduct;
