
module.exports = {
    testEnvironment: 'jsdom',
    roots: [
        '<rootDir>/src'
    ],
    verbose: true,
    transform: {
        '^.+\\.jsx?$': ['babel-jest', { configFile: "./babel.jest.config.json" }],
    },
    moduleNameMapper: {
        "^.+\\.(css)$": "identity-obj-proxy"
    }
}
