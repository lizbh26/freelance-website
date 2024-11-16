import { getTranslations } from '@/app/i18n';
import Image from 'next/image';
import Link from 'next/link';

export default async function Services({ lang }: { lang: string }) {
    return (
        <section
            id="services"
            className="scroll-mt-20 bg-neutral-100 px-5 py-10 md:px-20 lg:px-36">
            <div className="pb-8 text-center">
                <h2 className="text-3xl font-bold">
                    Make your business stand out from the rest
                </h2>
                <p>
                    Leverage digital tools to gain an edge from the competition
                </p>
            </div>
            <div className="mb-5 flex flex-col justify-between gap-6 sm:flex-row">
                <Link
                    className="flex w-full flex-col items-center justify-center bg-neutral-200 py-4 transition hover:cursor-pointer hover:bg-neutral-300"
                    href={{
                        pathname: '/services',
                        query: { search: 'business_website' },
                    }}>
                    <Image
                        src="/assets/img/webpage_icon.png"
                        alt="Website icon"
                        width={150}
                        height={150}
                    />
                    <h3 className="px-4 text-center text-2xl">
                        Business websites
                    </h3>
                </Link>
                <Link
                    className="flex w-full flex-col items-center justify-center bg-neutral-200 py-4 transition hover:cursor-pointer hover:bg-neutral-300"
                    href={{
                        pathname: '/services',
                        query: { search: 'ad_campaign' },
                    }}>
                    <Image
                        src="/assets/img/advertising.png"
                        alt="Advertising icon"
                        width={150}
                        height={150}
                    />
                    <h3 className="px-4 text-center text-2xl">Ad campaigns</h3>
                </Link>
                <Link
                    className="flex w-full flex-col items-center justify-center bg-neutral-200 py-4 transition hover:cursor-pointer hover:bg-neutral-300"
                    href={{
                        pathname: '/services',
                        query: { search: 'ecommerce' },
                    }}>
                    <Image
                        src="/assets/img/ecommerce.png"
                        alt="e-Commerce icon"
                        width={150}
                        height={150}
                    />
                    <h3 className="px-4 text-center text-2xl">
                        e-Commerce solutions
                    </h3>
                </Link>
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
