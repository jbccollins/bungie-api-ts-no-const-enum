# IMPORTANT: READ THIS FIRST, YES. YOU!

This project is a fork of [bungie-api-ts-no-const-enum](https://github.com/jbccollins/bungie-api-ts-no-const-enum). The only reason this exists is to change `export const enum` to just `export enum` on [this line](https://github.com/jbccollins/bungie-api-ts-no-const-enum/blob/b29c34a417da0430dcbebea9b9716b9554eae6aa/generator/generate-interfaces.ts#L96). You can read more about why exporting a const enum is no bueno in [this github thread](https://github.com/jbccollins/bungie-api-ts-no-const-enum/issues/38#issuecomment-1289923993).

##### Do not open issues in this repo unless they are specifically related to the removal of the word `const`

Here is the mapping of versions

| bungie-api-ts | bungie-api-ts-no-const-enum |
| ------------- | --------------------------- |
| 4.19.0        | 0.0.3                       |
| 4.22.3        | 0.0.8                       |
| 5.0.0         | 0.0.9                       |

#### Modified development steps:

1. Clobber this repo with the bungie-api-ts repo
2. Replace `export const enum` with `export enum` in `generate-interfaces.ts`
3. Run `yarn && yarn submodule`
4. Run `yarn start`
5. Replace all instances of `bungie-api-ts` with `bungie-api-ts-no-const-enum`
6. Replace all instances of `DestinyItemManager/bungie-api-ts-no-const-enum` with `jbccollins/bungie-api-ts-no-const-enum`
7. Bump the version and change it in all places (e.g. change all instances of 4.22.3 to 0.0.8)
8. Add the version mapping to this README file.
9. Commit and push all changes
10. Run `npm run publish`

# Bungie API TypeScript support

This project implements TypeScript definitions and API helpers for the [Bungie.net API](https://github.com/Bungie-net/api). It's meant for use in [Destiny Item Manager](https://destinyitemmanager.com), but should be general enough to use in any project. The code is completely generated from Bungie's documentation - I considered using something like Swagger Codegen, but instead opted for a custom generator so we could make the result as nice as possible.

# Ports

Feel free to fork this and use it to generate for your favorite language!

- [Dart](https://github.com/marquesinijatinha/bungie-api-dart/)

# Install

```
yarn add bungie-api-ts-no-const-enum
```

# Interfaces and Enums

All the interface type definitions and enums are for type info only - everything will compile out. Only the API helpers produce real JavaScript output. You can import types from each service defined on Bungie.net:

```typescript
import {
  DestinyInventoryComponent,
  DestinyInventoryItemDefinition,
} from 'bungie-api-ts-no-const-enum/destiny2';
```

There are definitions for every type defined in the Bungie.net services. See [their documentation](https://bungie-net.github.io/multi/) for a list - the interface names are the last part of the full name (for example, `Destiny.Definitions.DestinyVendorActionDefinition` becomes `DestinyVendorActionDefinition`). There are a few exceptions, like `SingleComponentResponseOfDestinyInventoryComponent`, which have been mapped into nicer forms like `SingleComponentResponse<DestinyInventoryComponent>`, and the server responses, which are now `ServerResponse<T>` instead of something like `DestinyCharacterResponse`.

# API Helpers

In addition to the types, there are also simple helper functions for each API endpoint. They define the inputs and outputs to that endpoint, and will call a user-provided function with HTTP request info that you can then use to make an HTTP request. This pattern was used so the API helpers could provide full type information. These helpers are not a full API client - they assist in building one. An example:

```typescript
import { getProfile, HttpClientConfig } from 'bungie-api-ts-no-const-enum/destiny2';

async function $http(config: HttpClientConfig) {
  // fill in the API key, handle OAuth, etc., then make an HTTP request using the config.
  return fetch(config.url, ...);
}

const profileInfo: ServerResponse<DestinyProfileResponse> = await getProfile($http, {
  components: [DestinyComponentType.Profiles, DestinyComponentType.Characters],
  destinyMembershipId: 12345,
  membershipType: BungieMembershipType.TigerPsn
});
```

# Imports

It is possible to import all services from `bungie-api-ts-no-const-enum` directly, but it's better to import the specific service and pick out what you want:

```typescript
// good
import { getProfile, HttpClientConfig } from 'bungie-api-ts-no-const-enum/destiny2';
getProfile(...);

// works, but not as good
import { Destiny2 } from 'bungie-api-ts-no-const-enum';
Destiny2.getProfile(...);
```

# Manifest Helpers

The `destiny2` import also contains helpers for typing and downloading the Destiny manifest:

```typescript
import { getDestinyManifestSlice } from 'bungie-api-ts-no-const-enum/destiny2';

async function $http(config: HttpClientConfig) {
  // fill in the API key, handle OAuth, etc., then make an HTTP request using the config.
  return fetch(config.url, ...);
}

const destinyManifest = await getDestinyManifest($http);
const manifestTables = getDestinyManifestSlice($http, {
  destinyManifest,
  tableNames: ['DestinyInventoryItemDefinition', 'DestinySocketDefinition'],
  language: 'en',
});

// manifestTables is an object with properties DestinyInventoryItemDefinition and DestinySocketDefinition
```

# Build

```
# setup
yarn && yarn submodule
# run
yarn start
```

# Updating API sources

Run the [update API sources](https://github.com/jbccollins/bungie-api-ts-no-const-enum/actions/workflows/update.yml) GitHub Action and it should create a new PR for the updated sources.

# Publishing

Update the version in `package.json`, and when the PR merges to `master`, a GitHub workflow will automatically publish to NPM. Don't forget to run `yarn start` and commit all changed files!
