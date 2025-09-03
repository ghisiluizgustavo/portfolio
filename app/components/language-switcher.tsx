'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from 'next/navigation';
import {locales} from '../../i18n';

const flagEmojis = {
  pt: '🇧🇷',
  en: '🇺🇸'
};

const languageNames = {
  pt: 'pt-br',
  en: 'en-us'
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="relative ml-4">
      <div className="flex items-center bg-neutral-100 dark:bg-neutral-900 rounded-full p-1 border border-neutral-200 dark:border-neutral-700 shadow-sm">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => switchLocale(loc)}
            className={`
              flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out cursor-pointer
              ${locale === loc
                ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-sm border border-neutral-200 dark:border-neutral-600 scale-105'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
              }
            `}
            title={`Switch to ${languageNames[loc as keyof typeof languageNames]}`}
          >
            <span className="text-lg">{flagEmojis[loc as keyof typeof flagEmojis]}</span>
            <span className="hidden sm:inline">{languageNames[loc as keyof typeof languageNames]}</span>
            <span className="sm:hidden">{loc.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
