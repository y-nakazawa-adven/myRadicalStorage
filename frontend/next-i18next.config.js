module.exports = {
  i18n: {
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'ja',
    locales: (process.env.NEXT_PUBLIC_SUPPORTED_LOCALES_SEPARATE_BY_COMMA || 'ja').split(','),
  },
  domains: [
    {
      domain: 'localhost:3000/en',
      defaultLocale: 'en',
      http: true,
    },
    {
      domain: 'localhost:3000/de',
      defaultLocale: 'de',
      http: true,
    },
    {
      domain: 'localhost:3000/ja',
      defaultLocale: 'ja',
      http: true,
    },
  ],
}
