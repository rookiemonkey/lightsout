import React from 'react';
import Cell from "../Components/Cell";

const setCells = arr => {
    return arr.map(r => {
        return r.map((c, i) => {
            return <Cell isLit={c} />
        })
    })
}

export default setCells;