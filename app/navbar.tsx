export default function Navbar() {
    return (
        <nav className="fixed z-20 flex w-full items-center justify-between bg-white px-28 py-6 shadow">
            <div className="flex items-center gap-4">
                <a className="mr-16 text-xl text-primary" href="#top">
                    Ashley Lizbeth
                </a>
                <a className="transition hover:text-primary" href="#services">
                    Services
                </a>
                <a className="transition hover:text-primary" href="#portfolio">
                    Portfolio
                </a>
                <a
                    className="transition hover:text-primary"
                    href="#testimonials">
                    Testimonials
                </a>
                <a
                    className="transition hover:text-primary"
                    href="#get-a-quote">
                    Get a quote
                </a>
            </div>
            <div>English</div>
        </nav>
    );
}
