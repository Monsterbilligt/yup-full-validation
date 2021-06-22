# yup-full-validation
A helper function to quickly validate an entire object using yup schemas

## Set up Github packages, if you haven't already

In order to use this package from the Github registry, you'll need to set up the your client to use the Github registry. These are the steps you need to take.

The following steps are based on [this guide](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages).

1. Create a personal access token for your Github account, following [this guide](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). Be sure to add read access to packages.
2. Add the PAT to **~/.npmrc** (add a line or create the file):
```
//npm.pkg.github.com/:_authToken=TOKEN
```
3. Add a **.npmrc** file to the root of the project directory, that contains the following lines:
```
registry=https://registry.npmjs.org/
@monsterbilligt:registry=https://npm.pkg.github.com/
```

## Install

`npm i @monsterbilligt/yup-full-validation`

## Usage

Generally do the following:

```js
import { validate, validateSync } from '@monsterbilligt/yup-full-validation'
import * as yup from 'yup'

const schema = yup.object().shape({
  /* ... */
})

const form = {
  /* ... */
}

validate(schema, form)
  .then(result => {
    console.log(result)
  })

const result = validateSync(schema, form)

```
