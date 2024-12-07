'use client';

import { useState } from 'react';
import feather from 'feather-icons';
import { ServiceOption } from './services_content';
import { usePathname } from 'next/navigation';

interface ServiceChooserProps {
    options: ServiceOption[];
    selected: ServiceOption;
}

export default function ServiceChooser({
    options,
    selected,
}: ServiceChooserProps) {
    const [isShowing, setIsShowing] = useState(false);
    const url = usePathname();

    return (
        <div className="relative mb-8 flex w-4/5 flex-col items-center justify-center max-[360px]:w-full min-[550px]:w-1/2 md:mb-0 md:w-1/3 md:border-l-2 md:border-primary md:pl-2 lg:w-1/4">
            <button
                id="service-dropdown"
                onClick={() => setIsShowing(!isShowing)}
                className="relative flex w-full rounded border-2 border-neutral-200 bg-white py-2 pl-4 pr-8 md:hidden">
                <span>{selected.name}</span>
                <div
                    className={`absolute right-1 transition ${isShowing ? 'rotate-180' : ''}`}
                    dangerouslySetInnerHTML={{
                        __html: feather.icons['chevron-down'].toSvg(),
                    }}></div>
            </button>
            <div
                id="service-list"
                className={`absolute top-12 flex w-full flex-col overflow-hidden rounded bg-white px-6 shadow transition-all md:relative md:top-0 md:max-h-max md:p-0 md:shadow-none ${isShowing ? 'max-h-80' : 'max-h-0'}`}>
                {options.map((option) => (
                    <button
                        key={option.id}
                        id={option.id}
                        className={`my-1 text-start transition-all ${selected.id === option.id ? 'cursor-default font-bold text-primary' : 'hover:pl-2 hover:text-primary'}`}
                        onClick={() =>
                            window.history.pushState(
                                null,
                                '',
                                `${url}?selected=${option.id}`,
                            )
                        }>
                        {option.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
