import Header from './components/header';
import AboutUs from './components/about-us';
import Services from './components/services';
import CTA from './components/cta';

export default function Home({ lang }: { lang: string }) {
    return (
        <main>
            <Header lang={lang} />
            <AboutUs lang={lang} />
            <Services lang={lang} />
        </main>
    );
}
