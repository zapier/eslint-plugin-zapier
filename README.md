> Moved to https://github.com/zapier/zapier/tree/develop/packages/libraries/eslint-plugin-zapier.


# eslint-plugin-zapier

Shareable recommended rule configuration and custom rules for internal Zapier usage.

[![Build Status](https://travis-ci.org/zapier/eslint-plugin-zapier.svg?branch=master)](https://travis-ci.org/zapier/eslint-plugin-zapier)

## Installation

```
yarn add --dev @zapier/eslint-plugin-zapier
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-zapier` globally.

## Usage

Add `@zapier/zapier` to the `plugins` and `extends` section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@zapier/zapier"],
  "extends": ["plugin:@zapier/zapier/base"],
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

If you're using prettier, you can extend from `plugin:@zapier/zapier/prettier` instead to turn-off all rules from this config that would conflict with prettier:

```json
{
  "extends": [
    "plugin:@zapier/zapier/prettier"
  ]
}
```

Note that this does **not** enable prettier in the consuming project. It only disables all ESLint rules that would otherwise conflict with prettier.

## Versioning Policy

`eslint-plugin-zapier` follows a semantic versioning policy along the lines of [ESLint's semver policy](https://github.com/eslint/eslint#semantic-versioning-policy):

Major releases:
In general, any change that could cause more errors to be reported on the consumer's CI should be considered a major release. Examples:
- adding new rules that are on by default in one of the presets
- changing existing rules, if it causes more errors

Minor releases:
- disabling or removing rules (less linting errors reported)
- changing existing rules, if it doesn't cause more errors
- adding new rules, if they are not on by default in any preset

Patch releases:
- bug fixes
- doc changes
- non user-facing changes
