import Showcase from './showcase';

export default function Testimonials() {
    return (
        <section id="testimonials" className="scroll-mt-24">
            <div className="h-0 w-0 border-b-[40px] border-l-[50vw] border-r-[50vw] border-solid border-transparent border-b-background md:border-b-[80px]"></div>
            <div className="bg-background pt-2">
                <div className="px-5 pb-5">
                    <h2 className="text-center text-4xl font-bold">
                        Not convinced yet?
                    </h2>
                    <p className="text-center">
                        You can check out what our past clients have to say
                        about us:
                    </p>
                    <Showcase />
                </div>
                <div className="h-0 w-0 border-b-[40px] border-l-[50vw] border-r-[50vw] border-solid border-transparent border-b-white md:border-b-[80px]"></div>
            </div>
        </section>
    );
}
