import React, { Component } from "react";
import ReactHowler from 'react-howler'
import Board from "./components/Board";
import Menu from './components/Menu';
import handleSetLevel from './helpers/handleSetLevel';

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
    };

    resetGame = () => {
        this.setState({ level: '', ncols: 0, nrows: 0 })
    };

    render() {

        const { level, ncols, nrows } = this.state;

        return (
            <article className='Board'>
                <ReactHowler src={require('./assets/audio/background.mp3')} loop={true} />
                {this.state.level ? null : <Menu setLevel={this.setLevel} />}
                {this.state.level ? <Board level={level} ncols={ncols} nrows={nrows} resetGame={this.resetGame} /> : null}
            </article>
        );
    }
}

export default LightsOutApp;
