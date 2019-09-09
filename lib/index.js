const deep = require('deep-tinker')

exports.validate = function validate (schema, form, mapper) {
  if (!form || !schema) {
    return Promise.reject(new Error('Please provide form and schema.'))
  }

  const flat = deep.flatten(form)
  const keys = Object.keys(flat)

  const promises = keys.map(function (key) {
    const value = flat[key]
    const reach = key.replace(/\[\d]/g, '[]')
    return new Promise(function (resolve, reject) {
      function callback (result) {
        resolve({
          key,
          result: mapper ? mapper(result) : result
        })
      }
      schema.validateAt(reach, value)
        .then(() => callback(null))
        .catch(callback)
    })
  })

  return new Promise(function (resolve, reject) {
    Promise.all(promises)
      .then(result => {
        const validation = result.reduce((acc, obj) => {
          acc[obj.key] = obj.result
          return acc
        }, {})

        resolve(validation)
      })
      .catch(reject)
  })
}

exports.validateSync = function validate (schema, form, mapper) {
  if (!form || !schema) {
    throw new Error('Please provide form and schema.')
  }

  const flat = deep.flatten(form)
  const keys = Object.keys(flat)

  const validation = keys.reduce(function (acc, key) {
    const value = flat[key]
    const reach = key.replace(/\[\d]/g, '[]')

    let result = null

    try {
      schema.validateSyncAt(reach, value)
    } catch (e) {
      result = e
    }

    acc[key] = mapper ? mapper(result) : result
    return acc
  }, {})

  return validation
}
