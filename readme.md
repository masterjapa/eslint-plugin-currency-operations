# Eslint Plugin Currency Operations

This plugin aims to help to prevent floating point issues in javascript such as:

```
2.51 + .01;         // => 2.5199999999999996
2.52 - .01;         // => 2.5100000000000002
```

## Instalation

With npm:

```bash
npm install --save-dev eslint-plugin-currency-operations
```

With yart:

```bash
yarn add -D eslint-plugin-currency-operations
```

## Rules

### no-manual-currency-math

It triggers a warning when floating point operations with "+", "-", "/", "\*" operations are done.

```javascript
// valid
const sum = 1 + 2;

// invalid
const total = 1 + 0.2;
```

## Setup in your project

To setup in your project simply install as a dev dependency and then add it in the `eslint` configuration file in the `plugins` section and if desired adjust the rule severity in the `rules`

```javascript
// eslint config
{
    ...,
    "plugins": ["currency-operations"],
    "rules": {
            "currency-operations/no-manual-currency-math": "error"
    }
}
```
