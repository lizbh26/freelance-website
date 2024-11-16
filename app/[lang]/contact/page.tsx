import feather from 'feather-icons';
import { Metadata } from 'next';
import { getTranslations } from '@/app/i18n';

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: string };
}): Promise<Metadata> {
    const { t } = await getTranslations(lang, 'contact');
    return {
        title: t('meta.title'),
        description: t('meta.description'),
    };
}

export default async function ContactUs({
    params: { lang },
}: {
    params: { lang: string };
}) {
    const { t } = await getTranslations(lang, 'contact');
    return (
        <main>
            <header className="flex bg-secondary pb-16 pt-36 md:px-20 lg:px-36">
                <h1 className="w-full text-center text-4xl font-bold text-black">
                    {t('header.title')}
                </h1>
            </header>
            <article className="px-5 py-6 text-center sm:px-10 md:px-20 lg:px-36">
                <p className="mb-6 text-justify">{t('body.disclaimer')}</p>
                <h3 className="text-xl">{t('form.title')}</h3>
                <section className="mb-10 flex w-full items-center justify-center">
                    <form
                        action=""
                        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                        <div className="my-3 flex flex-col">
                            <label htmlFor="email">{t('form.email')}</label>
                            <input
                                type="email"
                                id="email"
                                className="rounded border-2 border-black px-2"
                            />
                        </div>
                        <div className="my-3 flex flex-col">
                            <label htmlFor="name">{t('form.name')}</label>
                            <input
                                type="text"
                                id="name"
                                className="rounded border-2 border-black px-2"
                            />
                        </div>
                        <div className="my-3 flex flex-col">
                            <label htmlFor="description">
                                {t('form.brief-description')}
                            </label>
                            <textarea
                                rows={5}
                                id="description"
                                className="rounded border-2 border-black px-2"
                            />
                        </div>
                        <div className="flex w-full items-center justify-center">
                            <button className="flex items-center justify-center gap-2 rounded border-4 border-primary bg-primary px-5 py-2 font-bold text-white transition hover:scale-105 hover:bg-primary hover:text-white md:bg-white md:text-black">
                                {t('form.send')}{' '}
                                <span
                                    className="inline-block"
                                    dangerouslySetInnerHTML={{
                                        __html: feather.icons.send.toSvg(),
                                    }}></span>
                            </button>
                        </div>
                    </form>
                </section>
                <p>{t('other.email')} [email here]</p>
            </article>
        </main>
    );
}
