module.exports = class {
    playRound(player1Choice, player2Choice, ui) {
        if (player1Choice === player2Choice) {
            ui.tie();
            return;
        }

        if (this.player1Wins(player1Choice, player2Choice)) {
            ui.player1Wins();
            return;
        }

        ui.player2Wins();
    }

    player1Wins(player1Choice, player2Choice) {
        return player1Choice === 'rock' && player2Choice === 'scissors'||
            player1Choice === 'scissors' && player2Choice === 'paper' ||
            player1Choice === 'paper' && player2Choice === 'rock';
    }
}
