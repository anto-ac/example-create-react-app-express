import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value=""
          />
          <button type="submit">Submit</button>
        </form>
        <p>Print input here</p>
      </div>
    );
  }
}

export default App;
