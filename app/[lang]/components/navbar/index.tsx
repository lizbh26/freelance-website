import MobileNavigationMenu from './mobileNavMenu';
import NavigationLinks from './navLinks';
import LanguagePicker from './languagePicker';

export default function Navbar({ lang }: { lang: string }) {
    return (
        <nav className="fixed z-20 w-full bg-white px-5 py-3 text-black shadow md:px-10 min-[840px]:px-20 lg:px-36">
            <div className="flex w-full items-center justify-between">
                <MobileNavigationMenu lang={lang} />
                <a className="text-xl text-primary" href={`/${lang}`}>
                    Digital Obelisk
                </a>
                <div className="flex items-center gap-6">
                    <div className="hidden items-center gap-4 md:flex">
                        <NavigationLinks lang={lang} />
                    </div>
                    <LanguagePicker lang={lang} />
                </div>
            </div>
        </nav>
    );
}
