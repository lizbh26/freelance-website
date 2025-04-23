import { getTranslations } from '@/app/i18n';
import Image from 'next/image';
import Link from 'next/link';

export default async function Services({ lang }: { lang: string }) {
    const { t } = await getTranslations(lang, 'home');

    const links = ['website', 'marketing', 'e-commerce'];

    return (
        <section
            id="services"
            className="scroll-mt-20 bg-neutral-100 px-5 py-10 md:px-20 lg:px-36">
            <div className="pb-8 text-center">
                <h2 className="text-3xl font-bold">{t('services.title')}</h2>
                <p>{t('services.subtitle')}</p>
            </div>
            <div className="mb-5 flex flex-col justify-between gap-6 sm:flex-row">
                {links.map((link) => (
                    <Link
                        key={link}
                        className="flex w-full flex-col items-center justify-center bg-neutral-200 py-4 transition hover:cursor-pointer hover:bg-secondary"
                        href={`${lang}/services#${link}`}>
                        <Image
                            src={`/assets/img/service_${link}.png`}
                            alt={t(`services.${link}`)}
                            width={150}
                            height={150}
                        />
                        <h3 className="px-4 pt-4 text-center text-2xl underline">
                            {t(`services.${link}`)}
                        </h3>
                    </Link>
                ))}
            </div>
            <div className="text-center">
                <p>{t('services.and-more')}</p>
                <div className="mb-1 mt-5 flex flex-col items-center justify-center max-[360px]:mb-4 min-[360px]:flex-row min-[360px]:gap-2">
                    <p>{t('services.pre-cta')}</p>
                    <a
                        href={`/${lang}/contact`}
                        className="rounded bg-primary p-2 px-4 font-bold text-white transition hover:scale-105">
                        {t('services.cta')}
                    </a>
                </div>
                <p>
                    {t('services.pre-link')}{' '}
                    <a
                        className="text-primary underline transition hover:text-primary md:text-black"
                        href={`/${lang}/services`}>
                        {t('services.link')}
                    </a>
                </p>
            </div>
        </section>
    );
}
