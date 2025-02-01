'use client';
import Image from 'next/image';

import MobileNavigationMenu from './mobileNavMenu';
import NavigationLinks, { LinksTexts } from './navLinks';
import LanguagePicker from './languagePicker';
import { useEffect, useState } from 'react';

export default function Navbar({
    lang,
    links,
}: {
    lang: string;
    links: LinksTexts;
}) {
    const [isShowing, setIsShowing] = useState(true);
    const [prevPosition, setPrevPosition] = useState(0);
    useEffect(() => {
        function onScroll() {
            const currentPosition = window.scrollY;

            if (prevPosition > currentPosition) setIsShowing(true);
            else setIsShowing(false);

            setPrevPosition(currentPosition);
        }
        document.addEventListener('scroll', onScroll);

        return () => {
            document.removeEventListener('scroll', onScroll);
        };
    });
    return (
        <nav
            className={`fixed z-20 w-full bg-white px-5 py-3 text-black shadow transition sm:px-10 md:px-10 min-[840px]:px-20 lg:px-36 ${isShowing ? '-translate-y-0' : '-translate-y-full'}`}>
            <div className="flex w-full items-center justify-between">
                <MobileNavigationMenu lang={lang} links={links} />
                <a
                    className="flex items-center justify-center gap-2 text-xl text-primary"
                    href={`/${lang}`}>
                    <Image
                        src="/assets/img/logo.png"
                        alt=""
                        width={32}
                        height={32}
                    />
                    The Digital Obelisk
                </a>
                <div className="flex items-center gap-6">
                    <div className="hidden items-center gap-4 md:flex">
                        <NavigationLinks lang={lang} links={links} />
                    </div>
                    <LanguagePicker lang={lang} />
                </div>
            </div>
        </nav>
    );
}
