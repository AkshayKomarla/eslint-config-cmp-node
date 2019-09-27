# CMP Node.js - ESLint & Prettier Setup

## DEMO
![demo](https://raw.githubusercontent.com/AkshayKomarla/eslint-config-cmp-node/master/module_demo.gif)

## What it does
* Fixes linting & code formatting errors on SAVE (CTRL + S)
* Enforces strict coding standard by making code more consistent & avoiding bugs across the team & all repositories.
* Linting JavaScript is based on the latest standards using `eslint-config-airbnb-base`

### 1. Install Packages

```
npx install-peerdeps --dev eslint-config-cmp-node
```

### 2. Create `.eslintrc` file

```json
{
  "extends": ["cmp-node"]
}
```

### 3. VS Code Setup. This will help us fix most of the linting & prettier issues **ON SAVE** (CTRL + S)
-  Install [ESLint VSCode Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings` .
                        **OR** 
 Create `settings.json` in `.vscode` folder and add the below settings.

```json
{
    "editor.formatOnSave": true,
    "eslint.autoFixOnSave": true
}
  ```

### 5. To overwrite eslint or prettier settings, just extend the rules in your `.eslintrc` file like this.

```json
{
  "extends": [
    "cmp-node"
  ],
  "rules": {
    "prettier/prettier": [        // Prettier Rules.
      "error",
      {
        "singleQuote": true,
        "tabWidth": 8,
      }
    ],
    "no-console": 2,              // EsLint Rules.
  }
}
```

### Reference
* ESLint Rules - https://eslint.org/docs/rules/
* Prettier Options - https://prettier.io/docs/en/options.html
* Airbnb Style Guide - https://github.com/airbnb/javascript