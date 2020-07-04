import React, { Component } from "react";
import Board from "./Components/Board";
import Menu from './Components/Menu';

class LightsOutApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: ''
        }
    }

    setLevel = lvl => {
        this.setState({ level: lvl }, () => { console.log(this.state) })
    }

    render() {
        return (
          <article className='Board'>
            {this.state.level ? null : <Menu setLevel={this.setLevel} />}
            {this.state.level ? <Board /> : null}
          </article>
        );
    }
}

export default LightsOutApp;
