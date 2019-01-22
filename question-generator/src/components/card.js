import React, { Component, Fragment } from "react";
import { Card } from "semantic-ui-react";
import '../css/card.css';
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInEditMode: false,
      update:false,
      value: this.props.questions
    };
  }

  changeEditMode(event) {
    event.preventDefault();
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
    console.log("mpode", this.state.isInEditMode);
    // this.renderEditView();
  }
  UpdateQuestion(event) {
    event.preventDefault();
    this.setState({
      isInEditMode: false,
      // value: event.target.value,
      update:true
    });
    console.log('value2',this.state.value);

  }
  editText(event) {
    event.preventDefault();
    this.setState({
      value: event.target.value
    });
    console.log('value',this.state.value);
  }
goToBack(event){
  event.preventDefault();
  console.log('back')
  this.setState({
    value:this.props.questions,
    isInEditMode:false
  })
}
  render() {
    console.log("dad", this.state.value);
    return (
      this.props.questions.map((ques,id) => 
      <Fragment>
        <div className="ui very padded text container">
          <Card fluid color="red" id="card">
            <Card.Content>
             
                  {this.state.isInEditMode === true ? (
                    <div>
                      <input
                      className="ui input"
                        type="text"
                        id="text1"
                        defaultValue={ques.title}
                        onChange={this.editText.bind(this)}
                      />
                      <button id="style" className="ui primary button" onClick={this.goToBack.bind(this)}>Cancel</button>
                      <button  className="ui primary button" onClick={this.UpdateQuestion.bind(this)}>
                        Update
                      </button>
                    </div>
                  ) : (<Fragment>
                     <div className="ui grid">
                <div className="ten wide column" id="text1">

                    <Card.Header>{this.state.update === true ? (this.state.value) :(ques.title)} </Card.Header>
                    </div>
                
                
                    <div className="six wide column">
                  <div className="ui labeled icon menu">
                    <a
                      className="item"
                      href="/"
                      data-tooltip="delete"
                      data-position="bottom left"
                    >
                      <i className="trash icon" />
                    </a>
                    <a
                      className="item"
                      href="/"
                      data-tooltip="edit"
                      data-position="bottom left"
                      onClick={this.changeEditMode.bind(this)}
                    >
                      <i className="edit icon" />
                    </a>
                    <a
                      className="item"
                      href="/"
                      data-tooltip="publish"
                      data-position="bottom left"
                    >
                      <i className="arrow circle up icon" />
                    </a>
                  </div>
                </div></div>
                </Fragment>
                  )}
              
            </Card.Content>
          </Card>
        </div>
      </Fragment>
      )
    );
  }
}
