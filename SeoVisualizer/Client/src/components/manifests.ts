import {ManifestPropertyEditorUi} from "@umbraco-cms/backoffice/extension-registry";

const components: Array<ManifestPropertyEditorUi> = [
    {
        type: "propertyEditorUi",
        alias: "EnkelMedia.SeoVisualizer",
        name: "Seo Visualizer",
        js: () => import('./seo-visualizer'),
        elementName: "seo-visualizer",
        meta: {
            label: "Seo Visualizer",
            icon: "icon-autofill",
            group: "common",
            propertyEditorSchemaAlias: "Umbraco.Plain.Json"
        }
    },
];

export const manifests = [...components];