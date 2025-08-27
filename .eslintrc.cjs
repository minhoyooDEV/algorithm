module.exports = {
  root: true,
  env: { es2022: true, node: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/no-unresolved': 'off'
  }
}
