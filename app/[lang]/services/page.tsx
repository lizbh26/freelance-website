import { Metadata } from 'next';
import { getTranslations } from '@/app/i18n';

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: string };
}): Promise<Metadata> {
    const { t } = await getTranslations(lang, 'services');
    return {
        title: t('meta.title'),
        description: t('meta.description'),
    };
}

export default function Services({
    params: { lang },
}: {
    params: { lang: string };
}) {
    return (
        <main>
            <header className="flex bg-secondary pb-16 pt-36 md:px-20 lg:px-36">
                <h1 className="w-full text-center text-4xl font-bold text-black md:text-start">
                    Services
                </h1>
            </header>
            <article className="px-5 py-10 sm:px-10 md:px-20 lg:px-36">
                <section className="mb-10">
                    <h2 className="text-center text-3xl">Business Websites</h2>
                    <h3 className="text-center text-lg italic text-neutral-500">
                        Your own digital hub
                    </h3>
                    <p>
                        By owning your own website, you take a step that almost
                        no small business owners do: taking control of the
                        conversation.
                    </p>
                    <p>
                        And when you own the conversation, you {"don't"} have to
                        battle with other brands for the attention of potential
                        customers, like in social media; and you can control
                        with precision how users interact with your brand and
                        with your products.
                    </p>
                </section>
                <section className="mb-10">
                    <h2 className="text-center text-3xl">
                        Search Engine Optimization (SEO)
                    </h2>
                    <h3 className="text-center text-lg italic text-neutral-500">
                        Be the first on the search results
                    </h3>
                    <p>
                        One of the most prevalent ways people discover brands is
                        by googling them, and most if not everybody never go
                        past the first page of results (including us!), so
                        making sure you appear near the top is imperative to
                        make your brand grow
                    </p>
                </section>
                <section className="mb-10">
                    <h2 className="text-center text-3xl">
                        Digital marketing campaings
                    </h2>
                    <h3 className="text-center text-lg italic text-neutral-500">
                        For clients to buy from you,{' '}
                        <br className="sm:hidden" /> they have to know you are
                        an option!
                    </h3>
                    <p>
                        Unlike traditional marketing (think of billboards or TV
                        ads), we can target digital ads to exactly the people
                        that are most likely to buy from you, so you dont have
                        to pay nearly as much for even better results
                    </p>
                </section>
                <section className="mb-10">
                    <h2 className="text-center text-3xl">
                        Social media management
                    </h2>
                    <h3 className="text-center text-lg italic text-neutral-500">
                        Appear on {"everybody's"} feeds
                    </h3>
                    <p>
                        In {"today's"} age, people crave connections and
                        authenticity, things that brands without social outreach
                        or a corporate approach can hardly cultivate.
                    </p>
                    <p>
                        By thinking of your clients and their needs before their
                        money, our promotions build loyalty within your
                        customers and make new ones more likely to buy.
                    </p>
                </section>
                <section className="mb-10">
                    <h2 className="text-center text-3xl">
                        Custom e-Commerce solutions{' '}
                    </h2>
                    <h3 className="px-10 text-center text-lg italic text-neutral-500 min-[400px]:px-0">
                        Let your products reach anyone in the world
                    </h3>
                    <p>
                        From outrageous tariffs to oversaturated markets, many
                        times the {"'free'"} marketplaces {"don't"} fit your
                        business needs. This is where custo marketplaces arise:
                        you get the advantages of your having your own website
                        (controling the conversation) and of offering your
                        product or service online (worldwide reach)
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl">
                        Did any of these catch your eye?
                    </h2>
                    <p>
                        If so, you can{' '}
                        <a
                            className="text-primary transition hover:underline"
                            href={`/${lang}/contact`}>
                            schedule a free consultation
                        </a>{' '}
                        where we can assess what your business may benefit from,
                        or you can{' '}
                        <a
                            className="underline transition hover:text-purple-600"
                            href={`/${lang}/pricing`}>
                            consult our prices
                        </a>{' '}
                        for more information.{' '}
                    </p>
                </section>
            </article>
        </main>
    );
}
