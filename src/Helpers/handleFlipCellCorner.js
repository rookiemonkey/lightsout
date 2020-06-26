const handleFlipCellCorner = (x, y, func) => {
    if (x === 0 && y === 0) {
        func(x, y); func(x, y+1); func(x+1, y);
    }

    else if (x === 0 && y === 4) {
        func(x, y); func(x, y-1); func(x+1, y);
    }

    else if (x === 4 && y === 0) {
        func(x, y); func(x-1, y); func(x, y+1);
    }

    else if (x === 4 && y === 4) {
        func(x, y); func(x-1, y); func(x, y-1);
    }
}

export default handleFlipCellCorner;