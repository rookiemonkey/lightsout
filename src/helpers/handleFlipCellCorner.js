const handleFlipCellCorner = (x, y, func, nrows, ncols) => {
    if (x === 0 && y === 0) {
        func(x, y); func(x, y+1); func(x+1, y);
    }

    else if (x === 0 && y === ncols-1) {
        func(x, y); func(x, y-1); func(x+1, y);
    }

    else if (x === nrows-1 && y === 0) {
        func(x, y); func(x-1, y); func(x, y+1);
    }

    else if (x === nrows-1 && y === ncols-1) {
        func(x, y); func(x-1, y); func(x, y-1);
    }
}

export default handleFlipCellCorner;