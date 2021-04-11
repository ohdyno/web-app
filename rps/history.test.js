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
})
