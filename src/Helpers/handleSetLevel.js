const handleSetLevel = lvl => {
    switch (lvl) {
        case 'Easy': return { ncols: 5, nrows: 5};
        case 'Medium': return { ncols: 7, nrows: 7 };
        case 'Hard': return { ncols: 9, nrows: 9 };
        default: return new Error("Something went wrong upon setting the difficulty")
    }
}

export default handleSetLevel;