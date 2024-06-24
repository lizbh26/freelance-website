import Image from 'next/image';
import { useState, useRef, useLayoutEffect } from 'react';

export default function Banner() {
    return (
        <section
            id="top"
            className="flex h-screen flex-col items-center justify-center">
            <h1 className="text-center text-5xl">
                Spend your time doing the things you <LoveUnderline /> most,{' '}
                <br />
                let me handle the rest.
            </h1>
            <a
                href="#get-a-quote"
                className="mt-10 rounded-lg border-4 border-primary bg-primary p-2 text-2xl text-white transition hover:scale-105">
                Get a quoute
            </a>
            <a
                href="#services"
                className="mt-2 underline transition hover:text-primary">
                {' '}
                or see what I can do for you
            </a>
        </section>
    );
}

function LoveUnderline() {
    const [underlineSize, setUnderlineSize] = useState({
        x: -5,
        y: 0,
        width: 0,
        height: 0,
    });
    const loveSpanRef = useRef<HTMLSpanElement | null>(null);

    useLayoutEffect(() => {
        function updateUnderline() {
            if (!loveSpanRef.current) return;
            let { x, bottom, width, height } =
                loveSpanRef.current.getBoundingClientRect();
            width += 10;
            x -= 5;
            height = height / 2;

            if (underlineSize.y === height) return;
            setUnderlineSize({ x: -5, y: height, width, height });
        }
        window.addEventListener('resize', updateUnderline);
        updateUnderline();
        return () => window.removeEventListener('resize', updateUnderline);
    }, [underlineSize]);
    return (
        <>
            <span ref={loveSpanRef} className="relative">
                love
                <div
                    className="absolute"
                    style={{ top: underlineSize.y, left: underlineSize.x }}>
                    <Image
                        src={'/banner_love_underline.svg'}
                        alt=""
                        width={underlineSize.width}
                        height={underlineSize.height}
                        className="mix-blend-darken"
                    />
                </div>
            </span>
        </>
    );
}
