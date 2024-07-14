import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import {
    fallbackLng,
    languages,
    lastLanguageCookieName,
} from './app/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
    // matcher: '/:lng*'
    matcher: [
        '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
    ],
};

export function middleware(req: NextRequest) {
    let lng = null;
    const lastLanguageCookie = req.cookies.get(lastLanguageCookieName);
    if (lastLanguageCookie) lng = acceptLanguage.get(lastLanguageCookie.value);
    if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
    if (!lng) lng = fallbackLng;

    // Redirect if lng in path is not supported
    if (
        !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
        !req.nextUrl.pathname.startsWith('/_next')
    ) {
        return NextResponse.redirect(
            new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
        );
    }

    const refererHeader = req.headers.get('referer');
    if (refererHeader) {
        const refererUrl = new URL(refererHeader);
        const lngInReferer = languages.find((l) =>
            refererUrl.pathname.startsWith(`/${l}`),
        );
        const response = NextResponse.next();
        if (lngInReferer)
            response.cookies.set(lastLanguageCookieName, lngInReferer);
        return response;
    }

    return NextResponse.next();
}
