import feather from 'feather-icons';
import LanguagePicker from './languagePicker';

export default function LaptopNavbar({ lang }: { lang: string }) {
    return (
        <div className="relative hidden w-full items-center justify-between px-20 md:flex lg:px-36">
            <a className="text-xl text-primary" href={`/${lang}`}>
                Digital Obelisk
            </a>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <a
                        className="transition hover:text-primary"
                        href="/services">
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
        </div>
    );
}
