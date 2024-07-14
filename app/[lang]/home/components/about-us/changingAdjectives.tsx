'use client';
import { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import Typewriter from 'typewriter-effect';

export default function ChangingAdjectives() {
    const spanRef = useRef<HTMLSpanElement | null>(null);
    const { inViewport } = useInViewport(spanRef);
    const [canBegin, setCanBegin] = useState(false);

    useEffect(() => {
        if (inViewport) setCanBegin(true);
    }, [inViewport]);

    const adjectives = [
        'builders',
        'designers',
        'programmers',
        'your solution.',
    ];
    return (
        <span id="changing-adjective" className="inline-block" ref={spanRef}>
            {canBegin ? (
                <Typewriter
                    onInit={(typewriter) => {
                        console.log('HI!');
                        typewriter
                            .typeString('builders')
                            .pauseFor(500)
                            .deleteAll()
                            .typeString('designers')
                            .pauseFor(500)
                            .deleteAll()
                            .typeString('programmers')
                            .pauseFor(500)
                            .deleteAll()
                            .typeString('your solution.')
                            .start();
                    }}
                    options={{ autoStart: true }}
                />
            ) : (
                <></>
            )}
        </span>
    );
}
