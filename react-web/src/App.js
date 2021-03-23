import React, {useState, useEffect} from 'react';

function App({game}) {
    let [result, setResult] = useState("");
    let [choices, setChoices] = useState({
        player1: '',
        player2: ''
    });

    function handleSubmit(event) {
        event.preventDefault();
        game.playRound(choices.player1, choices.player2, {
            player2Wins() {
                setResult("player 2 wins");
            },

            player1Wins() {
                setResult("player 1 wins");
            },

            tie() {
                setResult("tie");
            }
        });
    }

    function updateChoice(newChoice) {
        setChoices({
            ...choices,
            ...newChoice
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor={'player-one-choice'}>
                    Player 1
                </label>
                <input id={'player-one-choice'} type="text" value={choices.player1} onChange={event => updateChoice({player1: event.target.value})}/>

                <label htmlFor={'player-two-choice'}>
                    Player 2
                </label>
                <input id={'player-two-choice'} type="text" value={choices.player2} onChange={event => updateChoice({player2: event.target.value})}/>

                <input type="submit" value="Play"/>
            </form>
            <p>{result}</p>
        </div>
    );
}

export default App;
