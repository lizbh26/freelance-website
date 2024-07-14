import Image from 'next/image';

export default function Services() {
    return (
        <section id="services" className='px-36 py-10 bg-neutral-100 text-center'>
            <h2 className='text-4xl text-center pb-8 font-bold'>What can we do for you?</h2>
            <div className='flex justify-between gap-6 mb-5'>
                <ServiceAccordion />
                <ServiceAccordion />
                <ServiceAccordion />
            </div>
            <p>And many more things!</p>
            <div className='flex justify-center items-center gap-2 mt-5'>
                <p>Interested?</p>
                <button className='p-2 px-4 bg-primary rounded text-white'>Let's begin working!</button>
            </div>
            <p>Or, you can <a href="services">check out our entire catalogue</a></p>
        </section>
    );
}

function ServiceAccordion() {
    return (
        <div className='flex justify-center flex-col items-center w-full bg-neutral-200 py-4 hover:bg-neutral-300 transition hover:cursor-pointer'>
            <Image src="/assets/img/webpage_icon.png" alt="Website icon" width={150} height={150} />
            <h3 className='text-2xl text-center'>Business websites & landing pages</h3>
        </div>
    );
}
