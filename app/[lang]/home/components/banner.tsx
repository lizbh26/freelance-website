import { useTranslation } from '../../../i18n';

export default async function Banner({ lang }: { lang: string }) {
    const { t } = await useTranslation(lang, 'home');
    return (
        <section id="top" className="flex bg-purple-200 px-36 pb-16 pt-48">
            <div className="w-3/5">
                <h1 className="mb-2 text-5xl font-bold">{t('header.title')}</h1>
                <p>{t('header.subtitle')}</p>
                <button className="mt-8 rounded bg-primary px-5 py-2 text-white transition hover:scale-105">
                    {t('header.cta')} →
                </button>
            </div>
        </section>
    );
}
