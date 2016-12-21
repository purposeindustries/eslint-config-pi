module.exports = {
  "plugins": ["react"],
  "ecmaFeatures": {
    "jsx": true
  },
  "rules": {
    "jsx-quotes": [2, "prefer-double"],
    "react/display-name": [1, { "ignoreTranspilerName": true }],
    "react/forbid-prop-types": 0,
    "react/no-danger": 2,
    "react/no-deprecated": [2, { "react": "15.0.0" }],
    "react/no-did-mount-set-state": [2, "allow-in-func"],
    "react/no-did-update-set-state": [2, "allow-in-func"],
    "react/no-direct-mutation-state": 2,
    "react/no-is-mounted": 2,
    "react/no-multi-comp": 0,
    "react/no-set-state": 0,
    "react/no-string-refs": 1,
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": [1, "never"],
    "react/prefer-stateless-function": 0,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 1,
    "react/require-extension": 2,
    "react/require-render-return": 2,
    "react/self-closing-comp": 1,
    "react/sort-comp": 0,
    "react/jsx-sort-prop-types": 0,
    "react/wrap-multilines": 2,
    "react/jsx-boolean-value": [1, "always"],
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-curly-spacing": [2, "always"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-handler-names": 0,
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": [1, { "maximum": 3 }],
    "react/jsx-no-bind": 0,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 0,
    "react/jsx-no-target-blank": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-space-before-closing": [2, "always"],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
  }
};
