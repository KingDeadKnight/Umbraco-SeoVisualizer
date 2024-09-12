import {ManifestLocalization} from "@umbraco-cms/backoffice/extension-registry";

const localizations: Array<ManifestLocalization> = [
    {
        type: 'localization',
        alias: 'seovisualizer.i18n.enus',
        name: 'English (US)',
        weight: 0,
        meta: {
            culture: 'en-us'
        },
        js: () => import('./en'),
    },
    {
        type: 'localization',
        alias: 'seovisualizer.i18n.engb',
        name: 'English (GB)',
        weight: 0,
        meta: {
            culture: 'en-gb'
        },
        js: () => import('./en'),
    }
];

export const manifests = [...localizations];