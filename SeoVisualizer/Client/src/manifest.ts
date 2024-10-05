import type { UmbBackofficeExtensionRegistry } from "@umbraco-cms/backoffice/extension-registry";
import {manifests as propertyEditorManifests} from './property-editor/manifests';
import {manifests as localizationManifests} from './localization/manifests';

export function registerManifest(registry : UmbBackofficeExtensionRegistry) {
    registry.registerMany([
		...propertyEditorManifests,
    ...localizationManifests
	]);
}
