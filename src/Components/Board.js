import React, {Component} from "react";
import setCells from '../Helpers/setCells';
import handleSetBoard from '../Helpers/handleSetBoard';



/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       1  1  .     (where . is off, and 1 is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
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
    const board = this.state.board;
    const { nrows, ncols } = this.props
    const [ x, y ] = coord.split("-").map(Number);

    // function flipCell(y, x) {
    //   // if this coord is actually on board, flip it

    //   if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
    //     board[y][x] = !board[y][x];
    //   }
    // }



    // TODO: flip this cell and the cells around it



    // win when every cell is turned off
    // TODO: determine is the game has been won

    // this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {

    // if the game is won, just show a winning msg & render nothing else

    let row0, row1, row2, row3, row4;
    const [ r0, r1, r2, r3, r4 ] = this.state.board;
    if (this.state.board.length === 5) {
      row0 = setCells(r0, '0', this.flipCellsAround);
      row1 = setCells(r1, '1', this.flipCellsAround);
      row2 = setCells(r2, '2', this.flipCellsAround);
      row3 = setCells(r3, '3', this.flipCellsAround);
      row4 = setCells(r4, '4', this.flipCellsAround);
    }


    return (

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

    )
  }
}


export default Board;
