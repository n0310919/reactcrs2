module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "off"
        ],
        "linebreak-style": "off",
        "quotes": "off",
        "semi": "off",
        "no-console": [
            "off"
        ],
        "react/jsx-uses-react": 1, 
        "react/jsx-uses-vars": 1, 
        "react/react-in-jsx-scope": 1

    }
};