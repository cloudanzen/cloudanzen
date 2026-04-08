import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { locales } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(locales, requested) ? requested : 'en';

  // Load all message namespaces for the locale
  const common = (await import(`../../messages/${locale}/common.json`)).default;
  const home = (await import(`../../messages/${locale}/home.json`)).default;
  const platform = (await import(`../../messages/${locale}/platform.json`)).default;
  const solutions = (await import(`../../messages/${locale}/solutions.json`)).default;
  const frameworks = (await import(`../../messages/${locale}/frameworks.json`)).default;
  const pricing = (await import(`../../messages/${locale}/pricing.json`)).default;
  const company = (await import(`../../messages/${locale}/company.json`)).default;
  const demo = (await import(`../../messages/${locale}/demo.json`)).default;
  const resources = (await import(`../../messages/${locale}/resources.json`)).default;
  const help = (await import(`../../messages/${locale}/help.json`)).default;
  const legal = (await import(`../../messages/${locale}/legal.json`)).default;
  const chatbot = (await import(`../../messages/${locale}/chatbot.json`)).default;

  return {
    locale,
    messages: {
      common,
      home,
      platform,
      solutions,
      frameworks,
      pricing,
      company,
      demo,
      resources,
      help,
      legal,
      chatbot,
    },
  };
});
