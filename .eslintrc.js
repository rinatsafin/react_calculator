module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
      "airbnb",
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 6,
      "ecmaFeatures": {
        "jsx": true,
        "modules": true,
        "experimentalObjectRestSpread": true
      },
      "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "react/jsx-filename-extension": [ 1, 
        {
           "extensions": [".js", ".jsx"] 
        }
      ],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/prop-types": [
          1, 
          { 
            ignore: [ 
              'children'
            ]
          }
        ],
        // propTypes: {
        //   children: React.PropTypes.oneOfType([
        //     React.PropTypes.arrayOf(React.PropTypes.node),
        //     React.PropTypes.node,
        //     React.PropTypes.element.isRequired,
        //     React.PropTypes.node.isRequired
        //   ])
        // },
        // getDefaultProps: function() {
        //   return {
        //     children: null // or [] I guess
        //   };
        // },
        "comma-dangle": 0,
        "react/jsx-uses-vars": 1,
        "react/display-name": 1,
        "no-unused-vars": "warn",
        "no-console": 1,
        "no-unexpected-multiline": "warn"
    }
};