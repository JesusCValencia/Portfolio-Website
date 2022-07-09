import { useState, useEffect } from 'react';

import { buildBoard, nextBoard } from '../Builds/Board';

export const useBoard = ({ rows, columns, player, resetPlayer, addLinesCleared }) => {
    //For useEffect, use board and a setter
    const [board, setBoard] = useState(buildBoard({ rows, columns}));

    //Update the board
    useEffect(() => {
        setBoard((previousBoard) =>
            nextBoard({
                board: previousBoard,
                player,
                resetPlayer,
                addLinesCleared
            })
        );
    }, [player, resetPlayer, addLinesCleared]); 
    
    return [board];
};