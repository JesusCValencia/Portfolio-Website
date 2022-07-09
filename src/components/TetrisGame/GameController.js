import './Styles/GameController.css';

import { Action, actionForKey, actionIsDrop } from './Builds/Input';
import { playerController } from './Builds/PlayerController';

import { useInterval } from './Hooks/useInterval';
import { useDropTime } from './Hooks/useDropTime';

const GameController = ({
      board,
      gameStats,
      player,
      setGameOver,
      setPlayer
}) => {
    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
        gameStats
    });

    useInterval(() => {
        handleInput({ action: Action.SlowDrop});
    }, dropTime);

    const onKeyUp = ({ code }) => {
        const action = actionForKey(code);
        if (actionIsDrop(action)) resumeDropTime();

    };

    //Counts when pushed down or held
    const onKeyDown = ({ code }) => {
        const action = actionForKey(code);
        handleInput({ action });

        if (action === Action.Pause){
            if (dropTime) {
                pauseDropTime();
            }else{
                resumeDropTime();
            }
        }else if (action === Action.Quit){
            setGameOver(true);
            }else{
                if (actionIsDrop(action)) pauseDropTime();
                handleInput({ action });
        }
    };

    const handleInput = ({ action }) => {
        playerController({
          action,
          board,
          player,
          setPlayer,
          setGameOver
        });
      };

    return (
        <input 
            className="GameController"
            type="text"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autoFocus
        />
    );
};

export default GameController;