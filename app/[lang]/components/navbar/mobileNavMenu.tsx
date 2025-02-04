'use client';
import feather from 'feather-icons';
import { useState, useRef, useEffect } from 'react';
import NavigationLinks, { LinksTexts } from './navLinks';

export default function MobileNavigationMenu({
    lang,
    links,
}: {
    lang: string;
    links: LinksTexts;
}) {
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
        <div className="md:hidden">
            <button
                className={`transition ${isOpen ? 'rotate-180' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                dangerouslySetInnerHTML={{
                    __html: feather.icons.menu.toSvg(),
                }}></button>
            <div
                className={`absolute left-0 mt-8 h-screen w-screen overflow-hidden shadow backdrop-blur transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div
                    ref={menuRef}
                    className={`flex h-full w-3/5 flex-col gap-4 bg-white p-4 px-8 transition delay-200 sm:w-1/2 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <NavigationLinks lang={lang} links={links} />
                </div>
            </div>
        </div>
    );
}
