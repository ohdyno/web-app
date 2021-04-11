import React, {useState} from 'react';

function App({game}) {
    const [round, setRound] = useState({
        player1: '',
        player2: '',
        result: ''
    })

    function updateResult(result) {
        setRound({
            ...round,
            result: result
        })
    }

    function updateChoice(newChoice) {
        setRound({
            ...round,
            ...newChoice
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        game.playRound(round.player1, round.player2, {
            player2Wins() {
                updateResult("player 2 wins");
            },

            player1Wins() {
                updateResult("player 1 wins");
            },

            tie() {
                updateResult("tie");
            },

            invalid() {
                updateResult("invalid");
            }
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor={'player-one-choice'}>
                    Player 1
                </label>
                <input id={'player-one-choice'} type="text" value={round.player1} onChange={event => updateChoice({player1: event.target.value})}/>

                <label htmlFor={'player-two-choice'}>
                    Player 2
                </label>
                <input id={'player-two-choice'} type="text" value={round.player2} onChange={event => updateChoice({player2: event.target.value})}/>

                <input type="submit" value="Play"/>
            </form>
            <p>{JSON.stringify(round)}</p>
        </div>
    );
}

export default App;
