# eslint-config-zapier

Shareable recommended rule configuration for internal Zapier usage.

## Installation

First, install `eslint-config-zapier`:

```
npm install --save-dev eslint-config-zapier
```

Next, install all its peer dependencies:

```
(
  export PKG=eslint-config-zapier;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/@/@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-zapier` and its peer dependencies globally.

## Usage

Add `zapier` to the `extends` section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "extends": [
        "zapier"
    ]
}
```

You may optionally configure any specific rules you want to override under the `rules` section:

```json
{
    "rules": {
        "semi": "off"
    }
}
```
