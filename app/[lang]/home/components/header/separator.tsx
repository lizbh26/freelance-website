'use client';
import Image from 'next/image';

export default function HeaderSeparator() {
    return (
        <>
            <Image
                className="w-full overflow-hidden min-[800px]:hidden"
                src="/assets/header-separator-mobile.png"
                alt=""
                width={800}
                height={200}
            />
            <Image
                className="w-full overflow-hidden max-[800px]:hidden"
                src={`/assets/header-separator.png`}
                alt=""
                width={1980}
                height={200}
            />
        </>
    );
}
