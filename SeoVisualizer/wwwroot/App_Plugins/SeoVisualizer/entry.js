const i = [
  {
    type: "propertyEditorUi",
    alias: "EnkelMedia.SeoVisualizer",
    name: "Seo Visualizer",
    js: () => import("./seo-visualizer-BWde_yay.js"),
    elementName: "seo-visualizer",
    meta: {
      label: "Seo Visualizer",
      icon: "icon-autofill",
      group: "common",
      propertyEditorSchemaAlias: "Umbraco.Plain.Json"
    }
  }
], o = [...i], s = [
  {
    type: "localization",
    alias: "seovisualizer.i18n.enus",
    name: "English (US)",
    weight: 0,
    meta: {
      culture: "en-us"
    },
    js: () => import("./en-BbSynj5b.js")
  },
  {
    type: "localization",
    alias: "seovisualizer.i18n.engb",
    name: "English (GB)",
    weight: 0,
    meta: {
      culture: "en-gb"
    },
    js: () => import("./en-BbSynj5b.js")
  }
], a = [...s], t = [
  ...o,
  ...a
], l = (n, e) => {
  e.registerMany(t);
};
export {
  l as onInit
};
//# sourceMappingURL=entry.js.map
