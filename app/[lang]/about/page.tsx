import ChangingAdjectives from './components/changingAdjectives';
import { Metadata } from 'next';
import { getTranslations } from '@/app/i18n';

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: string };
}): Promise<Metadata> {
    const { t } = await getTranslations(lang, 'about');
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
            <article className="px-5 md:px-20 lg:px-36">
                <section
                    id="who-are-we"
                    className="mb-16 mt-8 flex w-full items-center justify-center md:justify-start">
                    <div className="">
                        <div className="mb-5">
                            <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">
                                Who are we?
                            </h2>
                            <h3 className="text-center text-2xl md:text-3xl">
                                We are <ChangingAdjectives />
                            </h3>
                        </div>
                        <div className="text-justify">
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
                <section id="what-do-we-do" className="mb-16">
                    <h2 className="mb-5 text-center text-3xl font-bold md:text-4xl">
                        What do we do?
                    </h2>
                    <div className="text-justify">
                        <p className="mb-4">
                            Digital Obelisk is a digital services agency,
                            meaning we specialize in creating anything digital
                            that your business might need: from illustrations
                            and flyers to full-blown websites or applications.
                        </p>
                        <p>
                            Since every business is different, and we offer a
                            great range of services, we cant provide an accurate
                            price upfront. That’s why we offer free
                            consultations to first time clients with no
                            compromise, so you can be sure you’re getting
                            exactly what you want.
                        </p>
                    </div>
                </section>
                <section id="what-have-we-done" className="mb-16">
                    <h2 className="text-center text-3xl font-bold md:text-4xl">
                        What have we done?
                    </h2>
                </section>
            </article>
        </main>
    );
}
