import React, { useState } from 'react'

const useGameHistory = () => {

    const [history, setHistory] = useState([Array(9).fill(null)]);

    //count the steps of our game, for each turn
    const [stepNumber, setStepNumber] = useState(0);

    const updateHistory = (newHistory) => {
        setHistory(newHistory)
        setStepNumber(newHistory.length - 1)

    }

    // allows us to reset the history, clears our array with null
    const resetHistory = () => {
        setHistory([Array(9).fill(null)]);
        setStepNumber(0);
    }


    return {
        history,
        stepNumber,
        updateHistory,
        resetHistory,
        setStepNumber
    }
}

export default useGameHistory
