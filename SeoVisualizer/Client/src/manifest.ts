import type { ManifestLocalization, UmbBackofficeExtensionRegistry } from "@umbraco-cms/backoffice/extension-registry";
// import { manifests as dashboardManifests } from "./dashboard/manifest.js";
// import {manifests as activitiesManifest} from './widgets/manifests';

const manifests : Array<ManifestLocalization> = [
	
]

export function registerManifest(registry : UmbBackofficeExtensionRegistry) {
    registry.registerMany([
		//...dashboardManifests,
    ...manifests,
    //...activitiesManifest
	]);
}
