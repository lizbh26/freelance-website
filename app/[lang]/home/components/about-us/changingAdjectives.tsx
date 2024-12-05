'use client';
import { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import Typewriter from 'typewriter-effect';

export default function ChangingAdjectives({ subtitle }: { subtitle: string }) {
    const spanRef = useRef<HTMLSpanElement | null>(null);
    const { inViewport } = useInViewport(spanRef);
    const [canBegin, setCanBegin] = useState(false);

    useEffect(() => {
        if (inViewport) setCanBegin(true);
    }, [inViewport]);

    const displayStrings = subtitle.split(';');
    const we_are = displayStrings.splice(0, 1)[0];

    return (
        <div>
            {we_are}{' '}
            <span
                id="changing-adjective"
                className="inline-block"
                ref={spanRef}>
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
        </div>
    );
}
