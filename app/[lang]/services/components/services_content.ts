import { TFunction } from 'i18next';

export type ServiceOption = {
    name: string;
    id: string;
};

export type Service = {
    id: ServiceID;
    price_range: string;
    title: string;
    option: string;
    body: string;
};

export const ServicesIDs = [
    'website',
    'mobile',
    'marketing',
    'social-media',
    'e-commerce',
] as const;

export type ServiceID = (typeof ServicesIDs)[number];

export function getAllServices(t: TFunction<any, undefined>): Service[] {
    const services: Service[] = [];

    ServicesIDs.forEach((id) =>
        services.push({
            id: id,
            title: t(`services.${id}.title`),
            price_range:
                t(`services.price-range-tag`) +
                t(`services.${id}.price-range`),
            option: t(`services.${id}.option`),
            body: t(`services.${id}.body`),
        }),
    );

    return services;
}
