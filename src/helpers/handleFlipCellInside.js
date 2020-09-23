const handleFlipCellInside = (x, y, func) => {
    func(x, y);
    func(x-1, y);
    func(x+1, y);
    func(x, y+1);
    func(x, y-1);
}

export default handleFlipCellInside;