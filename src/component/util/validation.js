export const required = value => (value ? undefined : 'Required')
export const basicLatin = value => (/\w+/.test(value) ? undefined : 'basicLatin')

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)
