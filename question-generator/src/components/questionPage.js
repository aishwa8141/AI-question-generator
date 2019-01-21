import React ,{ Component ,Fragment } from  'react';
import Search from '../components/search';
import Content from '../components/content';
import '../css/router.css';
export class questionPage extends Component {
    render() {
        return(
            <Fragment>
  <div className="ui inverted menu" id="nav">
        <div className="ui container">
          <a href="/" className="header item">
          <img src="https://photos.gograph.com/thumbs/CSP/CSP201/default-avatar-profile-icon-vector-art_k52979245.jpg" alt="no"/>
          </a>
         
            <div className="ui two wide column center aligned ">
              <h2>AI Question Generator</h2>
            </div>
         
          <div className="right menu">
    <div className="ui right aligned">
         
          <i className="rupee sign icon right-floated" id="iconrupee"></i>
        </div>
        </div>
        </div>
      </div>
<div >
<Search></Search>
</div>
<Content></Content>
     </Fragment>
        )
    }
}