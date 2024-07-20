import { Metadata } from 'next';
import { useTranslation } from '../i18n';

import Home from './home';

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: string };
}): Promise<Metadata> {
    const { t } = await useTranslation(lang, 'home');
    return {
        title: t('meta.title'),
        description: t('meta.description'),
    };
}

export default function Main({
    params: { lang },
}: {
    params: { lang: string };
}) {
    return <Home lang={lang} />;
}
