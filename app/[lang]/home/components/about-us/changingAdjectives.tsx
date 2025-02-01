'use client';
import { RefObject, useEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';

export default function ChangingAdjectives({ subtitle }: { subtitle: string }) {
    const typewriterRef = useRef<HTMLDivElement>(null);

    const displayStrings = subtitle.split(';');

    return (
        <div className="" id="typewriter-wrapper" ref={typewriterRef}>
            <TypewriterBlock
                ref={typewriterRef}
                displayStrings={displayStrings}
            />
        </div>
    );
}

function TypewriterBlock({
    ref,
    displayStrings,
}: {
    ref: RefObject<HTMLElement | null>;
    displayStrings: string[];
}) {
    const [canBegin, setCanBegin] = useState(false);
    const [distanceFromTop, setDistanceFromTop] = useState<number | null>(null);

    useEffect(() => {
        const minimumDistance = Math.min(300, window?.innerHeight);
        if (distanceFromTop && distanceFromTop < minimumDistance) {
            setCanBegin(true);
        }
    }, [distanceFromTop]);

    useEffect(() => {
        if (!ref || !ref.current) return;

        setDistanceFromTop(ref.current.getBoundingClientRect().top);

        function handleScroll() {
            if (ref.current) {
                setDistanceFromTop(ref.current.getBoundingClientRect().top);
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [ref]);

    return (
        <span id="changing-adjective" className="inline-block">
            {canBegin ? (
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(60);
                        typewriter.changeDeleteSpeed(30);
                        displayStrings.forEach((str, i) => {
                            typewriter.typeString(str);
                            if (i != displayStrings.length - 1 && i != 0) {
                                typewriter.pauseFor(400);
                                typewriter.deleteChars(str.length);
                                typewriter.pauseFor(100);
                            }
                        });
                        typewriter.start();
                    }}
                />
            ) : (
                <></>
            )}
        </span>
    );
}
