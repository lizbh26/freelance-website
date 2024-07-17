import feather from 'feather-icons';
import LanguagePicker from './languagePicker';
import MobileNavbar from './mobile';
import LaptopNavbar from './laptop';

export default function Navbar({ lang }: { lang: string }) {
    return (
        <nav className="fixed z-20 w-full bg-white py-3 text-black shadow">
            <MobileNavbar lang={lang} />
            <LaptopNavbar lang={lang} />
        </nav>
    );
}
