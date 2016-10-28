import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'



class CardsContainer extends Component {
  constructor (props)
  {
    super(props);

  }

  componentWillMount (){

  }

  render() {

    return (
      <div class="container">
      			<ul class="grid effect-1" id="grid">
      				<li><a href="http://drbl.in/fQdt"><img src="./src/images/12.png"/></a></li>
      				<li><a href="http://drbl.in/fHaa"><img src="./src/images/13.png"/></a></li>
      				<li><a href="http://drbl.in/gXMo"><img src="images/10.png"/></a></li>
      				<li><a href="http://drbl.in/gXMn"><img src="images/11.png"/></a></li>
      				<li><a href="http://drbl.in/fzYo"><img src="images/2.jpg"/></a></li>
      				<li><a href="http://drbl.in/fARU"><img src="images/14.png"/></a></li>
      				<li><a href="http://drbl.in/fWMM"><img src="images/1.jpg"/></a></li>
      				<li><a href="http://drbl.in/fWPV"><img src="images/3.jpg"/></a></li>
      				<li><a href="http://drbl.in/fWMT"><img src="images/4.jpg"/></a></li>
      			</ul>
      		</div>
    );
  }
}

export default CardsContainer;
