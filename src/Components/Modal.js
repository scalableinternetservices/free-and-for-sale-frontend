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
        //document.getElementsByClassName('modal-body')[0].parentNode.className += " blurContainer" ;
       //window.onwheel = (e)=>{e.preventDefault()};

    }
  }

  renderModal(){
    if (this.props.showModal)
    {
      return (
        <div className="modal-background ">
          <div className={"modal-container "+this.props.className}>
            <i onClick={this.props.onModalClose} className="fa fa-times fa-2x modal-closeIcon" aria-hidden="true"></i>
            {this.props.children}
          </div>
        </div>
      )
    }
    else
    {
        return(
          <div>
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
