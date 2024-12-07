import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

import { getTranslations, Params } from '@/app/i18n';
import ContactForm from './contact_form';

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const { lang } = await params;
    const { t } = await getTranslations(lang, 'contact');
    return {
        title: t('meta.title'),
        description: t('meta.description'),
    };
}

export default async function ContactUs({ params }: { params: Params }) {
    const { lang } = await params;
    const { t } = await getTranslations(lang, 'contact');
    return (
        <main>
            <header className="flex bg-secondary pb-16 pt-36 md:px-20 lg:px-36">
                <h1 className="w-full text-center text-4xl font-bold text-black">
                    {t('header.title')}
                </h1>
            </header>
            <article className="px-5 py-6 text-center sm:px-10 md:px-20 lg:px-36">
                <h3 className="text-xl">{t('form.title')}</h3>
                <section className="mb-10 mt-5 flex w-full flex-col items-center justify-center md:flex-row">
                    <Suspense>
                        <ContactForm
                            fields={{
                                email: t('form.email'),
                                name: t('form.name'),
                                description: t('form.brief-description'),
                                button_waiting: t('form.button_waiting'),
                                button_sent: t('form.button_sent'),
                                form_success: t('form.success'),
                                form_failure: t('form.failure'),
                            }}
                        />
                    </Suspense>
                    <div className="mt-10 flex items-center justify-center md:m-0 md:mx-5 md:w-1/2">
                        <Image
                            src="/assets/img/contact.png"
                            alt="Contact us with this form"
                            width={300}
                            height={300}
                            className=""
                        />
                    </div>
                </section>
                <p className="mb-6 text-justify">{t('body.disclaimer')}</p>
            </article>
        </main>
    );
}
