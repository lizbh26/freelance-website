'use client';
import { useState } from 'react';
import feather from 'feather-icons';

import ServiceChooser from './service_chooser';
import { service_options, ServiceOption, services } from './services_content';

export default function ServiceList() {
    const [selected, setSelected] = useState<ServiceOption>(service_options[0]);

    return (
        <div className="flex flex-col items-center justify-center border-b-2 border-black pb-8 md:flex-row-reverse md:items-start md:justify-start md:border-0">
            <ServiceChooser
                selected={selected}
                setSelected={(newSelected) => setSelected(newSelected)}
            />
            <div className="md:w-2/3 md:pr-4">
                {services.map((service) => (
                    <section
                        id={service.id}
                        key={service.id}
                        className={` ${selected.id !== service.id ? 'hidden' : ''}`}>
                        <h2 className="text-center text-3xl font-bold">
                            {service.title}
                        </h2>
                        <h3
                            className="mb-4 text-center text-lg italic text-neutral-500"
                            dangerouslySetInnerHTML={{
                                __html: service.tagline,
                            }}></h3>
                        <div
                            className="flex flex-col gap-2"
                            dangerouslySetInnerHTML={{
                                __html: service.body,
                            }}></div>
                    </section>
                ))}
            </div>
        </div>
    );
}
