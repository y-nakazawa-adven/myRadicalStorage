import { Language } from '../types'

export const getLanguages = async (): Promise<Language[]> => [
  {
    text: '日本語',
    value: 'ja',
    icon: '/images/Flag_of_Japan.png',
  },
  {
    text: 'English',
    value: 'en',
    icon: '/images/Flag_of_the_United_States.png',
  },
  {
    text: '简体中文',
    value: 'zh_cn',
    icon: '/images/Flag_of_the_Peoples_Republic_of_China.png',
  },
]
