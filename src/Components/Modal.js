import React, {Component} from 'react';
import "../css/Modal.css";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Modal extends Component{
  constructor(props){
    super (props);
  }

  componentWillUpdate(nextProps, nextState)
  {
    if (nextProps.showModal)
    {
      // document.getElementsByClassName('modal-body')[0].className = "modal-body modal-background"
        console.log(document.getElementsByClassName('modal-body')[0].parentNode.parentNode.className += " blurContainer" );

    }
  }

  renderModal(){
    if (this.props.showModal)
    {
      return (
        <div className="modal-background">
          <i className="fa fa-4x fa-times close-icon" aria-hidden="true"></i>
        </div>
      )
    }
    else
    {
        return(
          <div className="modal-body modal-default">
            <i className="fa fa-4x fa-times close-icon" aria-hidden="true"></i>
          </div>
        )
    }
  }


  render(){
    return(
      this.renderModal()
    )
  }
}

export default Modal;
