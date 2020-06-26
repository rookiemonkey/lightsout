import React, {Component} from "react";
import setCells from '../Helpers/setCells';
import evaluateFlip from '../Helpers/evaluateFlip';
import handleSetBoard from '../Helpers/handleSetBoard';
import isAllOut from '../Helpers/isAllOut';

class Board extends Component {
  static defaultProps = {
    // will only accept two, same odd numbers that is the same
    // might get some errors in evaluating isInside if not add
    ncols: 5,
    nrows: 5
  }

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
    const [ x, y ] = coord.split("-").map(Number);

    // flips the boolean on board
    evaluateFlip(x, y, board, nrows, ncols);

    // evaluate the board if everything is false
    const result = isAllOut(board);

    // set the state with the result
    this.setState({ board, hasWon: result });

  }

  handlePlayAgain = () => {
    const { nrows, ncols } = this.props;
    this.setState({ hasWon: false, board: handleSetBoard(nrows, ncols) });
  }

  render() {
    const { board } = this.state;
    let grid;
    if (board.length > 0) {
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
              <table>
                <tbody>
                  { grid }
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

