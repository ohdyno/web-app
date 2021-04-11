function playRound(player1Choice, player2Choice, ui) {
    function isInvalid() {
        function isValid(choice) {
            const validChoices = ['rock', 'paper', 'scissors'];
            return validChoices.includes(choice);
        }

        return !isValid(player1Choice) || !isValid(player2Choice);
    }

    if (isInvalid()) {
        ui.invalid();
        return;
    }

    function tie() {
        return player1Choice === player2Choice;
    }

    if (tie()) {
        ui.tie();
        return;
    }

    function player1Wins(player1Choice, player2Choice) {
        return player1Choice === 'rock' && player2Choice === 'scissors' ||
            player1Choice === 'scissors' && player2Choice === 'paper' ||
            player1Choice === 'paper' && player2Choice === 'rock';
    }

    if (player1Wins(player1Choice, player2Choice)) {
        ui.player1Wins();
        return;
    }

    ui.player2Wins();
}

module.exports = class {
    roundsRepository;

    constructor(roundsRepository) {
        this.roundsRepository = roundsRepository;
    }

    playRound(player1Choice, player2Choice, ui) {
        const roundsRepository = this.roundsRepository;
        const playRoundResultRecorder = {
            player1Wins() {
                ui.player1Wins();
            },

            player2Wins() {
                ui.player2Wins();
                roundsRepository.push({
                    player1: player1Choice,
                    player2: player2Choice,
                    result: 'player 2 wins'
                })
            },

            invalid() {
                ui.invalid();
            },

            tie() {
                ui.tie();
            }
        };
        playRound(player1Choice.toLowerCase(), player2Choice.toLowerCase(), playRoundResultRecorder);
    }

    history(ui) {
        if (this.roundsRepository.length === 0) {
            ui.noHistory();
        } else {
            ui.roundsPlayed(this.roundsRepository);
        }
    }
}
