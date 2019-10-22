# yup-full-validation
A helper function to quickly validate an entire object using yup schemas

## Install

`npm install Monsterbilligt/yup-full-validation`

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


[<img src="https://i1.wp.com/www.diogonunes.com/blog/wp-content/uploads/2016/07/browserstack-logo.png?resize=768%2C253&ssl=1" width="200" height="auto">](https://www.browserstack.com/)
