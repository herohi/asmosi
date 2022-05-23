# asmosi

🎃 asmosi - 前端代码规范

> 使用 eslint + prettier + husky + lint-staged 规范前端项目代码

## ✨ Feature

🎉 Support ESLint preset config for .vue, .js, .ts, .tsx file.

🎉 Support Prettier preset config.

## 📦 Install

```
yarn add -D asmosi
```

## 🔨 Usage

### ESLint

#### 1. Create `.eslintrc.js`:

```js
module.exports = {
  root: true,
  extends: ['./node_modules/asmosi/eslint'],
  rules: {
    // Custom Rules
    // ...
  }
};
```

#### 2. Create `.eslintignore`

```ignorelang
node_modules
```

#### 3. Add lint command

Add `"lint": "eslint --ext .js,.jsx,.ts,.tsx,.vue ."` to package.json's scripts

`yarn lint`：check full code
`yarn lint --fix`：automatically fix most problems with full code

### Prettier

1. Create `.prettierrc.js`

```js
module.exports = {
  ...require('asmosi/prettier'),
  // Custom Config
};
```

> If you want to know more about prettier configuration, you can see https://prettier.io/docs/en/configuration.html.

### Eslint & Husky & Lint-Stage

Write to `package.json`

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "**/*.{js,jsx,ts,tsx,vue}": "eslint"
}
```

### Custom Configurations

Theses are default configurations（fileType: using rule）:

- `.js`: base
- `.ts`: base + typescript
- `.tsx`: base + react + typescript
- `.vue`: base + vue

About rules env:

- base: `{ es6: true, commonjs: true }`
- react: `{ browser: true }`

However, these configurations do not include the following situations.

#### 1. React code ending in `.js` or `.jsx`

You can use `overrides` in `.eslintrc.js` to deal with this scene.

```js
overrides: [
  {
    files: ['path/to/your/react-code/*.js', 'path/to/your/react-code/*.jsx'],
    extends: [require.resolve('eslint-config-fespsp/rules/react')],
  },
]
```

#### 2. Node code ending in `.js`

```js
overrides: [
  {
    files: ['path/to/your/node-code/*.js'],
    env: {
      node: true,
    }
  },
],
```
