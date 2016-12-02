import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/Alert.css';

//this.props.type: warning error success
//this.props.content:
//this.props.shouldOpen:
class Alert extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.shouldShowAlert();
  }

  shouldShowAlert(){
    if(this.props.shouldOpen){
      return (
        <ReactCSSTransitionGroup
          className="Alert"
          transitionName="Alert"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={1000}
          >
          <div className={"Alert-container "+this.props.type}>
            <div className="Alert-container-content">
              {this.props.content? this.props.content : "There is no messages to show now." }
            </div>
            <div className="Alert-container-close">
              <i onClick={this.props.handleCloseIconClick} className="fa fa-times fa-3x Alert-container-close-icon" aria-hidden="true"></i>
            </div>
          </div>
        </ReactCSSTransitionGroup>
      )
    }
    else{
      return ""
    }
  }


  render(){
    return (
      <div>
        {this.shouldShowAlert()}
      </div>
    )
  }
}

export default Alert;
