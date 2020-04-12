module.exports = {
  setupFiles: [
    './test/jestsetup.js',
  ],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|s[ac]ss)$': 'identity-obj-proxy',
  },
};
