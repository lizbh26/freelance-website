import { getTranslations } from '@/app/i18n';

export default async function AboutUs({ lang }: { lang: string }) {
    const { t } = await getTranslations(lang, 'home');

    return (
        <section
            id="about-us"
            className="scroll-mt-20 px-5 pb-20 pt-10 sm:px-16 md:px-28 md:pt-0 lg:px-32">
            <div className="lg:flex lg:flex-row-reverse">
                <div className="flex flex-col items-center justify-center gap-6 lg:w-3/5 lg:items-end lg:text-end xl:w-1/2">
                    <h2 className="text-center text-3xl font-bold lg:text-end">
                        {t('about-us.title')}
                    </h2>
                    <span className="flex flex-col gap-2">
                        <p>{t('about-us.paragraph-1')}</p>
                        <p>{t('about-us.paragraph-2')}</p>
                    </span>
                </div>
                <div className="mt-8 flex items-center justify-center px-4 lg:w-2/5 xl:w-1/2">
                    <img
                        className="object-cover"
                        width={400}
                        height={300}
                        src="/assets/img/user-experience.png"
                        alt="Good user experience"
                    />
                </div>
            </div>
        </section>
    );
}
