const path = require('path');
const { spawn, exec } = require('child_process');

class InitAction {
    async handle() {
        const schematicsPath = path.resolve(__dirname, '../../schematics');

        const grep = spawn(
            'node',
            [
                require.resolve('@angular-devkit/schematics-cli/bin/schematics.js', {
                    paths: module.paths,
                }),
                `${schematicsPath}:init --no-dry-run --no-skipImport --spec`,
            ],
            {
                cwd: process.cwd(),
                stdio: 'inherit',
                shell: true,
            }
        );

        grep.on('close', () => {
            exec('cp -r ./.tmp_eslint/. . && rm -rf .tmp_eslint');
        });
    }
}

module.exports = InitAction;
