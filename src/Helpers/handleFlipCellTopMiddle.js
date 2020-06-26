const handleFlipCellTopMiddle = (x, y, func) => {
    func(x, y);
    func(x, y-1);
    func(x, y+1);
    func(x+1, y);
}

export default handleFlipCellTopMiddle;