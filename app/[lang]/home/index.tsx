'use client';

import Banner from './components/banner';

export default function Home({ lang }: { lang: string }) {
    return (
        <div>
            <Banner lang={lang} />
            <section
                id="services"
                className="mx-20 flex scroll-mt-24 flex-col items-center justify-center rounded-lg bg-background py-10">
                <h2 className="text-center text-4xl font-bold">
                    How may I help you?
                </h2>
                <p>Browse my services and see what fits best!</p>
            </section>
            <section id="portfolio" className="mt-10 scroll-mt-24">
                <div className="mb-4">
                    <h2 className="text-center text-4xl font-bold">
                        Simple. Elegant. Efficient.
                    </h2>
                    <p className="text-center">Check out what I&apos;ve done</p>
                </div>
            </section>
            <section id="testimonials" className="scroll-mt-24">
                <div className="h-0 w-0 border-b-[80px] border-l-[50vw] border-r-[50vw] border-solid border-transparent border-b-background"></div>
                <div className="bg-background pt-10">
                    <div className="py-10">
                        <h2 className="text-center text-4xl font-bold">
                            Don&apos;t just take my word for it!
                        </h2>
                        <p className="text-center">
                            Read what my clients have to say about me
                        </p>
                    </div>
                    <div className="h-0 w-0 border-b-[80px] border-l-[50vw] border-r-[50vw] border-solid border-transparent border-b-white"></div>
                </div>
            </section>
            <section
                id="get-a-quote"
                className="flex scroll-mt-24 flex-col items-center justify-center">
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
