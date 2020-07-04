import React, { Component } from 'react';

class Menu extends Component {

    handleSetLevel = e => {
        this.props.setLevel(e.currentTarget.value)
    }

    render() {
        return (

            <div>
                <div className='Board-title'>
                    <div className='neon-orange'>Lights</div>
                    <div className='neon-blue'>Out</div>
                </div>
                <p>
                    Inspired by
                    <a
                        href="https://en.wikipedia.org/wiki/Lights_Out_(game)"
                        rel="noreferrer"
                        target="_blank"
                    >LIGHTS OUT</a>
                </p>

                <button
                    onClick={this.handleSetLevel}
                    value='Easy'
                >Easy</button>

                <button
                    onClick={this.handleSetLevel}
                    value='Medium'
                >Medium</button>

                <button
                    onClick={this.handleSetLevel}
                    value='Hard'
                >Hard</button>

            </div>

        )
    }
}

export default Menu;