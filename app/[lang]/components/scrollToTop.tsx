'use client';

import useDistanceScrolled from '@/app/hooks/useDistanceScrolled';
import feather from 'feather-icons';

export default function ScrollToTop() {
    const distanceFromTop = useDistanceScrolled();

    return (
        <div className="fixed bottom-2 right-2">
            <button
                type="button"
                dangerouslySetInnerHTML={{
                    __html: feather.icons['chevrons-up'].toSvg({
                        stroke: 'white',
                    }),
                }}
                className={`rounded-full bg-primary p-2 transition ${distanceFromTop > 300 ? 'scale-100' : 'scale-0'} `}
                onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }
            />
        </div>
    );
}
