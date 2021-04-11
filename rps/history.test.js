const Game = require('./index');

const game = new Game();

describe('game history', () => {
    it('reports no history when no rounds have been played', () => {
        const uiSpy = {
            noHistory: jest.fn()
        };
        game.history(uiSpy);
        expect(uiSpy.noHistory).toBeCalled();
    })

    it('reports player choices and result when one round has been played', () => {
        const uiSpy = {
            roundsPlayed: jest.fn()
        };
        game.playRound('rock', 'paper', {
            player2Wins() {
            }
        })
        game.history(uiSpy);
        expect(uiSpy.roundsPlayed).toBeCalledWith([
            {player1: 'rock', player2: 'paper', result: 'player 2 wins'}
        ]);
    })
})
