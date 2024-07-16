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
            <div className={`${isOpen ? 'absolute' : 'hidden'}`}>
                <div className="flex w-full justify-center">
                    <div className="h-0 w-0 border-b-[12px] border-l-[10px] border-r-[10px] border-solid border-transparent border-b-white bg-transparent"></div>
                </div>
                <ul
                    className={`flex flex-col items-center justify-center rounded-b bg-white transition`}>
                    {languages.map((language) => (
                        <li
                            key={language}
                            className={`w-full cursor-pointer px-3 py-1 text-center ${language === lang ? 'bg-neutral-300' : 'hover:bg-neutral-200'}`}>
                            {language === lang ? (
                                lang
                            ) : (
                                <a href={`/${language}${location}`}>
                                    {language}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
