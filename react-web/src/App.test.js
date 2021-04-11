import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('when player 2 wins, display player 2 wins', () => {
    let player2WinStub = {
        playRound(player1Choice, player2Choice, ui) {
            ui.player2Wins();
        }
    };

    render(<App game={player2WinStub}/>);

    userEvent.click(screen.getByDisplayValue(/play/i));

    expect(screen.getByText(/player 2 wins/i)).toBeInTheDocument();
});

test('when player 1 wins, display player 1 wins', () => {
    let player1WinStub = {
        playRound(player1Choice, player2Choice, ui) {
            ui.player1Wins();
        }
    };

    render(<App game={player1WinStub}/>);

    userEvent.click(screen.getByDisplayValue(/play/i));

    expect(screen.getByText(/player 1 wins/i)).toBeInTheDocument();
});

test('when it is a tie, display tie', () => {
    let tieStub = {
        playRound(player1Choice, player2Choice, ui) {
            ui.tie();
        }
    };

    render(<App game={tieStub}/>);

    userEvent.click(screen.getByDisplayValue(/play/i));

    expect(screen.getByText(/tie/i)).toBeInTheDocument();
});

test('when it is invalid, display invalid', () => {
    let invalidStub = {
        playRound(player1Choice, player2Choice, ui) {
            ui.invalid();
        }
    };

    render(<App game={invalidStub}/>);

    userEvent.click(screen.getByDisplayValue(/play/i));

    expect(screen.getByText(/invalid/i)).toBeInTheDocument();
});

test('when user clicks play, send player 1 choice and player 2 choice to the game', () => {
    let gameSpy = {
        playRound: jest.fn()
    };

    render(<App game={gameSpy}/>);

    userEvent.type(screen.getByLabelText(/player 1/i), 'foo')
    userEvent.type(screen.getByLabelText(/player 2/i), 'bar')

    userEvent.click(screen.getByDisplayValue(/play/i));

    expect(gameSpy.playRound).toBeCalledWith('foo', 'bar', expect.anything());
});
