const Game = require('./index');

describe('player 1 wins scenarios', () => {
    test('rock vs scissors', () => {
        const uiSpy = {
            player1Wins: jest.fn()
        };

        new Game().playRound('rock', 'scissors', uiSpy)

        expect(uiSpy.player1Wins).toBeCalled();
    })

    test('scissors vs paper', () => {
        const uiSpy = {
            player1Wins: jest.fn()
        };

        new Game().playRound('scissors', 'paper', uiSpy)

        expect(uiSpy.player1Wins).toBeCalled();
    })
})

describe('player 2 wins scenarios', () => {
    test('scissors vs rock', () => {
        const uiSpy = {
            player2Wins: jest.fn()
        };

        new Game().playRound('scissors', 'rock', uiSpy)

        expect(uiSpy.player2Wins).toBeCalled();
    })

    test('rock vs paper', () => {
        const uiSpy = {
            player2Wins: jest.fn()
        };

        new Game().playRound('rock', 'paper', uiSpy)

        expect(uiSpy.player2Wins).toBeCalled();
    })
})
