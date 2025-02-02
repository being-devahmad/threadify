'use client'

import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

interface ImageProps {
    path: string;
    width?: number;
    height?: number;
    alt: string;
    className?: string;
    tr?: boolean
}

export const Image = ({ path, width, height, alt, className, tr }: ImageProps) => {
    return (
        <div>
            <IKImage
                urlEndpoint={urlEndpoint}
                path={path}
                width={width}
                height={height}
                alt={alt}
                {...(tr ?
                    {
                        transformation:
                            [{ width: `${width}`, height: `${height}` }]
                    } :
                    {
                        width: width,
                        height: height
                    })}

                className={className}

            />
        </div>
    );
}