# yup-full-validation
A helper function to quickly validate an entire object using yup schemas

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
