const AbstractCommand = require('./command.abstract');

class InitCommand extends AbstractCommand {
    load(commander) {
        commander
            .command('init')
            .option('--noHusky', `Don't add husky + lintstage config to package.json`)
            .description('init eslint config files.')
            .action(async command => {
                const { noHusky } = command;

                await this.action.handle({
                    noHusky,
                });
            });
    }
}

module.exports = InitCommand;
