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
        title: t('meta.title'),
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
                    Services
                </h1>
            </header>
            <article className="px-5 py-10 sm:px-16 md:px-20 lg:px-36">
                <section className="mb-16 mt-6">
                    <Suspense>
                        <ServiceList services={getAllServices(t)} />
                    </Suspense>
                </section>
                <section className="mt-8">
                    <h2 className="text-2xl">
                        Did any of these catch your eye?
                    </h2>
                    <p>
                        If so, you can{' '}
                        <a
                            className="text-primary transition hover:underline"
                            href={`/${lang}/contact`}>
                            schedule a free consultation
                        </a>{' '}
                        where we can assess what your business may benefit from.
                    </p>
                </section>
            </article>
        </main>
    );
}
