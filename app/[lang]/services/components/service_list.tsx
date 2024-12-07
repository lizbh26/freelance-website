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
    )?.title;

    if (!selectedID || !selectedName)
        redirect(`${pathname}?selected=${ServicesIDs[0]}`);

    return (
        <div className="flex flex-col items-center justify-center md:flex-row-reverse md:items-start md:justify-start">
            <ServiceChooser
                options={services.map((service) => {
                    return {
                        id: service.id,
                        name: service.title,
                    } as ServiceOption;
                })}
                selected={{ id: selectedID, name: selectedName }}
            />
            <div className="md:w-2/3 md:pr-4">
                {services.map((service) => (
                    <section
                        id={service.id}
                        key={service.id}
                        className={` ${selectedID !== service.id ? 'hidden' : ''}`}>
                        <h2 className="text-center text-3xl font-bold">
                            {service.title}
                        </h2>
                        <h3
                            className="mb-4 text-center text-lg italic text-neutral-500"
                            dangerouslySetInnerHTML={{
                                __html: service.tagline,
                            }}></h3>
                        <div
                            className="flex flex-col gap-2 text-center"
                            dangerouslySetInnerHTML={{
                                __html: service.body,
                            }}></div>
                    </section>
                ))}
            </div>
        </div>
    );
}
