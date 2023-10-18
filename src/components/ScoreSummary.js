import React from 'react';

const ScoreSummary = (props) => {
    return (
        <div className="score-summary">
            <h2>Your Typing Stats</h2>
            <p>Words Per Minute: {props.wpm}</p>
            <p>Accuracy: {props.accuracy}%</p>
        </div>
    );
};

export default ScoreSummary;