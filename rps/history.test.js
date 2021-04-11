const Game = require('./index');
const {PlayRoundSpy, HistoryUISpy} = require("./test-doubles");

const game = new Game();

describe('game history', () => {
    let uiSpy;

    beforeEach(() => {
        uiSpy = new HistoryUISpy();
    })

    it('reports no history when no rounds have been played', () => {
        game.history(uiSpy);
        expect(uiSpy.noHistory).toBeCalled();
    })

    it('reports player choices and result when one round has been played', () => {
        game.playRound('rock', 'paper', new PlayRoundSpy())

        game.history(uiSpy);

        expect(uiSpy.roundsPlayed).toBeCalledWith([
            {player1: 'rock', player2: 'paper', result: 'player 2 wins'}
        ]);
    })
})
