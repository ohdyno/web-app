'use strict';

function playSuccessSound() {
    beep();
}

function playFailureSound() {
    beep();
    setTimeout(beep, 250)
}

function beep() {
    process.stdout.write('\x07')
}

module.exports = class {
    onRunComplete(contexts, results) {
        if (results.numFailedTests === 0) {
            playSuccessSound();
        } else {
            playFailureSound();
        }
    }
}
