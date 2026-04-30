'use client';

import { Select } from "antd";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocaleContext } from "@//providers/LocaleProvider";

const { Option } = Select;

type Language = 'ru' | 'en';

export const LanguageSelector = () => {
  const { locale, setLocale } = useLocaleContext();
  const t = useTranslations('language');

  const handleChange = (value: Language) => {
    setLocale(value);
  };

  return (
    <Select
      value={locale}
      onChange={handleChange}
      suffixIcon={null}
      popupMatchSelectWidth={false}
      style={{ minWidth: 90 }}
      styles={{
        popup: {
          root: {
            background: "rgba(34, 151, 221, 0.05)",
            backdropFilter: "blur(10px)",
          }
        }
      }}
    >
      <Option value="en">
        <div className="flex items-center gap-2 text-white">
          <Image src="/flags/en.svg" width={20} height={20} alt="EN" />
          <span>{locale === "ru" ? "Англ" : "En"}</span>
        </div>
      </Option>

      <Option value="ru">
        <div className="flex items-center gap-2 text-white">
          <Image src="/flags/ru.svg" width={20} height={20} alt="RU" />
          <span>{locale === "ru" ? "Рус" : "Ru"}</span>
        </div>
      </Option>
    </Select>
  );
};