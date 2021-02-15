/* globals describe, it */

const yup = require('yup')
const assert = require('assert')
const deep = require('@monsterbilligt/deep-tinker')
const { validate, validateSync } = require('..')

const schema = yup.object().shape({
  foo: yup.object().shape({
    bar: yup.string().required()
  }).required(),
  baz: yup.string().required()
})

const form = {
  foo: {
    bar: 'baz'
  },
  baz: 1
}

const formKeys = Object.keys(deep.flatten(form))

describe('validate', function () {
  it('should return promise', function () {
    assert.ok(validate(schema, form) instanceof Promise)
  })

  it('should return all keys in correct order', function () {
    return validate(schema, form).then(function (result) {
      assert.deepStrictEqual(Object.keys(result), formKeys)
    })
  })
})

describe('validateSync', function () {
  it('should return all keys in correct order', function () {
    const result = validateSync(schema, form)
    assert.deepStrictEqual(Object.keys(result), formKeys)
  })
})
