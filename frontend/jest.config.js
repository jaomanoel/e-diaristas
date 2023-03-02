export default {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: [
        '<rootDir>/node_modules'
    ],
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    setupFilesAfterEnv: [
        '<rootDir>/setupTests.js',
    ]
};