# eslint-config-pi

> This is our eslint config at Purpose Industries.

## Usage

### Basic

You can use our basic rule set by following the instructions below.

It's handy when you don't want to use fancy stuff like es6 or react.

```sh
$ npm i -D eslint-config-pi eslint
```

Then add it to your .eslintrc

```
{
  "extends": "pi"
}
```

### ES6

If you'd like to use our es6 rule set:

```sh
$ npm i -D eslint-config-pi babel-eslint eslint-plugin-babel eslint
```

You can add this to your .eslintrc in this way:

```
{
  "extends": "pi/es6"
}
```

### React

And finally, we have a React rule set as well:

```sh
$ npm i -D eslint-config-pi eslint-plugin-react eslint
```

guess what:

```
{
  "extends": "pi/react"
}
```

## Composition

Of course, you can use any combination of these shareable configs you want.

For example, if you want to create a project using the power es6 and react including
the basics, just do the following.

Install the dependencies accordingly:

```sh
$ npm i -D eslint-config-pi babel-eslint eslint-plugin-react eslint-plugin-babel eslint
```

.eslintrc:

```
{
  "extends": [
    "pi",
    "pi/es6",
    "pi/react"
  ]
}
```

## Notes

Eslint config properties like `env` or `globals` are strongly
project specific so you have to set them in your own .eslintrc file.

For instance:

```
{
  "env": {
    "browser": true
  },
  "globals": {
    "React": true
  },
  "extends": [
    "pi",
    "pi/react"
  ]
}
```

And that's all. :sunglasses:

Happy Coding! :coffee: :octocat:

## License

[MIT](LICENSE) &copy; Purpose Industries
