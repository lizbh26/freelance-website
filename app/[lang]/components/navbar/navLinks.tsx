'use client';

import { usePathname } from 'next/navigation';

export default function NavigationLinks({ lang }: { lang: string }) {
    const pathname = usePathname();
    const page = pathname.split(`/${lang}`)[1];
    return (
        <>
            <a
                className={`my-1 w-fit border-b-4 px-2 py-1 transition hover:border-b-primary md:my-0 md:hidden md:px-0 md:py-2 ${page === '' ? 'border-b-primary' : 'border-b-white'}`}
                href={`/${lang}`}>
                Home
            </a>
            <a
                className={`my-1 w-fit border-b-4 px-2 py-1 transition hover:border-b-primary md:my-0 md:px-0 md:py-2 ${page === '/about' ? 'border-b-primary' : 'border-b-white'}`}
                href={`/${lang}/about`}>
                About us
            </a>
            <a
                className={`my-1 w-fit border-b-4 px-2 py-1 transition hover:border-b-primary md:my-0 md:px-0 md:py-2 ${page === '/services' ? 'border-b-primary' : 'border-b-white'}`}
                href={`/${lang}/services`}>
                Services
            </a>
            {/* <a
                className={`my-1 w-fit border-b-4 px-2 py-1 transition hover:border-b-primary md:my-0 md:px-0 md:py-2 ${page === '/testimonials' ? 'border-b-primary' : 'border-b-white'}`}
                href={`/${lang}/testimonials`}>
                Testimonials
            </a> */}
            <a
                className="rounded bg-primary px-3 py-2 text-center font-bold text-white transition hover:scale-105 md:mx-3"
                href={`/${lang}/contact`}>
                Schedule a <br className="min-[410px]:hidden" /> free call
            </a>
        </>
    );
}
