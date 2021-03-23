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
