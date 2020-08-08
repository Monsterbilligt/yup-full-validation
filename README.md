# yup-full-validation
A helper function to quickly validate an entire object using yup schemas

## Install

`npm install Monsterbilligt/yup-full-validation#v0.1.4`

## Usage

Generally do the following:

```js
import { validate, validateSync } from 'yup-full-validation'
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
