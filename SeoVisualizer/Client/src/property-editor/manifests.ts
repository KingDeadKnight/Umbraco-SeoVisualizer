import { ManifestPropertyEditorSchema, ManifestPropertyEditorUi } from '@umbraco-cms/backoffice/extension-registry';

const schema : ManifestPropertyEditorSchema = {
    type : 'propertyEditorSchema',
    name : 'Seo Visualizer Property Editor Schema',
    alias : 'EnkelMedia.SeoVisualizer', //NOTE: This is matched with server-side info
    meta : {
        defaultPropertyEditorUiAlias : 'EnkelMedia.SeoVisualizer.PropertyEditorUi',
        settings : {
            properties: [
                {
                    label : "Recommended number of characters for Title warning",
                    description : "Will show warning when the title contains more chars than defined. (Default is 60).",
                    alias : "maxCharsTitle",
                    propertyEditorUiAlias : "Umb.PropertyEditorUi.Integer"
                },
                {
                    label : "Recommended number of characters for Description warning",
                    description : "Will show warning when the description contains more chars than defined. (Default is 160).",
                    alias : "maxCharsDescription",
                    propertyEditorUiAlias : "Umb.PropertyEditorUi.Integer",
                },
                {
                    label : "Default Title Suffix",
                    description : "Will append a suffix to the Title preview (not included in the saved data)",
                    alias : "titleSuffix",
                    propertyEditorUiAlias : "Umb.PropertyEditorUi.TextBox"
                },
                {
                    label : "Show noindex-option",
                    description : "Use this to show a noindex-toggle in the editor",
                    alias : "useNoIndex",
                    propertyEditorUiAlias : "Umb.PropertyEditorUi.Toggle"
                }
            ],
            defaultData : [
                {
                    alias : "maxCharsTitle",
                    value : 60
                },
                {
                    alias : "maxCharsDescription",
                    value : 160
                }
            ]
        }
    }
}

const ui : ManifestPropertyEditorUi = {
    type: "propertyEditorUi",
    alias : "EnkelMedia.SeoVisualizer.PropertyEditorUi",
    name : "Seo Visualizer",
    element : ()=> import('./seo-visualizer-property-editor-ui.element.ts'),
    meta : {
        label : 'Seo Visualizer',
        icon : 'icon-search',
        group : "Seo",
        propertyEditorSchemaAlias : 'EnkelMedia.SeoVisualizer'
    }
};

export const manifests = [
    schema,
    ui,
]
