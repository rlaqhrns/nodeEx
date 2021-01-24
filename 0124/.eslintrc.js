module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
    },
    plugins: ['react'],
    rules: { indent: ['error', 4], 'no-unused-vars': 1, 'no-use-before-define': 1, 'no-redeclare': 1, 'no-console': 0 },
};