module.exports = class {
    playRound(player1Choice, player2Choice, ui) {
        if (this.player1Wins(player1Choice, player2Choice)) {
            ui.player1Wins();
            return;
        }

        ui.player2Wins();
    }

    player1Wins(player1Choice, player2Choice) {
        return player1Choice === 'rock' ||
            player1Choice === 'scissors' && player2Choice === 'paper';
    }
}
