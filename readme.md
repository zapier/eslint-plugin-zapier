# eslint-config-zapier

Shareable recommended rule configuration for internal Zapier usage.

## Installation

```
npm install --save-dev eslint-config-zapier
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-zapier` globally.

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

## Versioning Policy

`eslint-config-zapier` follows a semantic versioning policy along the lines of [ESLint's semver policy](https://github.com/eslint/eslint#semantic-versioning-policy):

Major releases:
- changing existing rules or adding new rules (more linting errors reported)

Minor releases:
- disabling or removing rules (less linting errors reported)

Patch releases:
- bug fixes
- doc changes
- non user-facing changes
