'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';

type Locale = 'ru' | 'en';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function useLocaleContext() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocaleContext must be used within LocaleProvider');
  }
  return context;
}

interface LocaleProviderProps {
  children: ReactNode;
  initialMessages: Record<string, any>;
  initialLocale?: Locale;
}

export function LocaleProvider({ children, initialMessages, initialLocale = 'en' }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'ru' || savedLocale === 'en') && savedLocale !== initialLocale) {
      setLocaleState(savedLocale);
      loadMessages(savedLocale);
    }
  }, [initialLocale]);

  const loadMessages = async (newLocale: Locale) => {
    try {
      const response = await fetch(`/locales/${newLocale}.json`);
      if (response.ok) {
        const newMessages = await response.json();
        setMessages(newMessages);
      }
    } catch (error) {
      console.error('Failed to load messages:', error);
    }
  };

  const setLocale = async (newLocale: Locale) => {
    if (newLocale === locale) return;

    localStorage.setItem('locale', newLocale);
    setLocaleState(newLocale);
    await loadMessages(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        timeZone="Asia/Bishkek"
      >
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
