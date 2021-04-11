const Game = require('./index');
const {PlayRoundUISpy, HistoryUISpy} = require("./test-doubles");


describe('game history', () => {
    let uiSpy;
    let game;

    beforeEach(() => {
        uiSpy = new HistoryUISpy();
        game = new Game([]);
    })

    it('reports no history when no rounds have been played', () => {
        game.history(uiSpy);
        expect(uiSpy.noHistory).toBeCalled();
    })

    it('reports player choices and result when one round has been played', () => {
        game.playRound('rock', 'paper', new PlayRoundUISpy())

        game.history(uiSpy);

        expect(uiSpy.roundsPlayed).toBeCalledWith([
            {player1: 'rock', player2: 'paper', result: 'player 2 wins'}
        ]);
    })
})
