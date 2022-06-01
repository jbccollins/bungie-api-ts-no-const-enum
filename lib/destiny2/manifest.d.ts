/**
 * these helper functions and definitions are based off the structure of DestinyManifest
 * in the bungie.net API spec, but are not explicity defined endpoints in the spec.
 *
 * they were last hand-checked for OpenAPI spec version 2.8.0,
 * and have been automatically tested for the latest OpenAPI spec version 2.15.0.
 * if there are typing issues with them, please let us know at the below repo.
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */
import { HttpClient } from '../http';
import {
  DestinyPlaceDefinition,
  DestinyActivityDefinition,
  DestinyActivityTypeDefinition,
  DestinyClassDefinition,
  DestinyGenderDefinition,
  DestinyInventoryBucketDefinition,
  DestinyRaceDefinition,
  DestinyTalentGridDefinition,
  DestinyUnlockDefinition,
  DestinySandboxPerkDefinition,
  DestinyStatGroupDefinition,
  DestinyProgressionMappingDefinition,
  DestinyFactionDefinition,
  DestinyVendorGroupDefinition,
  DestinyRewardSourceDefinition,
  DestinyUnlockValueDefinition,
  DestinyItemCategoryDefinition,
  DestinyDamageTypeDefinition,
  DestinyActivityModeDefinition,
  DestinyMedalTierDefinition,
  DestinyActivityGraphDefinition,
  DestinyCollectibleDefinition,
  DestinyDestinationDefinition,
  DestinyEquipmentSlotDefinition,
  DestinyStatDefinition,
  DestinyInventoryItemDefinition,
  DestinyItemTierTypeDefinition,
  DestinyLocationDefinition,
  DestinyLoreDefinition,
  DestinyMaterialRequirementSetDefinition,
  DestinyMetricDefinition,
  DestinyObjectiveDefinition,
  DestinyPlugSetDefinition,
  DestinyPowerCapDefinition,
  DestinyPresentationNodeDefinition,
  DestinyProgressionDefinition,
  DestinyProgressionLevelRequirementDefinition,
  DestinyRecordDefinition,
  DestinySandboxPatternDefinition,
  DestinySeasonDefinition,
  DestinySeasonPassDefinition,
  DestinySocketCategoryDefinition,
  DestinySocketTypeDefinition,
  DestinyTraitDefinition,
  DestinyTraitCategoryDefinition,
  DestinyVendorDefinition,
  DestinyMilestoneDefinition,
  DestinyActivityModifierDefinition,
  DestinyReportReasonCategoryDefinition,
  DestinyArtifactDefinition,
  DestinyBreakerTypeDefinition,
  DestinyChecklistDefinition,
  DestinyEnergyTypeDefinition,
  DestinyManifest,
} from './interfaces';
/**
 * this describes a big object holding several tables of hash-keyed DestinyDefinitions.
 * this is roughly what you get if you decode the gigantic, single-json manifest blob,
 * but also just what we use here to dole out single-table, typed definitions
 */
export interface AllDestinyManifestComponents {
  DestinyPlaceDefinition: {
    [key: number]: DestinyPlaceDefinition;
  };
  DestinyActivityDefinition: {
    [key: number]: DestinyActivityDefinition;
  };
  DestinyActivityTypeDefinition: {
    [key: number]: DestinyActivityTypeDefinition;
  };
  DestinyClassDefinition: {
    [key: number]: DestinyClassDefinition;
  };
  DestinyGenderDefinition: {
    [key: number]: DestinyGenderDefinition;
  };
  DestinyInventoryBucketDefinition: {
    [key: number]: DestinyInventoryBucketDefinition;
  };
  DestinyRaceDefinition: {
    [key: number]: DestinyRaceDefinition;
  };
  DestinyTalentGridDefinition: {
    [key: number]: DestinyTalentGridDefinition;
  };
  DestinyUnlockDefinition: {
    [key: number]: DestinyUnlockDefinition;
  };
  DestinySandboxPerkDefinition: {
    [key: number]: DestinySandboxPerkDefinition;
  };
  DestinyStatGroupDefinition: {
    [key: number]: DestinyStatGroupDefinition;
  };
  DestinyProgressionMappingDefinition: {
    [key: number]: DestinyProgressionMappingDefinition;
  };
  DestinyFactionDefinition: {
    [key: number]: DestinyFactionDefinition;
  };
  DestinyVendorGroupDefinition: {
    [key: number]: DestinyVendorGroupDefinition;
  };
  DestinyRewardSourceDefinition: {
    [key: number]: DestinyRewardSourceDefinition;
  };
  DestinyUnlockValueDefinition: {
    [key: number]: DestinyUnlockValueDefinition;
  };
  DestinyItemCategoryDefinition: {
    [key: number]: DestinyItemCategoryDefinition;
  };
  DestinyDamageTypeDefinition: {
    [key: number]: DestinyDamageTypeDefinition;
  };
  DestinyActivityModeDefinition: {
    [key: number]: DestinyActivityModeDefinition;
  };
  DestinyMedalTierDefinition: {
    [key: number]: DestinyMedalTierDefinition;
  };
  DestinyActivityGraphDefinition: {
    [key: number]: DestinyActivityGraphDefinition;
  };
  DestinyCollectibleDefinition: {
    [key: number]: DestinyCollectibleDefinition;
  };
  DestinyDestinationDefinition: {
    [key: number]: DestinyDestinationDefinition;
  };
  DestinyEquipmentSlotDefinition: {
    [key: number]: DestinyEquipmentSlotDefinition;
  };
  DestinyStatDefinition: {
    [key: number]: DestinyStatDefinition;
  };
  DestinyInventoryItemDefinition: {
    [key: number]: DestinyInventoryItemDefinition;
  };
  DestinyItemTierTypeDefinition: {
    [key: number]: DestinyItemTierTypeDefinition;
  };
  DestinyLocationDefinition: {
    [key: number]: DestinyLocationDefinition;
  };
  DestinyLoreDefinition: {
    [key: number]: DestinyLoreDefinition;
  };
  DestinyMaterialRequirementSetDefinition: {
    [key: number]: DestinyMaterialRequirementSetDefinition;
  };
  DestinyMetricDefinition: {
    [key: number]: DestinyMetricDefinition;
  };
  DestinyObjectiveDefinition: {
    [key: number]: DestinyObjectiveDefinition;
  };
  DestinyPlugSetDefinition: {
    [key: number]: DestinyPlugSetDefinition;
  };
  DestinyPowerCapDefinition: {
    [key: number]: DestinyPowerCapDefinition;
  };
  DestinyPresentationNodeDefinition: {
    [key: number]: DestinyPresentationNodeDefinition;
  };
  DestinyProgressionDefinition: {
    [key: number]: DestinyProgressionDefinition;
  };
  DestinyProgressionLevelRequirementDefinition: {
    [key: number]: DestinyProgressionLevelRequirementDefinition;
  };
  DestinyRecordDefinition: {
    [key: number]: DestinyRecordDefinition;
  };
  DestinySandboxPatternDefinition: {
    [key: number]: DestinySandboxPatternDefinition;
  };
  DestinySeasonDefinition: {
    [key: number]: DestinySeasonDefinition;
  };
  DestinySeasonPassDefinition: {
    [key: number]: DestinySeasonPassDefinition;
  };
  DestinySocketCategoryDefinition: {
    [key: number]: DestinySocketCategoryDefinition;
  };
  DestinySocketTypeDefinition: {
    [key: number]: DestinySocketTypeDefinition;
  };
  DestinyTraitDefinition: {
    [key: number]: DestinyTraitDefinition;
  };
  DestinyTraitCategoryDefinition: {
    [key: number]: DestinyTraitCategoryDefinition;
  };
  DestinyVendorDefinition: {
    [key: number]: DestinyVendorDefinition;
  };
  DestinyMilestoneDefinition: {
    [key: number]: DestinyMilestoneDefinition;
  };
  DestinyActivityModifierDefinition: {
    [key: number]: DestinyActivityModifierDefinition;
  };
  DestinyReportReasonCategoryDefinition: {
    [key: number]: DestinyReportReasonCategoryDefinition;
  };
  DestinyArtifactDefinition: {
    [key: number]: DestinyArtifactDefinition;
  };
  DestinyBreakerTypeDefinition: {
    [key: number]: DestinyBreakerTypeDefinition;
  };
  DestinyChecklistDefinition: {
    [key: number]: DestinyChecklistDefinition;
  };
  DestinyEnergyTypeDefinition: {
    [key: number]: DestinyEnergyTypeDefinition;
  };
}
/**
 * languages the manifest comes in, as their required keys to download them
 */
export declare const destinyManifestLanguages: readonly [
  'de',
  'en',
  'es',
  'es-mx',
  'fr',
  'it',
  'ja',
  'ko',
  'pl',
  'pt-br',
  'ru',
  'zh-chs',
  'zh-cht'
];
export declare type DestinyManifestLanguage = typeof destinyManifestLanguages[number];
export declare type DestinyManifestComponentName = keyof AllDestinyManifestComponents;
export declare type DestinyManifestSlice<K extends Readonly<DestinyManifestComponentName[]>> = Pick<
  AllDestinyManifestComponents,
  K[number]
>;
/**
 * given a STRING table name, returns that TYPE, so that you can write a function like:
 * func<K extends DestinyManifestComponentName>(arg0:K):DestinyDefinitionFrom<K>{...}
 * i.e.
 * func('DestinyInventoryItemDefinition') will return type DestinyInventoryItemDefinition
 */
export declare type DestinyDefinitionFrom<K extends DestinyManifestComponentName> =
  AllDestinyManifestComponents[K][number];
export interface GetAllDestinyManifestComponentsParams {
  destinyManifest: DestinyManifest;
  language: DestinyManifestLanguage;
}
/** fetches the enormous combined JSON manifest file */
export declare function getAllDestinyManifestComponents(
  http: HttpClient,
  params: GetAllDestinyManifestComponentsParams
): Promise<AllDestinyManifestComponents>;
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
 * `const x = 'thing';` is type `'thing'`, not type `string`,
 *
 * but make sure it's not a `let x =` or a dynamically set string.
 */
export declare function getDestinyManifestComponent<T extends DestinyManifestComponentName>(
  http: HttpClient,
  params: GetDestinyManifestComponentParams<T>
): Promise<AllDestinyManifestComponents[T]>;
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
 * i.e. `{ DestinyInventoryItemDefinition: etc...,
 * DestinyObjectiveDefinition: etc... }`
 *
 * due to typescript limitations, the array of tableNames needs to be recognized by
 * typescript as readonly (not mutable between inception and going into the function),
 * so that it considers them table names and not just strings.
 *
 * like `['DestinyInventoryItemDefinition' as const]`
 *
 * or maybe `['DestinyInventoryItemDefinition'] as const`
 *
 * or just feed in into the function hardcoded like
 *
 * `function(['DestinyInventoryItemDefinition'])`
 */
export declare function getDestinyManifestSlice<T extends DestinyManifestComponentName[]>(
  http: HttpClient,
  params: GetDestinyManifestSliceParams<T>
): Promise<DestinyManifestSlice<T>>;
