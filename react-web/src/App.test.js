import {render, screen} from '@testing-library/react';
import App from './App';

test('when player 2 wins, display player 2 wins', () => {
    let player2WinStub = {
        playRound(player1Choice, player2Choice, ui) {
            ui.player2Wins();
        }
    };

    render(<App game={player2WinStub}/>);

    expect(screen.getByText(/player 2 wins/i)).toBeInTheDocument();
});

test('when player 1 wins, display player 1 wins', () => {
    let player1WinStub = {
        playRound(player1Choice, player2Choice, ui) {
            ui.player1Wins();
        }
    };

    render(<App game={player1WinStub}/>);

    expect(screen.getByText(/player 1 wins/i)).toBeInTheDocument();
});
