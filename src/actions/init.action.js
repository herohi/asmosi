const fs = require('fs');
const path = require('path');
const { spawn, exec } = require('child_process');

const hasFile = fileName => fs.existsSync(fileName);

class InitAction {
    files = ['.eslintrc.js', '.eslintignore', '.prettierrc.js'];

    async handle({ noHusky }) {
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
            this.files
                .filter(fileName => !hasFile(fileName))
                .forEach(fileName => {
                    fs.copyFileSync(
                        path.join(process.cwd(), `./.tmp_eslint/${fileName}`),
                        path.join(process.cwd(), `${fileName}`)
                    );
                });

            exec(`rm -rf .tmp_eslint`);
        });

        if (!noHusky) {
            try {
                const packageJson = require(path.join(process.cwd(), './package.json'));

                if (!packageJson.husky) {
                    packageJson.husky = {
                        hooks: {
                            'pre-commit': 'lint-staged',
                        },
                    };

                    packageJson['lint-staged'] = {
                        '**/*.{js,jsx,ts,tsx,vue}': 'eslint',
                    };
                }

                fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2), () => {});
            } catch (err) {
                console.log('Error on Add husky to package.json');

                console.error(err);
            }
        } else {
            console.log('noHusky: true');
        }
    }
}

module.exports = InitAction;
