export type ServiceOption = {
    name: string;
    id: string;
};

export type Service = {
    id: string;
    title: string;
    tagline: string;
    body: string;
};
export const service_options: ServiceOption[] = [
    { id: 'websites', name: 'Business websites' },
    { id: 'seo', name: 'SEO optimization' },
    { id: 'marketing', name: 'Marketing campaigns' },
    { id: 'social-media', name: 'Social media management' },
    { id: 'content-writing', name: 'Content writing' },
    { id: 'e-commerce', name: 'e-Commerce solutions' },
];

export const services: Service[] = [
    {
        id: 'websites',
        title: 'Business Websites',
        tagline: 'Your own digital hub',
        body: `<p>
                        By owning your own website, you take a step that almost
                        no small business owners do: taking control of the
                        conversation.
                    </p>
                    <p>
                        And when you own the conversation, you don't have to
                        battle with other brands for the attention of potential
                        customers, like in social media; and you can control
                        with precision how users interact with your brand and
                        with your products.
                    </p>`,
    },
    {
        id: 'seo',
        title: 'Search Engine Optimization (SEO)',
        tagline: 'Be the first on the search results',
        body: `<p>
                        One of the most prevalent ways people discover brands is
                        by googling them, and most if not everybody never go
                        past the first page of results (including us!), so
                        making sure you appear near the top is imperative to
                        make your brand grow
                    </p>`,
    },
    {
        id: 'marketing',
        title: 'Digital marketing campaings',
        tagline: `For clients to buy from you,
                        <br className="sm:hidden" /> they have to know you are
                        an option!`,
        body: `<p>
                        Unlike traditional marketing (think of billboards or TV
                        ads), we can target digital ads to exactly the people
                        that are most likely to buy from you, so you dont have
                        to pay nearly as much for even better results
                    </p>`,
    },
    {
        id: 'social-media',
        title: 'Social media management',
        tagline: `Appear on everybody's feeds`,
        body: `<p>
                        In today's age, people crave connections and
                        authenticity, things that brands without social outreach
                        or an overly corporate approach can hardly cultivate.
                    </p>
                    <p>
                        By thinking of your clients and their needs before their
                        money, our promotions build loyalty within your
                        customers and make new ones more likely to buy.
                    </p>`,
    },
    {
        id: 'content-writing',
        title: 'Content writing',
        tagline: 'placeholder',
        body: ``,
    },
    {
        id: 'e-commerce',
        title: 'Custom e-Commerce solutions',
        tagline: 'Let your products reach anyone in the world',
        body: `<p>
                        From outrageous tariffs to oversaturated markets, many
                        times the "free" marketplaces don't fit your
                        business needs. This is where custo marketplaces arise:
                        you get the advantages of your having your own website
                        (controling the conversation) and of offering your
                        product or service online (worldwide reach)
                    </p>`,
    },
];
