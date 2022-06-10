const { join, strings } = require('@angular-devkit/core');
const { url, template, apply, mergeWith, move } = require('@angular-devkit/schematics');

function main() {
    return mergeWith(generate());
}

function generate() {
    return apply(url(join('./files')), [
        template({
            ...strings,
        }),
        move('.tmp_eslint'),
    ]);
}

exports.main = main;
