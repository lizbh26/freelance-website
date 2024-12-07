'use client';
import { RefObject, useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import Typewriter from 'typewriter-effect';

export default function ChangingAdjectives({ subtitle }: { subtitle: string }) {
    const typewriterRef = useRef<HTMLDivElement>(null);

    const displayStrings = subtitle.split(';');
    const we_are = displayStrings.splice(0, 1)[0];

    function refIsNotNull(
        ref: RefObject<HTMLElement | null>,
    ): ref is RefObject<HTMLElement> {
        return ref !== null;
    }

    return (
        <div className="" ref={typewriterRef}>
            {we_are}{' '}
            {refIsNotNull(typewriterRef) ? (
                <TypewriterBlock
                    ref={typewriterRef}
                    displayStrings={displayStrings}
                />
            ) : (
                <></>
            )}
        </div>
    );
}

function TypewriterBlock({
    ref,
    displayStrings,
}: {
    ref: RefObject<HTMLElement>;
    displayStrings: string[];
}) {
    const { inViewport } = useInViewport(ref);
    const [canBegin, setCanBegin] = useState(false);

    useEffect(() => {
        if (inViewport) setCanBegin(true);
    }, [inViewport]);

    return (
        <span id="changing-adjective" className="inline-block">
            {canBegin ? (
                <Typewriter
                    onInit={(typewriter) => {
                        displayStrings.forEach((str, i) => {
                            typewriter.typeString(str).pauseFor(500);
                            if (i != displayStrings.length - 1)
                                typewriter.deleteAll();
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
