const isAllOut = board => {

    const i = board.map(r => {
        return r.every(c => { return c === false })
    })

    return i.every(i => { return i === true });

}

export default isAllOut;