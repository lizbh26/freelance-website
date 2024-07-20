import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import HeaderSeparator from './separator';

export default async function Header({ lang }: { lang: string }) {
    const { t } = await useTranslation(lang, 'home');

    return (
        <header id="top" className="">
            <div className="flex justify-center bg-secondary pb-12 pt-36 md:justify-start md:px-20 md:pb-6 lg:px-36">
                <div className="flex w-5/6 flex-col items-start md:w-1/2">
                    <h1 className="mb-4 text-4xl font-bold">
                        {t('header.title')}
                    </h1>
                    <p className="text-start">{t('header.subtitle')}</p>
                    <a
                        href={`/${lang}/contact`}
                        className="mt-8 inline-block rounded bg-primary px-5 py-2 text-xl font-bold text-white transition hover:scale-105">
                        {t('header.cta')} →
                    </a>
                </div>
            </div>
            <HeaderSeparator />
        </header>
    );
}
