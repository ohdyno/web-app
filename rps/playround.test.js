const Game = require('./index');
const {PlayRoundSpy} = require('./test-doubles')

const game = new Game();

describe('play rounds', () => {
    let uiSpy;

    beforeEach(() => {
        uiSpy = new PlayRoundSpy();
    })

    describe('player 1 wins scenarios', () => {
        test('rock vs scissors', () => {
            game.playRound('rock', 'scissors', uiSpy)

            expect(uiSpy.player1Wins).toBeCalled();
        })

        test('scissors vs paper', () => {
            game.playRound('scissors', 'paper', uiSpy)

            expect(uiSpy.player1Wins).toBeCalled();
        })

        test('paper vs rock', () => {
            game.playRound('paper', 'rock', uiSpy)

            expect(uiSpy.player1Wins).toBeCalled();
        })
    })

    describe('player 2 wins scenarios', () => {

        test('scissors vs rock', () => {
            game.playRound('scissors', 'rock', uiSpy)

            expect(uiSpy.player2Wins).toBeCalled();
        })

        test('rock vs paper', () => {
            game.playRound('rock', 'paper', uiSpy)

            expect(uiSpy.player2Wins).toBeCalled();
        })

        test('paper vs scissors', () => {
            game.playRound('paper', 'scissors', uiSpy)

            expect(uiSpy.player2Wins).toBeCalled();
        })
    })

    describe('tie scenarios', () => {

        test('rock vs rock', () => {
            game.playRound('rock', 'rock', uiSpy)

            expect(uiSpy.tie).toBeCalled();
        })

        test('paper vs paper', () => {
            game.playRound('paper', 'paper', uiSpy)

            expect(uiSpy.tie).toBeCalled();
        })

        test('scissors vs scissors', () => {
            game.playRound('scissors', 'scissors', uiSpy)

            expect(uiSpy.tie).toBeCalled();
        })
    })

    describe('edge case choices', () => {
        describe('invalid choices', () => {
            test('invalid player 1 choice', () => {
                game.playRound('sailboat', 'rock', uiSpy)

                expect(uiSpy.invalid).toBeCalled();
            })

            test('invalid player 2 choice', () => {
                game.playRound('rock', 'sailboat', uiSpy)

                expect(uiSpy.invalid).toBeCalled();
            })
        })

        test('different cases', () => {
            game.playRound('Rock', 'paPer', uiSpy)

            expect(uiSpy.player2Wins).toBeCalled();
        })
    })
})
