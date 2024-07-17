import { useTranslation } from '@/app/i18n';
import Image from 'next/image';

export default async function Header({ lang }: { lang: string }) {
    const { t } = await useTranslation(lang, 'home');

    return (
        <header id="top" className="">
            <div className="flex justify-center bg-secondary pb-12 pt-36 md:justify-start md:px-20 md:pb-6 lg:px-36">
                <div className="w-5/6 text-center md:w-1/2 md:text-start">
                    <h1 className="mb-2 text-3xl font-bold">
                        {t('header.title')}
                    </h1>
                    <p>{t('header.subtitle')}</p>
                    <button className="mt-8 rounded bg-primary px-5 py-2 text-white transition hover:scale-105">
                        {t('header.cta')} →
                    </button>
                </div>
            </div>
            <Image
                className="w-full overflow-hidden"
                src={'/assets/header-separator-2.png'}
                alt=""
                width={'1920'}
                height={'200'}
            />
        </header>
    );
}
