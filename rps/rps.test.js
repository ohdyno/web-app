const Game = require('./index');

test('rock vs scissors results in player 1 wins', () => {
    const uiSpy = {
        player1Wins: jest.fn()
    };

    new Game().playRound('rock', 'scissors', uiSpy)

    expect(uiSpy.player1Wins).toBeCalled();
})
