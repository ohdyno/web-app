const {exec} = require('child_process');

module.exports = class {
    onRunComplete(contexts, results) {
        if (results.numFailedTests === 0) {
            exec('afplay ../sounds/success.aiff');
        } else {
            exec('afplay ../sounds/failure.aiff');
        }
    }
}
