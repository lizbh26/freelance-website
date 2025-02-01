import { Metadata } from 'next';
import { getTranslations, Params } from '@/app/i18n';
import ServiceList from './components/service_list';
import { getAllServices } from './components/services_content';
import { Suspense } from 'react';

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const { lang } = await params;
    const { t } = await getTranslations(lang, 'services');
    return {
        title: t('meta.title') + ' | The Digital Obelisk',
        description: t('meta.description'),
    };
}

export default async function Services({ params }: { params: Params }) {
    const { lang } = await params;
    const { t } = await getTranslations(lang, 'services');

    return (
        <main>
            <header className="flex bg-secondary pb-16 pt-36 md:px-20 lg:px-36">
                <h1 className="w-full text-center text-4xl font-bold text-black">
                    {t('header.title')}
                </h1>
            </header>
            <article className="px-5 py-10 sm:px-16 md:px-20 lg:px-36">
                <Suspense>
                    <ServiceList services={getAllServices(t)} />
                </Suspense>
                <section className="mt-12 text-center">
                    <h2 className="text-2xl font-bold">{t('cta.title')}</h2>
                    <p>
                        {t('cta.body-1')}{' '}
                        <a
                            className="text-primary underline transition md:no-underline md:hover:underline"
                            href={`/${lang}/contact`}>
                            {t('cta.body-link')}
                        </a>{' '}
                        {t('cta.body-2')}
                    </p>
                </section>
            </article>
        </main>
    );
}
