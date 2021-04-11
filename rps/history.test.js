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

    it('reports all rounds that have been played', () => {
        game.playRound('rock', 'paper', new PlayRoundUISpy())
        game.playRound('paper', 'rock', new PlayRoundUISpy())
        game.playRound('ROCK', 'paper', new PlayRoundUISpy())
        game.playRound('rock', 'sailboat', new PlayRoundUISpy())
        game.playRound('rock', 'rock', new PlayRoundUISpy())

        game.history(uiSpy);

        expect(uiSpy.roundsPlayed).toBeCalledWith([
            {player1: 'rock', player2: 'paper', result: 'player 2 wins'},
            {player1: 'paper', player2: 'rock', result: 'player 1 wins'},
            {player1: 'ROCK', player2: 'paper', result: 'player 2 wins'},
            {player1: 'rock', player2: 'sailboat', result: 'invalid'},
            {player1: 'rock', player2: 'rock', result: 'tie'},
        ]);
    })
})
