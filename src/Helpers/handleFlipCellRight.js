const handleFlipCellRight = (x, y, func) => {
    func(x, y);
    func(x, y-1);
    func(x+1, y);
    func(x-1, y);
}

export default handleFlipCellRight;