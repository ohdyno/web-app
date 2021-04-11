function PlayRoundSpy() {
    this.player1Wins = jest.fn();
    this.player2Wins = jest.fn();
    this.tie = jest.fn();
    this.invalid = jest.fn();
}

function HistoryUISpy() {
    this.noHistory = jest.fn();
    this.roundsPlayed = jest.fn();
}

module.exports = {
    PlayRoundSpy,
    HistoryUISpy,
}
