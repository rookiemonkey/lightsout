import React, {Component} from "react";
import setCells from '../Helpers/setCells';
import evaluateFlip from '../Helpers/evaluateFlip';
import handleSetBoard from '../Helpers/handleSetBoard';
import isAllOut from '../Helpers/isAllOut';

class Board extends Component {
  static defaultProps = {
    // will only accept two, same odd numbers that is the same
    // might get some errors in evaluating isInside if not add
    // when adding, might need to add tr tag on render since its still hardcoded
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
    const { nrows, ncols } = this.props
    this.setState({ ...this.state, board: handleSetBoard(nrows, ncols) })
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


  /** Render game board or winning message only */

  render() {

    let row0, row1, row2, row3, row4;
    const [ r0, r1, r2, r3, r4 ] = this.state.board;
    if (this.state.board.length === 5) {
      row0 = setCells(r0, '0', this.flipCellsAround);
      row1 = setCells(r1, '1', this.flipCellsAround);
      row2 = setCells(r2, '2', this.flipCellsAround);
      row3 = setCells(r3, '3', this.flipCellsAround);
      row4 = setCells(r4, '4', this.flipCellsAround);
    }
    const grid =  <table>
        <tbody>
      <tr>
        { row0 }
      </tr>
      <tr>
        { row1 }
      </tr>
      <tr>
        { row2 }
      </tr>
      <tr>
        { row3 }
      </tr>
        <tr>
        { row4 }
      </tr>
    </tbody>
    </table>

    return (
      <>

        {
          (this.state.hasWon)
          ? (
            <div className='winner'>
              <span className='neon-orange'>YOU</span>
              <span className='neon-blue'>WIN!</span>
            </div>
            )
          : (
            <div>
              <div className='Board-title'>
                <div className='neon-orange'>Lights</div>
                <div className='neon-blue'>Out</div>
              </div>
              { grid }
            </div>
            )
        }

      </>
    )
  }
}


export default Board;

