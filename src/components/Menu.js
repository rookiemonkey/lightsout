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

                <div className="Board-menu-button-container">
                    <button
                        onClick={this.handleSetLevel}
                        value='Easy'
                    >Easy</button>
                    <span className='Board-menu-button-meta'>5 x 5 Board</span>
                </div>

                <div className="Board-menu-button-container">
                    <button
                        onClick={this.handleSetLevel}
                        value='Medium'
                    >Medium</button>
                    <span className='Board-menu-button-meta'>7 x 7 Board</span>
                </div>

                <div className="Board-menu-button-container">
                    <button
                        onClick={this.handleSetLevel}
                        value='Hard'
                    >Hard</button>
                    <span className='Board-menu-button-meta'>9 x 9 Board</span>
                </div>

                <p className='Board-menu-description'>
                    Instruction: light-up all the cells on the given board
                </p>

                <p className='Board-menu-description'>
                    Inspired by
                    <a
                        href="https://en.wikipedia.org/wiki/Lights_Out_(game)"
                        rel="noopener noreferrer"
                        className="wikipedia_link"
                        target="_blank"
                    > LIGHTS OUT, </a>
                    an electronic game <br /> released by Tiger Electronics in 1995
                </p>
            </div>

        )
    }
}

export default Menu;