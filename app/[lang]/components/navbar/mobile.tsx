'use client';

import feather from 'feather-icons';
import LanguagePicker from './languagePicker';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { languageNames, languages } from '@/app/i18n/settings';

export default function MobileNavbar({ lang }: { lang: string }) {
    return (
        <div className="relative md:hidden">
            <div className="flex w-full justify-between px-5">
                <NavigationMenu />
                <a className="text-xl text-primary" href={`/${lang}`}>
                    Digital Obelisk
                </a>
                <LanguageMenu lang={lang} />
            </div>
        </div>
    );
}

function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef}>
            <button
                className={`transition ${isOpen ? 'rotate-180' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                dangerouslySetInnerHTML={{
                    __html: feather.icons.menu.toSvg(),
                }}></button>
            <div
                className={`absolute left-0 mt-4 flex w-2/3 flex-col items-center gap-6 overflow-hidden bg-white py-4 shadow transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <a className="transition hover:text-primary" href="/services">
                    Services
                </a>
                <a className="transition hover:text-primary" href="#portfolio">
                    Our work
                </a>
                <a
                    className="transition hover:text-primary"
                    href="#testimonials">
                    Testimonials
                </a>
                <a
                    className="rounded bg-primary px-2 py-1 text-white transition hover:scale-105"
                    href="#get-a-quote">
                    Get a quote
                </a>
            </div>
        </div>
    );
}

function LanguageMenu({ lang }: { lang: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const langMenuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                langMenuRef.current &&
                !langMenuRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const pathname = usePathname();
    const location = pathname.split(`/${lang}`)[1] ?? '';

    return (
        <div ref={langMenuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                dangerouslySetInnerHTML={{
                    __html: feather.icons.globe.toSvg(),
                }}></button>
            <div
                className={`absolute right-0 mt-4 w-1/2 bg-white shadow transition duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <h3 className="py-2 text-center text-xl text-primary">
                    Choose language
                </h3>
                <hr />
                <ul className="flex flex-col gap-2 px-5 py-2">
                    {languages.map((language) => (
                        <li key={language} className="w-full">
                            <a
                                className={`flex w-full items-center py-1 ${language === lang ? 'text-primary' : 'hover:bg-primary hover:text-white'}`}
                                href={`/${language}${location}`}>
                                <span className="w-[20%] pl-[10%]">
                                    {language.toUpperCase()}
                                </span>
                                <span className="w-[70%] text-center">
                                    {languageNames[language]}
                                </span>
                                {language === lang ? (
                                    <span
                                        className="inline-block"
                                        dangerouslySetInnerHTML={{
                                            __html: feather.icons.check.toSvg(),
                                        }}></span>
                                ) : (
                                    <></>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
