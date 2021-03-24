const Game = require('./index');

const game = new Game();

describe('player 1 wins scenarios', () => {
    let uiSpy;

    beforeEach(() => {
        uiSpy = {
            player1Wins: jest.fn()
        };
    })

    test('rock vs scissors', () => {
        game.playRound('rock', 'scissors', uiSpy)

        expect(uiSpy.player1Wins).toBeCalled();
    })

    test('scissors vs paper', () => {
        game.playRound('scissors', 'paper', uiSpy)

        expect(uiSpy.player1Wins).toBeCalled();
    })
})

describe('player 2 wins scenarios', () => {
    let uiSpy;

    beforeEach(() => {
        uiSpy = {
            player2Wins: jest.fn()
        };
    })

    test('scissors vs rock', () => {
        game.playRound('scissors', 'rock', uiSpy)

        expect(uiSpy.player2Wins).toBeCalled();
    })

    test('rock vs paper', () => {
        game.playRound('rock', 'paper', uiSpy)

        expect(uiSpy.player2Wins).toBeCalled();
    })
})
