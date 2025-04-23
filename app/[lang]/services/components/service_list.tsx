import Image from 'next/image';
import { Service } from './services_content';

export default function ServiceList({ services }: { services: Service[] }) {
    return (
        <section className="rounded-md">
            <div className="flex flex-col items-center justify-center">
                {services.map((service, i) => (
                    <section
                        id={service.id}
                        key={service.id}
                        className={`flex scroll-mt-14 flex-col px-5 py-14 sm:px-16 md:px-20 lg:px-36 ${i % 2 == 0 ? '' : 'bg-gray-100'}`}>
                        <div
                            className={`flex flex-col items-center ${i % 2 == 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                            <Image
                                width={100}
                                height={100}
                                src={`/assets/img/service_${service.id}.png`}
                                alt={service.title}
                                className="w-3/5 min-[450px]:w-1/2 sm:w-1/3 md:w-1/5"
                            />
                            <div
                                className={`text-center ${i % 2 == 0 ? 'sm:ml-5 sm:text-start' : 'sm:mr-5 sm:text-end'}`}>
                                <h2 className={`text-3xl font-bold`}>
                                    {service.title}
                                </h2>
                                <h4 className="text-md mb-4 text-neutral-600">
                                    {service.price_range}
                                </h4>
                            </div>
                        </div>
                        <div
                            className="flex flex-col gap-2 text-justify"
                            dangerouslySetInnerHTML={{
                                __html: service.body,
                            }}></div>
                    </section>
                ))}
            </div>
        </section>
    );
}
