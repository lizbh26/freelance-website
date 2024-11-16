'use client';

import { usePathname } from 'next/navigation';

export interface LinksTexts {
    home: string;
    about: string;
    services: string;
    cta_1: string;
    cta_2: string;
}

export default function NavigationLinks({
    lang,
    links,
}: {
    lang: string;
    links: LinksTexts;
}) {
    const pathname = usePathname();
    const page = pathname.split(`/${lang}`)[1];
    return (
        <>
            <a
                className={`my-1 w-fit border-b-4 px-2 py-1 transition hover:border-b-primary md:my-0 md:hidden md:px-0 md:py-2 ${page === '' ? 'border-b-primary' : 'border-b-white'}`}
                href={`/${lang}`}>
                {links.home}
            </a>
            <a
                className={`my-1 w-fit border-b-4 px-2 py-1 transition hover:border-b-primary md:my-0 md:px-0 md:py-2 ${page === '/about' ? 'border-b-primary' : 'border-b-white'}`}
                href={`/${lang}/about`}>
                {links.about}
            </a>
            <a
                className={`my-1 w-fit border-b-4 px-2 py-1 transition hover:border-b-primary md:my-0 md:px-0 md:py-2 ${page === '/services' ? 'border-b-primary' : 'border-b-white'}`}
                href={`/${lang}/services`}>
                {links.services}
            </a>
            {/* <a
                className={`my-1 w-fit border-b-4 px-2 py-1 transition hover:border-b-primary md:my-0 md:px-0 md:py-2 ${page === '/testimonials' ? 'border-b-primary' : 'border-b-white'}`}
                href={`/${lang}/testimonials`}>
            </a> */}
            <a
                className="rounded bg-primary px-3 py-2 text-center font-bold text-white transition hover:scale-105 md:mx-3"
                href={`/${lang}/contact`}>
                {links.cta_1}{' '}
                <br className="min-[410px]:hidden md:block min-[900px]:hidden" />{' '}
                {links.cta_2}
            </a>
        </>
    );
}
