import Header from './components/header';
import AboutUs from './components/about-us';
import Services from './components/services';

export default function Home({ lang }: { lang: string }) {
    return (
        <main>
            <Header lang={lang} />
            <AboutUs />
            <Services lang={lang} />
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
