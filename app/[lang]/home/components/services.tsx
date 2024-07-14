import Image from 'next/image';

export default function Services() {
    return (
        <section
            id="services"
            className="bg-neutral-100 px-36 py-10 text-center">
            <h2 className="pb-8 text-center text-4xl font-bold">
                What can we do for you?
            </h2>
            <div className="mb-5 flex justify-between gap-6">
                <ServiceAccordion />
                <ServiceAccordion />
                <ServiceAccordion />
            </div>
            <p>And many more things!</p>
            <div className="mb-1 mt-5 flex items-center justify-center gap-2">
                <p>Interested?</p>
                <button className="rounded bg-primary p-2 px-4 text-white">
                    {"Let's begin working!"}
                </button>
            </div>
            <p>
                Or, you can{' '}
                <a className="underline" href="services">
                    check out our entire catalogue
                </a>
            </p>
        </section>
    );
}

function ServiceAccordion() {
    return (
        <div className="flex w-full flex-col items-center justify-center bg-neutral-200 py-4 transition hover:cursor-pointer hover:bg-neutral-300">
            <Image
                src="/assets/img/webpage_icon.png"
                alt="Website icon"
                width={150}
                height={150}
            />
            <h3 className="text-center text-2xl">
                Business websites & landing pages
            </h3>
        </div>
    );
}
