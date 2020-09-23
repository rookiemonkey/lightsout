import React, { Component } from "react";
import setCells from '../helpers/setCells';
import evaluateFlip from '../helpers/evaluateFlip';
import handleSetBoard from '../helpers/handleSetBoard';
import isAllOut from '../helpers/isAllOut';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: [],
    }
  }

  componentDidMount() {
    const { nrows, ncols } = this.props;
    this.setState({ ...this.state, board: handleSetBoard(nrows, ncols) });
  }

  /** set the board with an array-of-arrays containing true/false for lit or unlit */
  setBoard = () => { handleSetBoard(this.props.nrows, this.props.ncols); }

  /** handle changing a cell: update board & determine if winner */
  flipCellsAround = (coord) => {
    const stateCopy = Object.assign({}, this.state);
    const { nrows, ncols } = this.props;
    const { board } = stateCopy;
    const [x, y] = coord.split("-").map(Number);

    // flips the boolean on board
    evaluateFlip(x, y, board, nrows, ncols);

    // evaluate the board if everything is false
    const result = isAllOut(board);

    // set the state with the result
    this.setState({ board, hasWon: result });

  }

  handlePlayAgain = () => {
    this.setState({ hasWon: false, board: [] }, () => { this.props.resetGame() });
  }

  render() {
    const { board } = this.state;
    let grid; if (board.length > 0) {
      grid = board.map((r, i) => {
        return setCells(r, i, this.flipCellsAround);
      })
    }

    return (
      <>

        {
          (this.state.hasWon)
            ? (
              <div className='winner'>
                <span className='neon-orange'>YOU</span>
                <span className='neon-blue'>WIN!</span>
                <button onClick={this.handlePlayAgain}>Play Again</button>
              </div>
            )
            : (
              <div>
                <div className='Board-title'>
                  <div className='neon-orange'>Lights</div>
                  <div className='neon-blue'>Out</div>
                </div>
                <div className='Board-title-level'>
                  <span>Difficulty: {this.props.level}</span>
                  <span onClick={this.handlePlayAgain} >Go Back</span>
                </div>
                <table>
                  <tbody>
                    {grid}
                  </tbody>
                </table>
              </div>
            )
        }

      </>
    )
  }
}


export default Board;
