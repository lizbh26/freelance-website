'use client';
import useWindowDimensions from '@/app/hooks/useWindowDimensions';
import Image from 'next/image';

export default function HeaderSeparator() {
    const { width } = useWindowDimensions();
    return (
        <Image
            className="w-full overflow-hidden"
            src={`/assets/header-separator${width < 800 ? '-mobile' : ''}.png`}
            alt=""
            width={width < 800 ? 800 : 1980}
            height={'200'}
        />
    );
}
