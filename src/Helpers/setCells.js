import React from 'react';
import shortid from 'shortid';
import Cell from "../Components/Cell";

const setCells = arr => {
    console.log(arr)
    return arr.map((c, i) => {
        return (
            <Cell
                isLit={c}
                key={shortid.generate()}
            />
        )
    })
}

export default setCells;