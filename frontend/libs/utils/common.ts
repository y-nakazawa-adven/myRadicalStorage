export const isString = (s: any): s is string => typeof s === 'string'

export const isNumber = (n: any): n is number => !isNaN(Number(n)) && n > 0

export const removeSlash = (s: string): string => s.split('/').join()
export const removeColon = (s: string): string => s.split(':').join()
