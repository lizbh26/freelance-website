'use client';

import Navbar from './components/navbar';
import Home from './home';

export default function Main({
    params: { lang },
}: {
    params: { lang: string };
}) {
    return (
        <main className="scroll-smooth bg-white text-black">
            <Navbar />
            <Home lang={lang} />
        </main>
    );
}
