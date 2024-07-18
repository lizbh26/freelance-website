import Home from './home';

export default function Main({
    params: { lang },
}: {
    params: { lang: string };
}) {
    return <Home lang={lang} />;
}
