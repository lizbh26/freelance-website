'use client';
import feather from 'feather-icons';

export default function Showcase() {
    return (
        <div className="mt-4 flex w-full flex-col items-center justify-center">
            <div className="h-20 w-full bg-white sm:w-3/5"></div>
            <div className="flex h-10 items-center justify-center">
                <span
                    className="mr-4"
                    dangerouslySetInnerHTML={{
                        __html: feather.icons['chevron-left'].toSvg(),
                    }}
                />
                <span
                    className="flex items-center justify-center"
                    dangerouslySetInnerHTML={{
                        __html: feather.icons.circle.toSvg({
                            fill: 'black',
                            width: '80%',
                        }),
                    }}
                />
                <span
                    className="ml-4"
                    dangerouslySetInnerHTML={{
                        __html: feather.icons['chevron-right'].toSvg(),
                    }}
                />
            </div>
        </div>
    );
}
