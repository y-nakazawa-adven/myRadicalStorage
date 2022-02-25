export const isString = (s: any): s is string => typeof s === 'string'

export const isNumber = (n: any): n is number => !isNaN(Number(n)) && n > 0
