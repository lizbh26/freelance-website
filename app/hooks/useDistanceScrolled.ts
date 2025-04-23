'use client';

import { useEffect, useState } from 'react';

export default function useDistanceScrolled() {
    const [distanceFromTop, setDistanceFromTop] = useState<number>(0);

    useEffect(() => {
        function handleScroll() {
            setDistanceFromTop(document.documentElement.scrollTop);
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return distanceFromTop;
}
