'use client'

import { useEffect, useState } from 'react'
import { Logo } from '../Logo';
import { useTranslations } from 'next-intl';
import { LanguageSelector } from '../changeLang/ChangeLangNav';
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export const PagesID: Record<string, string> = {
    welcome: 'welcome',
    aboutMe: 'aboutMe',
    myProjects: 'myProjects',
    contact: 'contact'
} as const

export const Navbar = ({ activeSection }: { activeSection: string }) => {
    const t = useTranslations('navbar')
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)

    const buttons = ["welcome", "aboutMe", "myProjects", "contact"];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        handleScroll()
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
    };

    return (
        <>
            <div 
                className={`
                    fixed px-4 sm:px-6 lg:px-8 xl:px-12 top-0 z-50 w-full h-16 flex items-center 
                    transition-all duration-300
                    ${scrolled ? 'bg-black/70 backdrop-blur-2xl shadow-md' : 'bg-transparent'}
                `}
            >
                <nav className="max-w-[1280px] w-full mx-auto flex justify-between items-center">
                    <Logo />

                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="max-w-[450px] w-full flex gap-6 lg:gap-8 justify-between pt-1">
                            {buttons.map((item) => {
                                const sectionId = PagesID[item];
                                const isActive = sectionId === activeSection;

                                return (
                                    <div key={item} className="flex flex-col items-center">
                                        <div
                                            className={`text-sm uppercase font-bold tracking-wider cursor-pointer transition-all 
                                                hover:text-[var(--primary)] ${isActive ? 'text-[var(--primary)]' : 'text-white/80'}`}
                                            onClick={() => handleScrollTo(item)}
                                        >
                                            {t(item)}
                                        </div>
                                        {isActive && (
                                            <div className="h-[2px] w-full mt-1 rounded-2xl bg-[var(--primary)]" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <LanguageSelector />
                        <button
                            onClick={() => setOpen(true)}
                            className="md:hidden p-2 text-white hover:text-[var(--primary)] transition-colors"
                            aria-label="Открыть меню"
                        >
                            <MenuOutlined style={{ fontSize: 26 }} />
                        </button>
                    </div>
                </nav>
            </div>
            <Drawer
                placement="right"
                onClose={() => setOpen(false)}
                open={open}
                width={300}
                styles={{
                    body: { 
                        padding: 0,
                        backgroundColor: 'var(--color-second-background)',
                    },
                    header: { 
                        backgroundColor: 'var(--color-second-background)',
                        borderBottom: '1px solid var(--color-border-color)',
                        padding: '16px 20px',
                    },
                }}
                closeIcon={<span style={{ color: '#fff', fontSize: 28, fontWeight: 300 }}>×</span>}
            >
                <div className="flex flex-col py-6 px-5 min-h-full bg-[var(--color-second-background)]">
                    {buttons.map((item) => {
                        const sectionId = PagesID[item];
                        const isActive = sectionId === activeSection;

                        return (
                            <Button
                                key={item}
                                type="text"
                                block
                                size="large"
                                className={`h-14 justify-start text-left text-base mb-2 rounded-xl transition-all font-medium
                                    ${isActive 
                                        ? 'text-[var(--primary)]! bg-[var(--primary)]/10!' 
                                        : 'text-[var(--color-desc)]! hover:text-white! hover:bg-white/5!'
                                    }`}
                                onClick={() => handleScrollTo(item)}
                            >
                                {t(item)}
                            </Button>
                        );
                    })}
                </div>
            </Drawer>
        </>
    )
}