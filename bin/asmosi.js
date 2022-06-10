const commander = require('commander');
const CommandLoader = require('../src/commands/command.loader');

commander
    .version(require('../package.json').version, '-v, --version', 'Output is current version')
    .usage('<command> [options]')
    .helpOption('-h, --help', 'Output usage information.');

CommandLoader.load(commander);

commander.parse(process.argv);

if (!process.argv.slice(2).length) {
    commander.outputHelp();
}
