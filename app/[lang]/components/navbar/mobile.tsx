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
                <LanguagePicker lang={lang} />
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
                className={`absolute left-0 mt-4 flex w-2/3 flex-col items-center gap-6 overflow-hidden bg-white py-4 shadow transition-all duration-300 sm:w-1/2 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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
