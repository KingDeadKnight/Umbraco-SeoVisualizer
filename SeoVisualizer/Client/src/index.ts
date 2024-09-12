import { UmbEntryPointOnInit } from '@umbraco-cms/backoffice/extension-api';

import { manifests } from './manifests.ts';

export const onInit: UmbEntryPointOnInit = (_host, extensionRegistry) => {
    // register the manifests
    extensionRegistry.registerMany(manifests);
};