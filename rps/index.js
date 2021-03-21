module.exports = class {
    playRound(player1Choice, player2Choice, ui) {
        if (player1Choice === 'rock') {
            ui.player1Wins();
            return;
        }

        ui.player2Wins();
    }
}
