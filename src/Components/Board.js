import React, {Component} from "react";
import setCells from '../Helpers/setCells';
import handleFlipCell from '../Helpers/handleFlipCell';
import handleFlipCellInside from '../Helpers/handleFlipCellInside';
import handleSetBoard from '../Helpers/handleSetBoard';
import isInside from '../Helpers/isInside';
import isCorner from '../Helpers/isCorner';

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
    const stateCopy = Object.assign({}, this.state);
    const { board, hasWon } = stateCopy;
    const [ x, y ] = coord.split("-").map(Number);

    // flips the boolean on board
    function flipCell(x, y) { handleFlipCell(x, y, board); }

    // row 0
    // if (x===0 && y===0) { // corner
    //   flipCell(0, 0);
    //   flipCell(0, 1);
    //   flipCell(1, 0);

    // } else if (x===0 && y===1){
    //   flipCell(0, 0);
    //   flipCell(0, 1);
    //   flipCell(0, 2);
    //   flipCell(1, 1);

    // } else if (x===0 && y===2){
    //   flipCell(0, 2);
    //   flipCell(0, 1);
    //   flipCell(0, 3);
    //   flipCell(1, 2);

    // } else if (x===0 && y===3){
    //   flipCell(0, 3);
    //   flipCell(0, 2);
    //   flipCell(0, 4);
    //   flipCell(1, 3);

    // } else if (x===0 && y===4){ // corner
    //   flipCell(0, 4);
    //   flipCell(0, 3);
    //   flipCell(1, 4);
    // } else { return null }

    function flipInside(x, y) { handleFlipCellInside(x, y, flipCell) }

    if (isInside(x)) {
      if (isInside(y)) { flipInside(x, y); }
      else if (y === 0 || y === 4) {
        console.log('clicked on the side-middle edges');

      }

    } else if (isCorner(x, y)) {
      console.log('clicked on the corder L section');

    } else if (x === 0 || x === 4 ) {
      console.log('clicked on the top/bottom-middle edges');

    }



    // function flipEdges(){}

    // x either
      // +1 row0
      // x+1 && x-1 in between
      // -1 last row


    // y either
      // +1 col0
      // y+1 & y-1 in between
      // -1 last col


    // row 1
    // if (x===1) { return null }

    // // row 2
    // if (x===2) { return null }

    // // row 3
    // if (x===3) { return null }

    // // row 4
    // if (x===4) { return null }


    // win when every cell is turned off
    // TODO: determine is the game has been won

    this.setState({ board, hasWon });
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
