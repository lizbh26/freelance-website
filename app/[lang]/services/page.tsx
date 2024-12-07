import { Metadata } from 'next';
import { getTranslations } from '@/app/i18n';
import ServiceList from './components/service_list';
import { getAllServices } from './components/services_content';

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: string };
}): Promise<Metadata> {
    const { t } = await getTranslations(lang, 'services');
    return {
        title: t('meta.title'),
        description: t('meta.description'),
    };
}

export default async function Services({
    params: { lang },
}: {
    params: { lang: string };
}) {
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
                    <ServiceList services={getAllServices(t)} />
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
