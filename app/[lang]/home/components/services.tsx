import { getTranslations } from '@/app/i18n';
import Image from 'next/image';

export default async function Services({ lang }: { lang: string }) {
    return (
        <section
            id="services"
            className="scroll-mt-20 px-5 py-10 md:px-20 lg:px-36">
            <h2 className="pb-8 text-center text-4xl font-bold">
                What can we do for you?
            </h2>
            <div className="mb-5 flex flex-col justify-between gap-6 sm:flex-row">
                <div className="flex w-full flex-col items-center justify-center bg-neutral-100 py-4 transition hover:cursor-pointer hover:bg-neutral-300">
                    <Image
                        src="/assets/img/webpage_icon.png"
                        alt="Website icon"
                        width={150}
                        height={150}
                    />
                    <h3 className="px-4 text-center text-2xl">
                        Business websites & landing pages
                    </h3>
                </div>
                <div className="flex w-full flex-col items-center justify-center bg-neutral-100 py-4 transition hover:cursor-pointer hover:bg-neutral-300">
                    <Image
                        src="/assets/img/advertising.png"
                        alt="Website icon"
                        width={150}
                        height={150}
                    />
                    <h3 className="px-4 text-center text-2xl">
                        Ad campaigns & email lists
                    </h3>
                </div>
                <div className="flex w-full flex-col items-center justify-center bg-neutral-100 py-4 transition hover:cursor-pointer hover:bg-neutral-300">
                    <Image
                        src="/assets/img/shopify_logo.png"
                        alt="Website icon"
                        width={150}
                        height={150}
                    />
                    <h3 className="px-4 text-center text-2xl">
                        Custom e-Commerce solutions
                    </h3>
                </div>
            </div>
            <div className="text-center">
                <p>And many more things!</p>
                <div className="mb-1 mt-5 flex items-center justify-center gap-2">
                    <p>Interested?</p>
                    <button className="rounded bg-primary p-2 px-4 font-bold text-white transition hover:scale-105">
                        {"Let's begin working!"}
                    </button>
                </div>
                <p>
                    Or, you can{' '}
                    <a
                        className="underline transition hover:text-primary"
                        href={`/${lang}/services`}>
                        check out our entire catalogue
                    </a>
                </p>
            </div>
        </section>
    );
}
