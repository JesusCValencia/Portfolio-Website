import BoardCell from './Builds/BoardCell';
import './Styles/Board.css';

const Board = ({ board }) => {

    const boardStyles = {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`
    }

    return (
        <>
            <div className = 'Board' style = {boardStyles}>
              {board.rows.map((row, y) =>
                  row.map((cell, x) => (
                      <BoardCell key = {x * board.size.columns + x} cell ={cell} />
                    ))
                )}
            </div>
        <img className = "controlImage" src = "/Portfolio-Website/assets/images/Controls.png" alt="Controls-Image"/>
        </>
    );
};

export default Board;