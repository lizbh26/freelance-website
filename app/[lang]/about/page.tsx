import ChangingAdjectives from './components/changingAdjectives';
import { Metadata } from 'next';
import { useTranslation } from '@/app/i18n';

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: string };
}): Promise<Metadata> {
    const { t } = await useTranslation(lang, 'about');
    return {
        title: t('meta.title'),
        description: t('meta.description'),
    };
}

export default function AboutUs({
    params: { lang },
}: {
    params: { lang: string };
}) {
    return (
        <main>
            <header className="flex bg-secondary pb-16 pt-36 md:px-20 lg:px-36">
                <h1 className="w-full text-center text-4xl font-bold text-black md:text-start">
                    About us
                </h1>
            </header>
            <article>
                <section
                    id="who-are-we"
                    className="flex w-full items-center justify-center px-5 pb-16 pt-5 md:justify-start md:px-20 lg:px-36">
                    <div className="text-center md:text-start">
                        <div className="mb-5">
                            <h2 className="mb-2 text-3xl font-bold md:text-4xl">
                                Who are we?
                            </h2>
                            <h3 className="text-2xl md:text-3xl">
                                We are <ChangingAdjectives />
                            </h3>
                        </div>
                        <div className="text-start">
                            <p className="mb-4">
                                At Digital Obelisk, we believe that helping out
                                the little guy is the best way to make a
                                difference in this world, and so we want to give
                                small businesses the same opportunities that the
                                giants pay millions of dollars for.
                            </p>
                            <p>
                                In line with this philosophy, we pride ourselves
                                with being a very inclusive company, so no
                                matter what your background may be, we are here
                                to help you and your dreams grow.
                            </p>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
}
