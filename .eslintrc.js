module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "airbnb-base",
        "prettier",
        "plugin:node/recommended"
    ],
    "plugins": [
        "prettier"
    ],
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "singleQuote": false
            }
        ],
        "prettier/singleQuote": "off",
        "no-unused-vars": "warn",
        "no-console": "off",
        "func-names": "off",
        "no-process-exit": "off",
        "object-shorthand": "off",
        "class-methods-use-this": "off",
        "no-return-assign": "error",
        "no-useless-catch": "off",
        "strict": "off",
        "spaced-comment": "error",
        "no-await-in-loop": "error",
        "require-await": "error",
        "no-plusplus": "off",
        "no-unused-expressions": "off",
        "require-await": "off",
        "consistent-return": ["error", { "treatUndefinedAsUnspecified": true }],
        "no-param-reassign": ["error", { "props": false }]
    }
}