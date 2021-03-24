const {exec} = require('child_process');

module.exports = class {
    onRunComplete(contexts, results) {
        if (results.numFailedTests === 0) {
            exec('afplay ./success.aiff');
        } else {
            exec('afplay ./failure.aiff');
        }
    }
}
