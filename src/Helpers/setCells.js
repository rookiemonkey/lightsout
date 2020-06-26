import React from 'react';
import Cell from "../Components/Cell";

const setCells = (arr, x, func) => {

    return arr.map((c, i) => {

        return (

            <Cell
                isLit={c}
                key={i}
                coordinates={`${x}-${i}`}
                flipCellsAroundMe={func}
            />

        )
    })
}

export default setCells;