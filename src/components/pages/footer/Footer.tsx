'use client'

import { useTranslations } from "next-intl";
import { Logo } from "../../UI/Logo";

export const Footer = () => {
    const t = useTranslations('footer')

    return (
        <footer className="w-full bg-[var(--color-second-background)] border-t border-[var(--color-border-color)] px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3">
                    
                    <Logo />
                    
                    <div className="flex-1">
                        <p className="text-[var(--color-desc)] text-sm sm:text-base text-center">
                            © 2026 SN. {t('text')}
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};