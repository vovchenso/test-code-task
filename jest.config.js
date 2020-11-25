module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        "src/(.*)": "<rootDir>/src/$1"
    },
    "setupFiles": [
        "<rootDir>/test-setup.js"
    ]
}
