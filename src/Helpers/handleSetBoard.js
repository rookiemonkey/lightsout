const handleSetBoard = () => {
    const nrows = 5 // emptyBoard.length
    const ncols = 5 // emptyBoard[i].length

    // board creates the row
    const board = Array(nrows).fill().map(row => {

        // cells creates the cols
        const cells = Array(ncols).fill().map(cell => {

            // returns a boolean for random 1 or 0
            return Boolean(Math.floor(Math.random() * (1 - 0 + 1)) + 0);
        })

        return cells;

    })
    return board;

}

export default handleSetBoard;