const isCorner = (x, y, nrows, ncols) => {
    if (x === 0 && y === 0) { return true }
    else if (x === 0 && y === ncols-1) { return true }
    else if (x === nrows-1 && y === 0) { return true }
    else if (x === nrows-1 && y === ncols-1) { return true }
    else { return false }
}

export default isCorner;