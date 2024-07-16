import LanguagePicker from './languagePicker';

export default function Navbar({ lang }: { lang: string }) {
    return (
        <nav className="fixed z-20 flex w-full items-center justify-between bg-secondary px-36 py-6 text-black">
            <a className="mr-16 text-xl text-primary" href="#top">
                Digital Obelisk
            </a>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <a
                        className="transition hover:text-primary"
                        href="#services">
                        Services
                    </a>
                    <a
                        className="transition hover:text-primary"
                        href="#portfolio">
                        Our work
                    </a>
                    <a
                        className="transition hover:text-primary"
                        href="#testimonials">
                        Testimonials
                    </a>
                    <a
                        className="rounded bg-primary px-2 py-1 text-white transition hover:scale-105"
                        href="#get-a-quote">
                        Get a quote
                    </a>
                </div>
                <LanguagePicker lang={lang} />
            </div>
        </nav>
    );
}
