import { Currency } from '../types'

export const getCurrency = async (): Promise<Currency[]> => [
  {
    symbol: '¥',
    text: 'JPY',
    value: '¥',
  },
  {
    symbol: '$',
    text: 'USD',
    value: '$',
  },
]
