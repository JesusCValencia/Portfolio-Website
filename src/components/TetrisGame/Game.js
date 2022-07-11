import Menu from './Menu';

import Tetris from './Tetris';
import { useGameOver } from "./Hooks/useGameOver";

const Projects = ({ rows = 20 , columns = 10 }) => {
    const [gameOver, setGameOver, resetGameOver] = useGameOver()
    
    //Reset the game
    const start = () => {
        resetGameOver();
        console.log(`Start gameOver is ${gameOver}`); 
        }

    return (
        <div className="Game">
            {gameOver ? (
                <Menu onClick={start} />
            )   :   (
                <Tetris rows = {rows} columns={columns} setGameOver={setGameOver} />
            )}
        </div>
    );
}


export default Projects;