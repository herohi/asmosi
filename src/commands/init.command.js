const AbstractCommand = require('./command.abstract');

class InitCommand extends AbstractCommand {
    load(commander) {
        commander
            .command('init')
            .description('init eslint config files.')
            .action(async () => {
                await this.action.handle();
            });
    }
}

module.exports = InitCommand;
