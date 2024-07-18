'use client';
import feather from 'feather-icons';
import { useEffect, useRef, useState } from 'react';
import { languageNames, languages } from '@/app/i18n/settings';
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
    const location = pathname.split(`/${lang}`)[1] ?? '';
    return (
        <div className="md:relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex cursor-pointer items-center justify-center">
                <span
                    dangerouslySetInnerHTML={{
                        __html: feather.icons.globe.toSvg(),
                    }}></span>
                <span
                    className={`hidden w-5 transition md:block ${isOpen ? 'rotate-180' : ''}`}
                    dangerouslySetInnerHTML={{
                        __html: feather.icons['chevron-down'].toSvg({
                            width: '100%',
                        }),
                    }}></span>
            </button>
            <div
                className={`absolute right-0 mt-6 w-1/2 min-w-44 overflow-hidden bg-white shadow transition-all duration-300 sm:w-1/3 md:-left-12 md:right-auto md:mt-4 md:w-auto md:min-w-36 ${isOpen ? 'translate-x-0 md:max-h-screen' : 'translate-x-full md:max-h-0 md:translate-x-0'}`}>
                <h3 className="py-2 text-center text-xl text-primary">
                    Choose language
                </h3>
                <hr />
                <ul className="flex flex-col gap-2 px-5 py-2 md:px-2">
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
