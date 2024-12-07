import { TFunction } from 'i18next';

export type ServiceOption = {
    name: string;
    id: string;
};

export type Service = {
    id: ServiceID;
    title: string;
    tagline: string;
    option: string;
    body: string;
};

export const ServicesIDs = [
    'website',
    'seo',
    'marketing',
    'social-media',
    'content-writing',
    'e-commerce',
] as const;

export type ServiceID = (typeof ServicesIDs)[number];

export function getAllServices(t: TFunction<any, undefined>): Service[] {
    const services: Service[] = [];

    ServicesIDs.forEach((id) =>
        services.push({
            id: id,
            title: t(`services.${id}.title`),
            tagline: t(`services.${id}.tagline`),
            option: t(`services.${id}.option`),
            body: t(`services.${id}.body`),
        }),
    );

    return services;
}
