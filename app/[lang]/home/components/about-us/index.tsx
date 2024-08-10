export default function AboutUs() {
    return (
        <section
            id="about-us"
            className="lg:px-30 scroll-mt-20 px-5 py-10 sm:px-16 md:px-20">
            <div className="md:flex md:flex-row-reverse">
                <div className="flex flex-col items-center justify-center gap-6 md:w-3/5 md:items-end md:text-end xl:w-1/2">
                    <h2 className="text-center text-3xl font-bold md:text-end">
                        Work with people who care about your clients like you do
                    </h2>
                    <span className="flex flex-col gap-2">
                        <p>
                            We understand that the best and worst user
                            experiences almost always come from technology: for
                            every online order that gets delivered without flaw
                            there is a website that is simply infuriating to
                            use, and so people {'don’t'} bother.
                        </p>
                        <p>
                            For this reason, our focus is always on the final
                            client and on how they will perceive our solution,
                            the product and your brand.
                        </p>
                    </span>
                </div>
            </div>
        </section>
    );
}
