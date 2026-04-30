import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = 'en';

  return {
    locale,
    timeZone: 'Asia/Bishkek',
    messages: (await import(`../../locales/${locale}.json`)).default
  };
});
