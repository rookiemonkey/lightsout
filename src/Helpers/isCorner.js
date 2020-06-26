const isCorner = (x, y) => {
    if (x === 0 && y === 0) { return true }
    else if (x === 0 && y === 4) { return true }
    else if (x === 4 && y === 0) { return true }
    else if (x === 4 && y === 4) { return true }
    else { return false }
}

export default isCorner;