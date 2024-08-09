export default function AboutUs() {
    return (
        <section
            id="about-us"
            className="lg:px-30 scroll-mt-20 px-5 py-10 md:px-16">
            <div className="flex flex-col items-center justify-center gap-6 md:items-end md:text-end">
                <h2 className="text-center text-3xl font-bold md:w-2/3">
                    Work with people who care about your clients like you do
                </h2>
                <span className="flex flex-col gap-2">
                    <p>
                        We understand that the best and worst user experiences
                        almost always come from technology: for every online
                        order that gets delivered without flaw there is a
                        website that is simply infuriating to use, and so people{' '}
                        {'don’t'} bother.
                    </p>
                    <p>
                        For this reason, our focus is always on the final client
                        and on how they will perceive our solution, the product
                        and your brand.
                    </p>
                </span>
                <a
                    className="w-fit rounded bg-primary px-4 py-2 font-bold text-white shadow transition hover:scale-105"
                    href="/about">
                    Learn more
                </a>
            </div>
        </section>
    );
}
