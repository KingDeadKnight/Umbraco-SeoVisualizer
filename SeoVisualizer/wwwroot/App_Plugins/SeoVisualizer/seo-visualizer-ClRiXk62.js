import { LitElement as d, html as v, css as n, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as p } from "@umbraco-cms/backoffice/element-api";
var h = Object.defineProperty, c = Object.getOwnPropertyDescriptor, u = (a, i, o, t) => {
  for (var e = t > 1 ? void 0 : t ? c(i, o) : i, l = a.length - 1, s; l >= 0; l--)
    (s = a[l]) && (e = (t ? s(i, o, e) : s(e)) || e);
  return t && e && h(i, o, e), e;
};
let r = class extends p(d) {
  render() {
    return v`
                <div class="sv-form">
                    <div>
                        <uui-input placeholder="${this.localize.term("seoVisualizer_titlePlaceholder")}"></uui-input>
<!--                    <p ng-class="{'seo-invisible' : title.length > maxCharsTitle }" class="sv-error">${this.localize.term("seoVisualizer_maxLength", 10)}</p>-->
                        <p class="sv-error">${this.localize.term("seoVisualizer_maxLength", 10)}</p>
                    </div>
                    <div>
                        <uui-textarea placeholder="${this.localize.term("seoVisualizer_descriptionPlaceholder")}"></uui-textarea>
                        <p class="sv-error">${this.localize.term("seoVisualizer_maxLength", 10)}</p>
                    </div>
                    <div class="sv-options">
                        <div ng-show="showExcludeTitleSuffix">
                            <label>
                                <umb-toggle checked="excludeTitleSuffix" on-click="toggleTitleSuffix()"></umb-toggle>
                                ${this.localize.term("seoVisualizer_excludeTitleSuffix")}
                            </label>
                        </div>
                        <div ng-show="showNoIndex">
                            <label>
                                <umb-toggle checked="noIndex" on-click="toggleNoIndex()"></umb-toggle>
                                ${this.localize.term("seoVisualizer_noIndex")}
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
};
r.styles = n`
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
r = u([
  m("seo-visualizer")
], r);
export {
  r as default
};
//# sourceMappingURL=seo-visualizer-ClRiXk62.js.map
