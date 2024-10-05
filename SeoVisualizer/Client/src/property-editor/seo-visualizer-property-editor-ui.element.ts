import { LitElement,css,html,customElement,property} from '@umbraco-cms/backoffice/external/lit';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import { UmbTextStyles } from '@umbraco-cms/backoffice/style';

/**
* seo-visualizer-property-editor-ui description
* @element seo-visualizer-property-editor-ui
* @fires CustomEvent#change - lorem ipsum 
* @cssprop --ns-foo-bar - Color of lorem
*/
@customElement('seo-visualizer-property-editor-ui')
export class SeoVisualizerPropertyEditorUiElement extends UmbElementMixin(LitElement) {

    /**
    * Description 
    */
    @property({type:Boolean})
    disabled : boolean = false;

    render() {
        return html`
            <div>
                seo-visualizer-property-editor-ui
            </div>
        `

    }

    static styles = [UmbTextStyles, css`

        :host {
            --lorem-ipsum : var(--lorem-ipsum2,#ff00ff);
        }
    `]
}

export default SeoVisualizerPropertyEditorUiElement;

declare global {
    interface HTMLElementTagNameMap {
        'seo-visualizer-property-editor-ui': SeoVisualizerPropertyEditorUiElement;
    }
}