import { DefInfo } from './util.js';
import { OpenAPIObject } from 'openapi3-ts';
import fetch from 'node-fetch';
import { writeOutFile } from './generate-common.js';

const httpClientType = `import { HttpClient, get } from '../http.js';`;

const manifestMetadataPromise = (async () => {
  try {
    let manifestMeta = await (fetch as any)(
      'https://www.bungie.net/Platform/Destiny2/Manifest/'
    ).then((res: Response) => res.json());
    return (manifestMeta as any).Response;
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();

export async function generateManifestUtils(components: DefInfo[], doc: OpenAPIObject) {
  const manifestStructure = await generateManifestDefinitions(components);

  const filename = `generated-src/destiny2/manifest.ts`;

  const definition =
    [generateManifestHeader(doc), httpClientType, manifestStructure, manifestUtilDefinitions].join(
      '\n\n'
    ) + '\n';

  writeOutFile(filename, definition);
}

async function generateManifestDefinitions(components: DefInfo[]) {
  let manifestMetadata = await manifestMetadataPromise;

  // defs we have documentation for. some stuff in manifest doesn't have interface definitions. idk why.
  const documentedDefs = components.map((component) => component.interfaceName);

  // exclude some tables from the definitionmanifest table because we don't have the format for them
  const defsToInclude = Object.keys(manifestMetadata.jsonWorldComponentContentPaths.en).filter(
    (tableName) => documentedDefs.includes(tableName)
  );

  const languageList = Object.keys(manifestMetadata.jsonWorldComponentContentPaths).sort();

  return `import {${defsToInclude.map((c) => `\n  ${c},`).join('')}
  DestinyManifest
} from './interfaces.js';

/**
 * this describes a big object holding several tables of hash-keyed DestinyDefinitions.
 * this is roughly what you get if you decode the gigantic, single-json manifest blob,
 * but also just what we use here to dole out single-table, typed definitions
 */
export interface AllDestinyManifestComponents {
${defsToInclude
  .map((manifestComponent) => `  ${manifestComponent}: { [key: number]: ${manifestComponent} };\n`)
  .join('')}}

/**
 * languages the manifest comes in, as their required keys to download them
 */
export const destinyManifestLanguages = [
${languageList.map((l) => `  '${l}',`).join('\n')}
] as const;

export type DestinyManifestLanguage = typeof destinyManifestLanguages[number];

`;
}

function generateManifestHeader(doc: OpenAPIObject): string {
  const { info } = doc;
  return `/**
 * these helper functions and definitions are based off the structure of DestinyManifest
 * in the bungie.net API spec, but are not explicity defined endpoints in the spec.
 *
 * they were last hand-checked for OpenAPI spec version 2.8.0,
 * and have been automatically tested for the latest OpenAPI spec version ${info.version}.
 * if there are typing issues with them, please let us know at the below repo.
 *
 * NOTE: This class is auto generated by the bungie-api-ts-no-const-enum code generator program.
 * https://github.com/jbccollins/bungie-api-ts-no-const-enum
 * Do not edit these files manually.
 */`;
}

const manifestUtilDefinitions = `
// thoughts:
// this relies on the assumption that the separate
// manifest pieces offered in jsonWorldComponentContentPaths,
// will all be present in the big manifest at jsonWorldContentPaths.

// this has been the case so far, but there aren't
// strict spec standards for how the manifest will be available

export type DestinyManifestComponentName = keyof AllDestinyManifestComponents;

export type DestinyManifestSlice<K extends Readonly<DestinyManifestComponentName[]>> = Pick<
  AllDestinyManifestComponents,
  K[number]
>;

/**
 * given a STRING table name, returns that TYPE, so that you can write a function like:
 * func<K extends DestinyManifestComponentName>(arg0:K):DestinyDefinitionFrom<K>{...}
 * i.e.
 * func('DestinyInventoryItemDefinition') will return type DestinyInventoryItemDefinition
 */
export type DestinyDefinitionFrom<
  K extends DestinyManifestComponentName
> = AllDestinyManifestComponents[K][number];

export interface GetAllDestinyManifestComponentsParams {
  destinyManifest: DestinyManifest;
  language: DestinyManifestLanguage;
}
/** fetches the enormous combined JSON manifest file */
export function getAllDestinyManifestComponents(
  http: HttpClient,
  params: GetAllDestinyManifestComponentsParams
): Promise<AllDestinyManifestComponents> {
  return get(http, 'https://www.bungie.net'+params.destinyManifest.jsonWorldContentPaths[params.language]);
}

export interface GetDestinyManifestComponentParams<T extends DestinyManifestComponentName> {
  destinyManifest: DestinyManifest;
  tableName: T;
  language: DestinyManifestLanguage;
}
/**
 * this fetches and returns a single table (Component) from the d2 manifest
 * i.e. DestinyInventoryItemDefinition / DestinyObjectiveDefinition /
 * DestinyVendorDefinition / DestinySeasonDefinition / etc.
 *
 * due to typescript limitations, the table name needs to be recognized by
 * typescript as a const (not mutable between inception and going into the function),
 * so that it considers it a table name and not just a string.
 *
 * this is easy with a string, since
 *
 * \`const x = 'thing';\` is type \`'thing'\`, not type \`string\`,
 *
 * but make sure it's not a \`let x =\` or a dynamically set string.
 */
 export async function getDestinyManifestComponent<T extends DestinyManifestComponentName>(
  http: HttpClient,
  params: GetDestinyManifestComponentParams<T>
): Promise<AllDestinyManifestComponents[T]> {
  const url = 'https://www.bungie.net' +
      params.destinyManifest.jsonWorldComponentContentPaths[params.language][params.tableName];
  try {
    return await get(http, url);
  } catch (e) {
    try {
      return await get(http, \`\${url}?retry\`);
    } catch {
      throw e;
    }
  }
}

export interface GetDestinyManifestSliceParams<T extends DestinyManifestComponentName[]> {
  destinyManifest: DestinyManifest;
  tableNames: T;
  language: DestinyManifestLanguage;
}
/**
 * this returns a similar structure to getAllDestinyManifestComponents (the big manifest json)
 * but only specific components within. it bundles multiple single tables requests,
 * into a single properly typed object with keys named after manifest components
 *
 * i.e. \`{ DestinyInventoryItemDefinition: etc...,
 * DestinyObjectiveDefinition: etc... }\`
 *
 * due to typescript limitations, the array of tableNames needs to be recognized by
 * typescript as readonly (not mutable between inception and going into the function),
 * so that it considers them table names and not just strings.
 *
 * like \`['DestinyInventoryItemDefinition' as const]\`
 *
 * or maybe \`['DestinyInventoryItemDefinition'] as const\`
 *
 * or just feed in into the function hardcoded like
 *
 * \`function(['DestinyInventoryItemDefinition'])\`
 */
export async function getDestinyManifestSlice<T extends DestinyManifestComponentName[]>(
  http: HttpClient,
  params: GetDestinyManifestSliceParams<T>
): Promise<DestinyManifestSlice<T>> {
  const downloadedTables = await Promise.all(
    params.tableNames.map(async (tableName) => {
      const tableContent = await getDestinyManifestComponent(http, {
        destinyManifest: params.destinyManifest,
        tableName,
        language: params.language,
      });
      return { tableName, tableContent };
    })
  );
  const manifestSlice = {} as AllDestinyManifestComponents;
  for (const downloadedTable of downloadedTables) {
    manifestSlice[downloadedTable.tableName] = downloadedTable.tableContent as any;
  }
  return manifestSlice as DestinyManifestSlice<T>;
}
`;
