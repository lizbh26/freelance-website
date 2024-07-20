import Header from './components/header';
import Services from './components/services';
import Testimonials from './components/testimonials';

export default function Home({ lang }: { lang: string }) {
    return (
        <main>
            <Header lang={lang} />
            <Services lang={lang} />
            <section
                id="portfolio"
                className="mb-16 mt-10 scroll-mt-28 px-5 md:px-20">
                <div>
                    <h2 className="text-center text-4xl font-bold">
                        Simple. Elegant. Efficient.
                    </h2>
                    <p className="text-center">See it to believe it</p>
                </div>
            </section>
            <Testimonials />
            <section
                id="call-to-action"
                className="flex scroll-mt-24 flex-col items-center justify-center pb-24 pt-16">
                <h2 className="text-center text-4xl font-bold">
                    {"Let's get started!"}
                </h2>
                <a
                    className="mb-2 mt-6 rounded bg-primary px-4 py-2 font-bold text-white transition hover:scale-105"
                    href={`/${lang}/contact`}>
                    Get a free consultation →
                </a>
                <p>First time clients get a discount!</p>
            </section>
        </main>
    );
}
