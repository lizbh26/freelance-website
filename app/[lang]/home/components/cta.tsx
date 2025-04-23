import { getTranslations } from '@/app/i18n';

export default async function CTA({ lang }: { lang: string }) {
    const { t } = await getTranslations(lang, 'home');

    return (
        <section
            id="call-to-action"
            className="flex scroll-mt-24 flex-col items-center justify-center pb-24 pt-16">
            <h2 className="text-center text-4xl font-bold">{t('cta.title')}</h2>
            <a
                className="mb-2 mt-6 rounded-sm bg-primary px-4 py-2 font-bold text-white transition hover:scale-105"
                href={`/${lang}/contact`}>
                {t('cta.button')} →
            </a>
            <p>{t('cta.incentive')}</p>
        </section>
    );
}
