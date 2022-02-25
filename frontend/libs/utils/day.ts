import { format, isValid, parse } from 'date-fns'
import { DATE_FORMAT, DAY_FORMAT, TIME_FORMAT } from '@libs/utils/const'

export const yyyyMMddToSlash = (s: any): string =>
  isValid(parse(s as string, 'yyyyMMdd', new Date()))
    ? format(parse(s as string, 'yyyyMMdd', new Date()), DAY_FORMAT)
    : format(new Date(), DAY_FORMAT)

export const HHmmToTimeFormat = (s: any): string =>
  isValid(parse(s as string, 'HHmm', new Date()))
    ? format(parse(s as string, 'HHmm', new Date()), TIME_FORMAT)
    : format(new Date(), TIME_FORMAT)

export const toDateFormat = (day: string, time: string) =>
  parse(`${day} ${time}`, DATE_FORMAT, new Date())
