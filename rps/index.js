module.exports = class {
    playRound(player1Choice, player2Choice, ui) {
        if (player1Choice === 'rock' ||
            player1Choice === 'scissors' && player2Choice === 'paper') {
            ui.player1Wins();
            return;
        }

        ui.player2Wins();
    }
}
