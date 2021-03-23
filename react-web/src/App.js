import React, {useState, useEffect} from 'react';

function App({game}) {
    let [result, setResult] = useState("");

    useEffect(() => {
        game.playRound('foo', 'bar', {
            player2Wins() {
                setResult("player 2 wins");
            },

            player1Wins() {
                setResult("player 1 wins");
            }
        })
    })

    return (
        <p>{result}</p>
    );
}

export default App;
