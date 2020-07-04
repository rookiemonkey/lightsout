import React, { Component } from "react";
import Board from "./Components/Board";
import Menu from './Components/Menu';
import handleSetLevel from './Helpers/handleSetLevel';

class LightsOutApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: '',
            ncols: 0,
            nrows: 0
        }
    }

    setLevel = lvl => {
        const c = handleSetLevel(lvl);
        this.setState({ level: lvl, ncols: c.ncols, nrows: c.nrows })
    }

    render() {

        const { level, ncols, nrows } = this.state;

        return (
          <article className='Board'>
            {this.state.level ? null : <Menu setLevel={this.setLevel} />}
            {this.state.level ? <Board level={level} ncols={ncols} nrows={nrows}/> : null}
          </article>
        );
    }
}

export default LightsOutApp;
