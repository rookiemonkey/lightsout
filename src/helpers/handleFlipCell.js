const handleFlipCell = (x, y, board) => {
    board[x][y] = !board[x][y];
}

export default handleFlipCell;