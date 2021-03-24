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

test('scissors vs rock results in player 2 wins', () => {
    const uiSpy = {
        player2Wins: jest.fn()
    };

    new Game().playRound('scissors', 'rock', uiSpy)

    expect(uiSpy.player2Wins).toBeCalled();
})
