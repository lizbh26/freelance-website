import { Metadata } from 'next';
import { getTranslations, Params } from '../i18n';

import Home from './home';

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const { lang } = await params;
    const { t } = await getTranslations(lang, 'home');
    return {
        title: t('meta.title') + ' | The Digital Obelisk',
        description: t('meta.description'),
    };
}

export default async function Main({ params }: { params: Params }) {
    const { lang } = await params;
    return <Home lang={lang} />;
}
