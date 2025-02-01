'use client';

import ServiceChooser from './service_chooser';
import { Service, ServiceOption, ServicesIDs } from './services_content';
import { redirect, usePathname, useSearchParams } from 'next/navigation';

export default function ServiceList({ services }: { services: Service[] }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const selectedID = searchParams.get('selected');

    const selectedName = services.find(
        (service) => service.id === selectedID,
    )?.option;

    if (!selectedID || !selectedName)
        redirect(`${pathname}?selected=${ServicesIDs[0]}`);

    return (
        <section className="rounded-md px-10 py-8 shadow-lg shadow-slate-600 md:py-12">
            <div className="flex flex-col items-center justify-center md:flex-row-reverse md:items-start md:justify-start">
                <ServiceChooser
                    options={services.map((service) => {
                        return {
                            id: service.id,
                            name: service.option,
                        } as ServiceOption;
                    })}
                    selected={{ id: selectedID, name: selectedName }}
                />
                <div className="w-full md:pr-4">
                    {services.map((service) => (
                        <section
                            id={service.id}
                            key={service.id}
                            className={` ${selectedID !== service.id ? 'hidden' : ''}`}>
                            <h2 className="text-center text-3xl font-bold">
                                {service.title}
                            </h2>
                            <h4
                                className="mb-4 text-center text-lg text-neutral-600"
                                dangerouslySetInnerHTML={{
                                    __html: service.price_range,
                                }}></h4>
                            <div
                                className="flex flex-col gap-2 text-justify"
                                dangerouslySetInnerHTML={{
                                    __html: service.body,
                                }}></div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}
