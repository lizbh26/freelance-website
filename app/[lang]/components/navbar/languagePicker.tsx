'use client';
import feather from 'feather-icons';
import { useEffect, useRef, useState } from 'react';
import { languages } from '@/app/i18n/settings';
import { usePathname } from 'next/navigation';

export default function LanguagePicker({ lang }: { lang: string }) {
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

    const pathname = usePathname();
    const location = pathname.split(`/${lang}`)[2] ?? '';
    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex cursor-pointer items-center justify-center">
                <span
                    dangerouslySetInnerHTML={{
                        __html: feather.icons.globe.toSvg(),
                    }}></span>
                <span
                    className={`w-5 transition ${isOpen ? 'rotate-180' : ''}`}
                    dangerouslySetInnerHTML={{
                        __html: feather.icons['chevron-down'].toSvg({
                            width: '100%',
                        }),
                    }}></span>
            </button>
            <div
                className={`absolute -ml-2 mt-3 overflow-hidden ${isOpen ? 'max-h-20' : 'max-h-0'}`}
                style={{
                    transitionProperty: 'max-height',
                    transitionDuration: '200ms',
                    transitionTimingFunction: 'ease-in-out',
                    transitionDelay: '50ms',
                }}>
                <ul
                    className={`flex flex-col gap-2 rounded-b-sm bg-white p-2 transition`}>
                    {languages.map((language) => (
                        <li key={language}>
                            <a
                                className={`w-full py-1 pl-1 pr-6 text-start font-mono text-sm ${language === lang ? 'bg-secondary' : 'hover:bg-primary hover:text-white'}`}
                                href={`/${language}${location}`}>
                                {language.toUpperCase()}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
