// // Ask the candidate to build a click counter using any popular framework (React preferred in 2020).
// This ridiculously simple app has one job: keep track of how many times the user
// has clicked the button during the current session.
//  No storage. No network I/O. Just count clicks.

import React, { Component } from "react";

class ClickCounter extends Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>Please click me, I am a clickcounter!</h1>
        <p>You have clicked</p>
        <button
          style={{
            color: "white",
            padding: "16px 16px",
            fontSize: "40px",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "blue",
            display: "flex",
            justifyContent: "center",
            width: "150px"
          }}
          onClick={this.handleClick}
        >
          {this.state.count}
        </button>
        <p style={{ color: "blue", textAlign: "center" }}>
          {this.state.count} times!
        </p>
      </div>
    );
  }
}

export default ClickCounter;
