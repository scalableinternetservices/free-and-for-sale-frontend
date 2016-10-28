import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Masonry from 'react-masonry-component';
import '../css/landingPage.css';


var masonryOptions = {
    transitionDuration: 0,
    gutter: 25
};

class CardsContainer extends Component {
  constructor (props)
  {
    super(props);

  }

  componentWillMount (){

  }

  componentDidMount (){

  }

  render() {



    return (
      <Masonry
                className={'my-gallery-class cardsContainer'}
                elementType={'ul'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
            >


              <div className="image-element-class cards" >
                <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://www1.pcmag.com/media/images/497045-samsung-galaxy-s7-edge-inline.jpg?thumb=y" />
                <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
                  <div>
                    <div>$299</div>
                    <div>iPhone 7</div>
                  </div>
                  <div>256 views</div>
                </div>

                <div style={{flex:40}} className="detail">
                  <div>Sanfrancisco CA 90024</div>
                  <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
                </div>
              </div>

              <div className="image-element-class cards" >
                <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://i-cdn.phonearena.com/images/articles/231029-thumb/edge-header-tn.jpg" />
                <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
                  <div>
                    <div>$299</div>
                    <div>iPhone 7</div>
                  </div>
                  <div>256 views</div>
                </div>

                <div style={{flex:40}} className="detail">
                  <div>Sanfrancisco CA 90024</div>
                  <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
                </div>
              </div>

              <div className="image-element-class cards" >
                <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://www1.pcmag.com/media/images/497045-samsung-galaxy-s7-edge-inline.jpg?thumb=y" />
                <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
                  <div>
                    <div>$299</div>
                    <div>iPhone 7</div>
                  </div>
                  <div>256 views</div>
                </div>

                <div style={{flex:40}} className="detail">
                  <div>Sanfrancisco CA 90024</div>
                  <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
                </div>
              </div>

              <div className="image-element-class cards" >
                <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="https://upload.wikimedia.org/wikipedia/en/1/16/IPhone_keyboard_unblurred.jpg" />
                <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
                  <div>
                    <div>$299</div>
                    <div>iPhone 7</div>
                  </div>
                  <div>256 views</div>
                </div>

                <div style={{flex:40}} className="detail">
                  <div>Sanfrancisco CA 90024</div>
                  <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
                </div>
              </div>

              <div className="image-element-class cards" >
                <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="https://fh-uploads-hzscjv5a1k85do6fzz7kdmffiwhxul5bcoakysrttzf.netdna-ssl.com/d1ccae8b-dc3d-4482-890e-b43fdbaed86b" />
                <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
                  <div>
                    <div>$299</div>
                    <div>iPhone 7</div>
                  </div>
                  <div>256 views</div>
                </div>

                <div style={{flex:40}} className="detail">
                  <div>Sanfrancisco CA 90024</div>
                  <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
                </div>
              </div>

              <div className="image-element-class cards" >
                <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://www1.pcmag.com/media/images/497045-samsung-galaxy-s7-edge-inline.jpg?thumb=y" />
                <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
                  <div>
                    <div>$299</div>
                    <div>iPhone 7</div>
                  </div>
                  <div>256 views</div>
                </div>

                <div style={{flex:40}} className="detail">
                  <div>Sanfrancisco CA 90024</div>
                  <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
                </div>
              </div>

              <div className="image-element-class cards" >
                <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://www1.pcmag.com/media/images/497045-samsung-galaxy-s7-edge-inline.jpg?thumb=y" />
                <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
                  <div>
                    <div>$299</div>
                    <div>iPhone 7</div>
                  </div>
                  <div>256 views</div>
                </div>

                <div style={{flex:40}} className="detail">
                  <div>Sanfrancisco CA 90024</div>
                  <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
                </div>
              </div>

              <div className="image-element-class cards" >
                <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://www1.pcmag.com/media/images/497045-samsung-galaxy-s7-edge-inline.jpg?thumb=y" />
                <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
                  <div>
                    <div>$299</div>
                    <div>iPhone 7</div>
                  </div>
                  <div>256 views</div>
                </div>

                <div style={{flex:40}} className="detail">
                  <div>Sanfrancisco CA 90024</div>
                  <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
                </div>
              </div>

              <div className="image-element-class cards" >
                <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://www1.pcmag.com/media/images/497045-samsung-galaxy-s7-edge-inline.jpg?thumb=y" />
                <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
                  <div>
                    <div>$299</div>
                    <div>iPhone 7</div>
                  </div>
                  <div>256 views</div>
                </div>

                <div style={{flex:40}} className="detail">
                  <div>Sanfrancisco CA 90024</div>
                  <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
                </div>
              </div>

              <div className="image-element-class cards" >
                <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://www1.pcmag.com/media/images/497045-samsung-galaxy-s7-edge-inline.jpg?thumb=y" />
                <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
                  <div>
                    <div>$299</div>
                    <div>iPhone 7</div>
                  </div>
                  <div>256 views</div>
                </div>

                <div style={{flex:40}} className="detail">
                  <div>Sanfrancisco CA 90024</div>
                  <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
                </div>
              </div>

              <div className="image-element-class cards" >
                <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://www1.pcmag.com/media/images/497045-samsung-galaxy-s7-edge-inline.jpg?thumb=y" />
                <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
                  <div>
                    <div>$299</div>
                    <div>iPhone 7</div>
                  </div>
                  <div>256 views</div>
                </div>

                <div style={{flex:40}} className="detail">
                  <div>Sanfrancisco CA 90024</div>
                  <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
                </div>
              </div>

              <div className="image-element-class cards" >
                <img style={{flex:40, 'border-top-right-radius': '3%', 'border-top-left-radius': '3%', 'max-width':'100%', height:'auto'}} src="http://www1.pcmag.com/media/images/497045-samsung-galaxy-s7-edge-inline.jpg?thumb=y" />
                <div style={{'margin-top':'4%', flex:20, height:'60px', display:'flex', 'flex-direction':'row', 'justify-content':'space-between'}} className="description">
                  <div>
                    <div>$299</div>
                    <div>iPhone 7</div>
                  </div>
                  <div>256 views</div>
                </div>

                <div style={{flex:40}} className="detail">
                  <div>Sanfrancisco CA 90024</div>
                  <div>This is a brand new iphone, gold, unlocked with 64GB storage.</div>
                </div>
              </div>



      </Masonry>
    );
  }
}

export default CardsContainer;
