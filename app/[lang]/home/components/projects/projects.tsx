import Image from 'next/image';

export default function Projects() {
    return (
        <section
            id="portfolio"
            className="mb-16 mt-10 scroll-mt-28 px-5 md:px-20">
            <div className="mb-5">
                <h2 className="text-center text-4xl font-bold">
                    Simple. Elegant. Efficient.
                </h2>
                <p className="text-center">See it to believe it</p>
            </div>
            <div>
                <Image
                    className="border-2 border-black md:w-1/3"
                    src={
                        '/assets/img/past-projects/CoordinacionCarreras/CoordinacionCarreras-1.png'
                    }
                    alt="A webpage with percentages of users"
                    width={1980}
                    height={1020}
                />
            </div>
        </section>
    );
}
