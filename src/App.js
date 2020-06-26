import React, { Component } from "react";
import Board from "./Components/Board";

class LightsOutApp extends Component {
  render() {
    return (
      <table className='Board'>
        <Board />
      </table>
    );
  }
}

export default LightsOutApp;
