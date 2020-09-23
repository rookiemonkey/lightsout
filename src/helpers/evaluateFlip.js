import handleFlipCell from './handleFlipCell';
import handleFlipCellInside from './handleFlipCellInside';
import handleFlipCellCorner from './handleFlipCellCorner';
import handleFlipCellLeft from './handleFlipCellLeft';
import handleFlipCellRight from './handleFlipCellRight';
import handleFlipCellTopMiddle from './handleFlipCellTopMiddle';
import handleFlipCellBottomMiddle from './handleFlipCellBottomMiddle';
import isInside from './isInside';
import isCorner from './isCorner';

const evaluateFlip = (x, y, board, nrows, ncols) => {

    // flips the boolean on board
    function flipCell(x, y) { handleFlipCell(x, y, board); };
    function flipInside(x, y) { handleFlipCellInside(x, y, flipCell) };
    function flipCorner(x, y) { handleFlipCellCorner(x, y, flipCell, nrows, ncols) };
    function flipLeftSide(x, y) { handleFlipCellLeft(x, y, flipCell) };
    function flipRigthSide(x, y) { handleFlipCellRight(x, y, flipCell) };
    function flipTopMiddle(x, y) { handleFlipCellTopMiddle(x, y, flipCell) };
    function flipBottomMiddle(x ,y) { handleFlipCellBottomMiddle(x, y, flipCell) };

    // evaluate the coordinate and call a function above depending on the coordinates
    if (isInside(x, nrows)) {
      if (isInside(y, nrows)) { flipInside(x, y); }
      else if (y === 0) { flipLeftSide(x, y); }
      else if (y === ncols-1) { flipRigthSide(x, y); }
    } else if (isCorner(x, y, nrows, ncols)) { flipCorner(x, y); }
    else if (x === 0) { flipTopMiddle(x, y); }
    else if (x === ncols-1) { flipBottomMiddle(x, y); }

}

export default evaluateFlip;