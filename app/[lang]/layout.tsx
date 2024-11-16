import { Inter } from 'next/font/google';

import { languages } from '../i18n/settings';
import './globals.css';

import Navbar from './components/navbar';
import Footer from './components/footer/footer';
import { getTranslations } from '../i18n';

export async function generateStaticParams() {
    return languages.map((lang) => ({ lang }));
}

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
    children,
    params: { lang },
}: Readonly<{
    children: React.ReactNode;
    params: { lang: string };
}>) {
    const { t: tNav } = await getTranslations(lang, 'navbar');

    return (
        <html lang={lang} className="scroll-smooth">
            <body className={inter.className + ' bg-neutral-100'}>
                <Navbar
                    lang={lang}
                    links={{
                        home: tNav('home'),
                        about: tNav('about'),
                        services: tNav('services'),
                        cta_1: tNav('cta-1'),
                        cta_2: tNav('cta-2'),
                    }}
                />
                <div className="bg-white">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
