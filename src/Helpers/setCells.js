import React from 'react';
import shortid from 'shortid';
import Cell from "../Components/Cell";

const setCells = (arr, x, func) => {

    return arr.map((c, i) => {

        return (

            <Cell
                isLit={c}
                key={shortid.generate()}
                coordinates={`${x}-${i}`}
                flipCellsAroundMe={func}
            />

        )
    })
}

export default setCells;