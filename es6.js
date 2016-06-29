module.exports = {
  "plugins": ["babel"],
  "parser": "babel-eslint",
  "env": {
    "es6": true
  },
  "ecmaFeatures": {
    "modules": true
  },
  "rules": {
    "arrow-body-style": 0,
    "babel/arrow-parens": 0,
    "arrow-spacing": [2, { "before": true, "after": true }],
    "constructor-super": 1,
    "babel/generator-star-spacing": [2, "after"],
    "no-class-assign": 2,
    "no-confusing-arrow": [2, { "allowParens": true }],
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-duplicate-imports": 2,
    "no-new-symbol": 2,
    "no-restricted-imports": [2, "jquery", "underscore"],
    "no-this-before-super": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-useless-rename": 0,
    "no-var": 2,
    "babel/object-shorthand": 0,
    "prefer-arrow-callback": [1, { "allowNamedFunctions": true }],
    "prefer-const": 1,
    "prefer-reflect": 1,
    "prefer-rest-params": 1,
    "prefer-spread": 1,
    "prefer-template": 0,
    "sort-imports": 0,
    "template-curly-spacing": 0,
    "yield-star-spacing": [2, "after"]

  }
}
