import { LitElement, html, css, customElement, property } from '@umbraco-cms/backoffice/external/lit';
import { UmbPropertyEditorUiElement } from "@umbraco-cms/backoffice/extension-registry";
import {UmbElementMixin} from "@umbraco-cms/backoffice/element-api";

@customElement('seo-visualizer')
export default class UmbPropertyEditorUISeoVisualizer extends UmbElementMixin(LitElement) implements UmbPropertyEditorUiElement {

    @property()
    public value = {};
    
   
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

    render() {
        console.log(this.value)
        return html`
                <div class="sv-form">
                    <div>
                        <uui-input placeholder="${this.localize.term('seoVisualizer_titlePlaceholder')}"></uui-input>
<!--                    <p ng-class="{'seo-invisible' : title.length > maxCharsTitle }" class="sv-error">${this.localize.term('seoVisualizer_maxLength', 10)}</p>-->
                        <p class="sv-error">${this.localize.term('seoVisualizer_maxLength', 10)}</p>
                    </div>
                    <div>
                        <uui-textarea placeholder="${this.localize.term('seoVisualizer_descriptionPlaceholder')}"></uui-textarea>
                        <p class="sv-error">${this.localize.term('seoVisualizer_maxLength', 10)}</p>
                    </div>
                    <div class="sv-options">
<!--                        <div ng-show="showExcludeTitleSuffix">-->
                        <div>
                            <label>
                                <uui-toggle checked="excludeTitleSuffix" on-click="toggleTitleSuffix()"></uui-toggle>
                                ${this.localize.term('seoVisualizer_excludeTitleSuffix')}
                            </label>
                        </div>
<!--                        <div ng-show="showNoIndex">-->
                        <div>
                            <label>
                                <uui-toggle checked="noIndex" on-click="toggleNoIndex()"></uui-toggle>
                                ${this.localize.term('seoVisualizer_noIndex')}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="sv-demo">
                    <h6>{{getTitle()}}</h6>
                    <p class="sv-url">{{GetUrl()}}</p>
                    <p>{{description}}</p>
                </div>
        `;
    }
}
