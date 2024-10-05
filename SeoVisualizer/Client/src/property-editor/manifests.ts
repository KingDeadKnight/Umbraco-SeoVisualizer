import { ManifestPropertyEditorSchema, ManifestPropertyEditorUi } from '@umbraco-cms/backoffice/extension-registry';

const schema : ManifestPropertyEditorSchema = {
    type : 'propertyEditorSchema',
    name : 'Seo Visualizer Property Editor Schema',
    alias : 'EnkelMedia.SeoVisualizer', //NOTE: This is matched with server-side info
    meta : {
        defaultPropertyEditorUiAlias : 'EnkelMedia.SeoVisualizer.PropertyEditorUi',
        settings : {
            properties : [
                {
                    alias : 'min',
                    label : 'Minimum number of items',
                    description : '',
                    propertyEditorUiAlias : 'Umb.PropertyEditorUi.Integer'
                },
                {
                    alias : 'max',
                    label : 'Maximum number of items',
                    description : '',
                    propertyEditorUiAlias : 'Umb.PropertyEditorUi.Integer'
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
