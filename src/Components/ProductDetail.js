import React, {Component} from 'react';
import '../css/ProductDetail.css';

class ProductDetail extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="product-modal-background">
        <div className="product-modal-container">

          <div className="product-close">
          </div>

          <div className="product-profile">
            <div className="product-profile-picture">
              <img src="https://cdn2.macworld.co.uk/cmsdata/reviews/3534761/iPhone_6_MG_1953.jpg"/>
            </div>
            <div className="product-profile-user">
              <div className="product-profile-user-avatar">
                  <img className="product-profile-user-avatar-img" src="./avatar.png" />
              </div>
              <div className="product-profile-user-desciption">
                <p>Posted by</p>
                <p>Tao Xiang</p>
              </div>
            </div>
          </div>

          <div className="product-description">
            <div className="product-description-title">
              <p className="product-description-title-name">IPhone 6</p>
              <p className="product-description-title-price">$360</p>
            </div>

            <div className="product-description-detail">
              <p>Brand new ihpone plus, barely used, in completely new condition.Brand new ihpone plus, barely used, in completely new conditionBrand new ihpone plus, barely used, in completely new conditionBrand new ihpone plus, barely used, in completely new conditionBrand new ihpone plus, barely used, in completely new conditionBrand new ihpone plus, barely used, in completely new conditionBrand new ihpone plus, barely used, in completely new conditionBrand new ihpone plus, barely used, in completely new conditionBrand new ihpone plus, barely used, in completely new condition</p>
            </div>

            <div className="product-description-buttons">
              <button className="product-description-buttons-contact">Contact</button>
              <button className="product-description-buttons-add">Add to Cart</button>
            </div>
          </div>

        </div>
      </div>
    )
  }


}

export default ProductDetail;
