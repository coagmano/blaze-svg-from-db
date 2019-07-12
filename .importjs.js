module.exports = {
    declarationKeyword: 'import',
    environments: ['meteor', 'node'],
    excludes: ['.meteor/local/**', '.vscode/**'],
    namedExports: {
        'meteor/underscore': ['_'],
        'meteor/jquery': ['$'],
    },
    useRelativePaths: false,
};
