import { ManifestPropertyEditorUi } from "@umbraco-cms/backoffice/extension-registry";

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
            propertyEditorSchemaAlias: "Umbraco.Plain.Json",
            settings: {
                properties: [
                    {
                        label: "Recommended number of characters for Title warning",
                        description: "Will show warning when the title contains more chars than defined. (Default is 60).",
                        alias: "maxCharsTitle",
                        propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer"
                    },
                    {
                        label: "Recommended number of characters for Description warning",
                        description: "Will show warning when the description contains more chars than defined. (Default is 160).",
                        alias: "maxCharsDescription",
                        propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
                    },
                    {
                        label: "Default Title Suffix",
                        description: "Will append a suffix to the Title preview (not included in the saved data)",
                        alias: "titleSuffix",
                        propertyEditorUiAlias: "Umb.PropertyEditorUi.TextBox"
                    },
                    {
                        label: "Show noindex-option",
                        description: "Use this to show a noindex-toggle in the editor",
                        alias: "useNoIndex",
                        propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
                    }
                ],
                defaultData: [
                    {
                        alias: "maxCharsTitle",
                        value: 60
                    },
                    {
                        alias: "maxCharsDescription",
                        value: 160
                    }
                ]
            }
        }
    }
];

export const manifests = [...components];