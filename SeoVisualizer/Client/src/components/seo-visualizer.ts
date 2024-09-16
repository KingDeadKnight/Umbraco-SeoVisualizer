import {LitElement, html, css, customElement, property, state} from '@umbraco-cms/backoffice/external/lit';
import {UmbElementMixin} from "@umbraco-cms/backoffice/element-api";
import {UmbPropertyEditorConfigCollection, UmbPropertyValueChangeEvent} from '@umbraco-cms/backoffice/property-editor';

interface SeoValues {
    title: string;
    description: string;
    noIndex: boolean;
    excludeTitleSuffix: boolean;
}

@customElement('seo-visualizer')
export default class UmbPropertyEditorUISeoVisualizer extends UmbElementMixin(LitElement) {

    @property()
    public value: Partial<SeoValues> = {};

    @state()
    private _useNoIndex: boolean = false;

    @state()
    private _showTitleSuffix: boolean = false;

    @state()
    private _maxCharsTitle: number = 60;

    @state()
    private _maxCharsDescription: number = 160;

    public set config(config: UmbPropertyEditorConfigCollection | undefined) {
        this._useNoIndex = config?.getValueByAlias('useNoIndex') ?? false;
        this._showTitleSuffix = config?.getValueByAlias('titleSuffix') ?? false;
        this._maxCharsTitle = config?.getValueByAlias('maxCharsTitle') ?? 60;
        this._maxCharsDescription = config?.getValueByAlias('maxCharsDescription') ?? 160;
    }

    static styles = css`
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

        div.sv-form input, div.sv-form textarea {
            width: 100%;
        }

        div.sv-form textarea {
            height: 100px;
        }

        /* general text formating */

        div.sv-demo h6, div.sv-demo p {
            font-family: Arial, Helvectiva, san-serif;
            padding: 0;
            margin: 0;
        }

        /* form text formating */

        div.sv-form p.sv-error {
            visibility: hidden;
            color: red;
            margin-top: 3px;
        }

        div.sv-form p.sv-error.seo-invisible {
            visibility: initial;
        }

        div.sv-options h4 {
            border-bottom: 1px solid #e9e9eb;
        }

        div.sv-options label {
            min-width: 300px;
            margin-bottom: 0;
        }

        div.sv-options button {
            display: inline-block;
            margin-right: 10px;
        }

        div.sv-options > div + div {
            margin-top: 10px;
        }

        div.sv-options > div {
            display: flex;
            align-items: center;
        }


        /* demo-mode text formating */

        div.sv-demo h6 {
            font-size: 20px;
            line-height: 1.3;
            margin-bottom: 3px;
            color: blue;
            text-decoration: underline;
        }

        div.sv-demo p {
            font-size: 14px;
            margin-bottom: 3px;
            line-height: 1.57;
            word-wrap: break-word;
        }

        div.sv-demo p.sv-url {
            color: #00802a;
        }
    `;

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
        return this.value?.title || "";
    }

    getUrl(): string {
        return "https://toto.be/";
    }

    render() {
        return html`
            <div class="sv-form">
                <div>
                    <uui-input placeholder="${this.localize.term('seoVisualizer_titlePlaceholder')}"
                               @input=${this.#onTitleInput}
                               .value=${this.value?.title || ""}></uui-input>
                        <!--                    <p ng-class="{'seo-invisible' : title.length > maxCharsTitle }" class="sv-error">${this.localize.term('seoVisualizer_maxLength', 10)}
                        </p>-->
                    <p class="sv-error">${this.localize.term('seoVisualizer_maxLength', this._maxCharsTitle)}</p>
                </div>
                <div>
                    <uui-textarea placeholder="${this.localize.term('seoVisualizer_descriptionPlaceholder')}"
                                  @input=${this.#onDescriptionInput}
                                  .value=${this.value?.description || ""}></uui-textarea>
                    <p class="sv-error">${this.localize.term('seoVisualizer_maxLength', this._maxCharsDescription)}</p>
                </div>
                ${ (this._useNoIndex || this._showTitleSuffix) ?
                html`
                    <div class="sv-options">
                        ${this._showTitleSuffix ?
                        html`
                            <label>
                                <uui-toggle .checked="${this.value?.excludeTitleSuffix || false}"
                                            @change="${this.#onExcludeTitleSuffixToggle}">
                                </uui-toggle>
                                ${this.localize.term('seoVisualizer_excludeTitleSuffix')}
                            </label>
                        ` : ''}
                        ${this._useNoIndex ?
                        html`
                            <label>
                                <uui-toggle .checked="${this.value?.noIndex || false}"
                                            @change="${this.#onNoIndexToggle}">
                                </uui-toggle>
                                ${this.localize.term('seoVisualizer_noIndex')}
                            </label>
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
}
