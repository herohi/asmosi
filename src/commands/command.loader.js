const InitCommand = require('./init.command');
const InitAction = require('../actions/init.action');

class CommandLoader {
    static load(commander) {
        new InitCommand(new InitAction()).load(commander);
    }
}

module.exports = CommandLoader;
