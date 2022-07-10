import React from 'react';
import './Styles/GameStats.css';
import './Fonts/PublicPixel-0W5Kv.ttf';

const GameStats = ({ gameStats }) => {
    const { level, points, linesCompleted, linesPerLevel } = gameStats;
    const linesToLevel = linesPerLevel - linesCompleted;

    return (
        <div className = "GameStatsBox">
            <ul className='GameStats'>
                <li>Level</li>
                <li className= "value">{level}</li>
                <li>Lines Left</li>
                <li className= "value">{linesToLevel}</li>
                <li>Score</li>
                <li className ="value">{points}</li>
            </ul>
        </div>
    );
};

export default React.memo(GameStats);