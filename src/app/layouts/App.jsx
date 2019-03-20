import React, { Component } from "react";
import { Button } from "semantic-ui-react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello!</h1>

         <button className="ui icon button">
          <i className="smile icon" />
          css button
        </button>
        <Button icon="smile" content="react button" />
      </div>
    );
  }
}

export default App;
