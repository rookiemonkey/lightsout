import React from 'react';
import Cell from "../components/Cell";
import shortid from 'shortid'

const setCells = (arr, x, func) => {

    const row = arr.map((c, i) => {

        return (

            <Cell
                isLit={c}
                key={`${x}-${i}`}
                coordinates={`${x}-${i}`}
                flipCellsAroundMe={func}
            />

        )
    })

    return (

        <tr key={shortid.generate()}>
            { row}
        </tr>

    )
}

export default setCells;