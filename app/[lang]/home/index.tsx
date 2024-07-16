import Header from './components/header';
import AboutUs from './components/about-us';
import Services from './components/services';
import Testimonials from './components/testimonials';

export default function Home({ lang }: { lang: string }) {
    return (
        <div>
            <Header lang={lang} />
            <AboutUs />
            <Services lang={lang} />
            <section id="portfolio" className="mb-16 mt-10 scroll-mt-28">
                <div>
                    <h2 className="text-center text-4xl font-bold">
                        Simple. Elegant. Efficient.
                    </h2>
                    <p className="text-center">See it to believe it</p>
                </div>
            </section>
            <Testimonials />
            <section
                id="get-a-quote"
                className="mt-10 flex scroll-mt-24 flex-col items-center justify-center">
                <h2 className="text-center text-4xl font-bold">
                    Let&apos;s get started!
                </h2>
                <form action="" className="w-1/3">
                    <div className="my-3 flex flex-col">
                        <label htmlFor="email">Your email</label>
                        <input
                            type="email"
                            id="email"
                            className="rounded border-2 border-black px-2"
                        />
                    </div>
                    <div className="my-3 flex flex-col">
                        <label htmlFor="name">Your name / company</label>
                        <input
                            type="text"
                            id="name"
                            className="rounded border-2 border-black px-2"
                        />
                    </div>
                    <div className="my-3 flex flex-col">
                        <label htmlFor="description">
                            Briefly describe your project
                        </label>
                        <textarea
                            rows={5}
                            id="description"
                            className="rounded border-2 border-black px-2"
                        />
                    </div>
                    <div className="flex w-full items-center justify-center">
                        <button className="rounded bg-primary px-5 py-2 text-white transition hover:scale-105">
                            Send
                        </button>
                    </div>
                </form>
            </section>
            <footer className="mt-5 flex items-center justify-center bg-neutral-100 py-3">
                <p>Ashley Lizbeth &copy;2024</p>
            </footer>
        </div>
    );
}
