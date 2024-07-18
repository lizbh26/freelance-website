'use client';

import { usePathname } from 'next/navigation';

export default function NavigationLinks({ lang }: { lang: string }) {
    const pathname = usePathname();
    const page = pathname.split(`/${lang}`)[1];
    return (
        <>
            <a
                className={`p-2 transition hover:text-primary md:hidden ${page === '' ? 'border-b-4 border-b-primary' : ''}`}
                href={`/${lang}`}>
                Home
            </a>
            <a
                className={`p-2 transition hover:border-b-primary md:border-b-4 md:border-b-white md:px-0 ${page === '/about' ? 'border-b-4 border-b-primary' : ''}`}
                href={`/${lang}/about`}>
                About us
            </a>
            <a
                className={`p-2 transition hover:border-b-primary md:border-b-4 md:border-b-white md:px-0 ${page === '/services' ? 'border-b-4 border-b-primary' : ''}`}
                href={`/${lang}/services`}>
                Services
            </a>
            <a
                className={`p-2 transition hover:border-b-primary md:border-b-4 md:border-b-white md:px-0 ${page === '/testimonials' ? 'border-b-4 border-b-primary' : ''}`}
                href={`/${lang}/testimonials`}>
                Testimonials
            </a>
            <a
                className={`p-2 transition hover:border-b-primary md:border-b-4 md:border-b-white md:px-0 ${page === '/pricing' ? 'border-b-4 border-b-primary' : ''}`}
                href={`/${lang}/pricing`}>
                Pricing
            </a>
            <a
                className="rounded bg-primary px-3 py-2 text-center font-bold text-white transition hover:scale-105"
                href={`/${lang}/contact`}>
                Schedule a <br className="hidden md:block lg:hidden" /> free
                call
            </a>
        </>
    );
}
