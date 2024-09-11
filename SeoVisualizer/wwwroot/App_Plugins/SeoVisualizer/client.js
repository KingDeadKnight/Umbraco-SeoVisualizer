import { customElement as p, LitElement as f, html as m } from "@umbraco-cms/backoffice/external/lit";
var n = Object.defineProperty, u = Object.getOwnPropertyDescriptor, a = (i, r, s, t) => {
  for (var e = t > 1 ? void 0 : t ? u(r, s) : r, l = i.length - 1, o; l >= 0; l--)
    (o = i[l]) && (e = (t ? o(r, s, e) : o(e)) || e);
  return t && e && n(r, s, e), e;
};
let v = class extends f {
  render() {
    return m`<div>Test</div>`;
  }
};
v = a([
  p("seo-visualizer")
], v);
export {
  v as default
};
//# sourceMappingURL=client.js.map
