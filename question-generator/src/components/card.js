import React from "react";
import { Card} from "semantic-ui-react";


const Cards = props => (
  
  <div className="ui very padded text container">
 
      <Card fluid color="red" id="card" >
        <Card.Content>
          <div className="ui grid">
            <div className="ten wide column">
              <Card.Header>{props.questions.title}</Card.Header>
            </div>
            <div className="six wide column">
            <div className="ui labeled icon menu">
            
              <a className="item" href="/" data-tooltip="edit" data-position="bottom left">
                <i className="edit icon" />
              </a>
              <a className="item" href="/" data-tooltip="delete" data-position="bottom left">
                <i className="trash icon" />
              </a>
              <a className="item" href="/" data-tooltip="publish" data-position="bottom left">
                <i className="arrow circle up icon" />
              </a>
            </div>
            </div>
          </div>
        </Card.Content>
      </Card>
      </div>
);

export default Cards;
