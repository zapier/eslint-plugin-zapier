# eslint-plugin-zapier

Shareable recommended rule configuration and custom rules for internal Zapier usage.

## Installation

```
npm install --save-dev eslint-plugin-zapier
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-zapier` globally.

## Usage

Add `zapier` to the `plugins` and `extends` section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["zapier"],
  "extends": ["plugin:zapier/base"],
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

## Prettier Support

If you're using prettier, you can extend from `plugin:zapier/prettier` instead to turn-off all rules from this config that would conflict with prettier:

```json
{
  "extends": [
    "plugin:zapier/prettier"
  ]
}
```

Note that this does **not** enable prettier in the consuming project. It only disables all ESLint rules that would otherwise conflict with prettier.

## Versioning Policy

`eslint-plugin-zapier` follows a semantic versioning policy along the lines of [ESLint's semver policy](https://github.com/eslint/eslint#semantic-versioning-policy):

Major releases:
- changing existing rules or adding new rules (more linting errors reported)

Minor releases:
- disabling or removing rules (less linting errors reported)

Patch releases:
- bug fixes
- doc changes
- non user-facing changes
