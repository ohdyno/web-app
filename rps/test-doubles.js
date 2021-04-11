function PlayRoundSpy() {
    this.player1Wins = jest.fn();
    this.player2Wins = jest.fn();
    this.tie = jest.fn();
    this.invalid = jest.fn();
}

module.exports = {
    PlayRoundSpy
}
