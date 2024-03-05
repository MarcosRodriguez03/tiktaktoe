import React from 'react'
import SquareComponent from '../Square/SquareComponent'

const BoardComponent = ({ onClick, squares }) => {

    const renderSquares = () => {
        const squareComps = [];

        squares.forEach((value, i) => {
            squareComps.push(
                <SquareComponent value={value} key={i} onClick={() => onClick(i)} />
            )
        })
        return squareComps;
    }


    return (
        <div>
            <div className='board'>
                <div className='boardRow'>
                    {renderSquares().slice(0, 3)}
                    {renderSquares().slice(3, 6)}
                    {renderSquares().slice(6, 8)}
                </div>
            </div>
        </div>
    )
};


export default BoardComponent
