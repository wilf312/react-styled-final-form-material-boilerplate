export const required = value => (value ? undefined : 'Required')
export const basicLatin = value => (/\w+/.test(value) ? undefined : 'basicLatin')
export const checkIceCream = value => {
  const IceCreamIdList = [1, 2, 3]
  return IceCreamIdList.some(d => d === value) ? undefined : 'no data'
}

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)
