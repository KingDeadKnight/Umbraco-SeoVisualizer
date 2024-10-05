import { LitElement,css,html,customElement,property, state} from '@umbraco-cms/backoffice/external/lit';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import { UmbTextStyles } from '@umbraco-cms/backoffice/style';
import {UmbPropertyEditorConfigCollection, UmbPropertyValueChangeEvent} from "@umbraco-cms/backoffice/property-editor";
import {DEFAULT_MAX_CHARS_DESCRIPTION, DEFAULT_MAX_CHARS_TITLE} from "../models/constants.ts";
import {SeoValues} from "../models/seo-values.ts";

/**
* seo-visualizer-property-editor-ui description
* @element seo-visualizer-property-editor-ui
* @fires CustomEvent#change - lorem ipsum
* @cssprop --ns-foo-bar - Color of lorem
*/
@customElement('seo-visualizer-property-editor-ui')
export class SeoVisualizerPropertyEditorUiElement extends UmbElementMixin(LitElement) {

    @property()
    public value?: Partial<SeoValues>;

    @property()
    private _titleSuffix?: string;

    @property()
    private _maxCharsTitle: number = DEFAULT_MAX_CHARS_TITLE;

    @property()
    private _maxCharsDescription: number = DEFAULT_MAX_CHARS_DESCRIPTION;

    @state()
    private _useNoIndex: boolean = false;

    @state()
    private _showExcludeTitleSuffix: boolean = false;

    public set config(config: UmbPropertyEditorConfigCollection | undefined) {
        this._useNoIndex = config?.getValueByAlias('useNoIndex') ?? false;
        this._titleSuffix = config?.getValueByAlias('titleSuffix');
        this._showExcludeTitleSuffix  = !!(this._titleSuffix && this._titleSuffix !== '');
        this._maxCharsTitle = config?.getValueByAlias('maxCharsTitle') ?? DEFAULT_MAX_CHARS_TITLE;
        this._maxCharsDescription = config?.getValueByAlias('maxCharsDescription') ?? DEFAULT_MAX_CHARS_DESCRIPTION;
    }

    #dispatchChangeEvent() {
        this.dispatchEvent(new UmbPropertyValueChangeEvent());
    }

    #onTitleInput(e: InputEvent) {
        this.value = {...this.value, title: (e.target as HTMLInputElement).value};
        this.#dispatchChangeEvent();
    }

    #onDescriptionInput(e: InputEvent) {
        this.value = {...this.value, description: (e.target as HTMLInputElement).value};
        this.#dispatchChangeEvent();
    }

    #onNoIndexToggle(e: InputEvent) {
        this.value = {...this.value, noIndex: (e.target as HTMLInputElement).checked};
        this.#dispatchChangeEvent();
    }

    #onExcludeTitleSuffixToggle(e: InputEvent) {
        this.value = {...this.value, excludeTitleSuffix: (e.target as HTMLInputElement).checked};
        this.#dispatchChangeEvent();
    }

    getTitle(): string {
        let title = '';

        if (this.value?.title && this.value.title !== '') {

            title = this.value.title;
        }

        // TODO: Take the current node name if title is empty

        // Only append suffix if we have a value to render.
        if (title === '') {
            return title;
        }

        // Only append suffix if there is a value set
        if (this.value && this._showExcludeTitleSuffix && !this.value.excludeTitleSuffix) {
            return `${title} ${this._titleSuffix}`;
        } else {
            return title;
        }
    }

    getUrl(): string {
        // TODO: retrieve the current node url
        return "WIP";
    }

    render() {
        return html`
            <div class="sv-form">
                <div>
                    <uui-input placeholder="${this.localize.term('seoVisualizer_title_placeholder')}"
                               @input=${this.#onTitleInput}
                               .value=${this.value?.title || ""}></uui-input>
                    <!-- TODO: <p class="sv-error">${this.localize.term('seoVisualizer_max_length', this._maxCharsTitle)}</p>-->
                </div>
                <div>
                    <uui-textarea placeholder="${this.localize.term('seoVisualizer_description_placeholder')}"
                                  @input=${this.#onDescriptionInput}
                                  .value=${this.value?.description || ""}></uui-textarea>
                        <!-- TODO: <p class="sv-error">${this.localize.term('seoVisualizer_max_length', this._maxCharsDescription)}</p>-->
                </div>
                ${ (this._useNoIndex || this._showExcludeTitleSuffix) ?
                html`
                    <div class="sv-options">
                        ${this._showExcludeTitleSuffix ?
                        html`
                                <uui-toggle .checked="${this.value?.excludeTitleSuffix || false}"
                                            @change="${this.#onExcludeTitleSuffixToggle}">
                                    ${this.localize.term('seoVisualizer_exclude_title_suffix')}
                                </uui-toggle>
                        ` : ''}
                        ${this._useNoIndex ?
                        html`
                                <uui-toggle .checked="${this.value?.noIndex || false}"
                                            @change="${this.#onNoIndexToggle}">
                                    ${this.localize.term('seoVisualizer_no_index')}
                                </uui-toggle>
                        ` : ''}
                    </div>
                ` : ''}

            </div>
            <div class="sv-demo">
                <h6>${this.getTitle()}</h6>
                <p class="sv-url">${this.getUrl()}</p>
                <p>${this.value?.description || ""}</p>
            </div>
        `;
    }

    static styles = [UmbTextStyles, css`
        /* containers */
        .sv-form {
            width: 400px;
            float: left;
            margin-right: 40px;
        }

        .sv-demo {
            max-width: 600px; /* The width of the desktop-SERP as of 2019-11-14 */
            width: auto;
            float: left;
        }

        /* form elements */

        .sv-form > div + div {
            margin-top: 10px;
        }

        .sv-form input, div.sv-form textarea {
            width: 100%;
        }

        .sv-form textarea {
            height: 100px;
        }

        /* general text formating */

        .sv-demo h6, .sv-demo p {
            font-family: Arial, Helvectiva, sans-serif;
            padding: 0;
            margin: 0;
        }

        /* form text formating */

        .sv-form p.sv-error {
            visibility: hidden;
            color: red;
            margin-top: 3px;
        }

        .sv-form p.sv-error.seo-invisible {
            visibility: initial;
        }

        /* demo-mode text formating */

        .sv-demo h6 {
            font-size: 20px;
            line-height: 1.3;
            margin-bottom: 3px;
            color: blue;
            text-decoration: underline;
        }

        .sv-demo p {
            font-size: 14px;
            margin-bottom: 3px;
            line-height: 1.57;
            word-wrap: break-word;
        }

        .sv-demo p.sv-url {
            color: #00802a;
        }
    `]
}

export default SeoVisualizerPropertyEditorUiElement;

declare global {
    interface HTMLElementTagNameMap {
        'seo-visualizer-property-editor-ui': SeoVisualizerPropertyEditorUiElement;
    }
}
