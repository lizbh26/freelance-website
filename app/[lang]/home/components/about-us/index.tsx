import { getTranslations } from '@/app/i18n';
import ChangingAdjectives from './changingAdjectives';
import Image from 'next/image';

export default async function AboutUs({ lang }: { lang: string }) {
    const { t } = await getTranslations(lang, 'home');

    return (
        <section
            id="about-us"
            className="scroll-mt-20 px-5 pb-20 pt-10 sm:px-16 md:px-28 md:pt-0 lg:px-32">
            <div className="lg:flex lg:flex-row-reverse">
                <div className="flex flex-col items-center justify-center gap-6 lg:w-3/5 xl:w-1/2">
                    <span>
                        <h2 className="text-center text-3xl font-bold">
                            {t('about-us.title')}
                        </h2>
                        <h3 className="text-center text-2xl">
                            <ChangingAdjectives
                                subtitle={t('about-us.subtitle')}
                            />
                        </h3>
                    </span>
                    <span className="flex flex-col gap-2">
                        <p>{t('about-us.paragraph-1')}</p>
                        <p>{t('about-us.paragraph-2')}</p>
                    </span>
                </div>
                <div className="mt-8 flex items-center justify-center px-4 lg:w-2/5 xl:w-1/2">
                    <Image
                        className="object-cover"
                        alt="Working together"
                        width={400}
                        height={300}
                        src="/assets/img/teamwork.png"
                    />
                </div>
            </div>
        </section>
    );
}
