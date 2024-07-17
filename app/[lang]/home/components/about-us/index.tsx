import ChangingAdjectives from './changingAdjectives';

export default function AboutUs() {
    return (
        <section
            id="about-us"
            className="flex w-full items-center justify-center px-5 pb-16 pt-5 md:justify-end md:px-20 lg:px-36">
            <div className="text-center sm:w-2/3 md:w-1/2 md:text-end">
                <div className="mb-5">
                    <h2 className="mb-2 text-3xl font-bold md:text-4xl">
                        Who are we?
                    </h2>
                    <h3 className="text-2xl md:text-3xl">
                        We are <ChangingAdjectives />
                    </h3>
                </div>
                <p className="mb-4">
                    At Digital Obelisk, we believe that helping out the little
                    guy is the best way to make a difference in this world, and
                    so we want to give small businesses the same opportunities
                    that the giants pay millions of dollars for.
                </p>
                <p>
                    In line with this philosophy, we pride ourselves with being
                    a very inclusive company, so no matter what your background
                    may be, we are here to help you and your dreams grow.
                </p>
            </div>
        </section>
    );
}
