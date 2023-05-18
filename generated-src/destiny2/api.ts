/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts-no-const-enum code generator program.
 * https://github.com/jbccollins/bungie-api-ts-no-const-enum
 * Do not edit these files manually.
 */

import { HttpClient, get, post } from '../http.js';

import {
  AwaAuthorizationResult,
  AwaInitializeResponse,
  AwaPermissionRequested,
  AwaUserResponse,
  ClanBannerSource,
  DestinyActivityHistoryResults,
  DestinyActivityModeType,
  DestinyAggregateActivityResults,
  DestinyCharacterResponse,
  DestinyClanAggregateStat,
  DestinyCollectibleNodeDetailResponse,
  DestinyComponentType,
  DestinyDefinition,
  DestinyEntitySearchResult,
  DestinyEquipItemResults,
  DestinyHistoricalStatsAccountResult,
  DestinyHistoricalStatsByPeriod,
  DestinyHistoricalStatsDefinition,
  DestinyHistoricalWeaponStatsData,
  DestinyInsertPlugsActionRequest,
  DestinyInsertPlugsFreeActionRequest,
  DestinyItemActionRequest,
  DestinyItemChangeResponse,
  DestinyItemResponse,
  DestinyItemSetActionRequest,
  DestinyItemStateRequest,
  DestinyItemTransferRequest,
  DestinyLeaderboard,
  DestinyLinkedProfilesResponse,
  DestinyLoadoutActionRequest,
  DestinyLoadoutUpdateActionRequest,
  DestinyManifest,
  DestinyMilestone,
  DestinyMilestoneContent,
  DestinyPostGameCarnageReportData,
  DestinyPostmasterTransferRequest,
  DestinyProfileResponse,
  DestinyPublicMilestone,
  DestinyPublicVendorsResponse,
  DestinyReportOffensePgcrRequest,
  DestinyStatsGroupType,
  DestinyVendorFilter,
  DestinyVendorResponse,
  DestinyVendorsResponse,
  PeriodType,
} from './interfaces.js';
import { BungieMembershipType, ServerResponse } from '../common.js';
import { ExactSearchRequest, UserInfoCard } from '../user/interfaces.js';

const API_BASE = 'https://www.bungie.net/Platform/Destiny2/';

/** Returns the current version of the manifest as a json object. */
export function getDestinyManifest(http: HttpClient): Promise<ServerResponse<DestinyManifest>> {
  return get(http, `${API_BASE}Manifest/`);
}

export interface GetDestinyEntityDefinitionParams {
  /**
   * The type of entity for whom you would like results. These correspond to the
   * entity's definition contract name. For instance, if you are looking for items,
   * this property should be 'DestinyInventoryItemDefinition'. PREVIEW: This endpoint
   * is still in beta, and may experience rough edges. The schema is tentatively in
   * final form, but there may be bugs that prevent desirable operation.
   */
  entityType: string;
  /** The hash identifier for the specific Entity you want returned. */
  hashIdentifier: number;
}

/**
 * Returns the static definition of an entity of the given Type and hash identifier.
 * Examine the API Documentation for the Type Names of entities that have their
 * own definitions. Note that the return type will always *inherit from*
 * DestinyDefinition, but the specific type returned will be the requested entity
 * type if it can be found. Please don't use this as a chatty alternative to the
 * Manifest database if you require large sets of data, but for simple and one-off
 * accesses this should be handy.
 */
export function getDestinyEntityDefinition(
  http: HttpClient,
  params: GetDestinyEntityDefinitionParams
): Promise<ServerResponse<DestinyDefinition>> {
  return get(http, `${API_BASE}Manifest/${params.entityType}/${params.hashIdentifier}/`);
}

export interface SearchDestinyPlayerByBungieNameParams {
  /**
   * A valid non-BungieNet membership type, or All. Indicates which memberships to
   * return. You probably want this set to All.
   */
  membershipType: BungieMembershipType;
}

/**
 * Returns a list of Destiny memberships given a global Bungie Display Name. This
 * method will hide overridden memberships due to cross save.
 */
export function searchDestinyPlayerByBungieName(
  http: HttpClient,
  params: SearchDestinyPlayerByBungieNameParams,
  body: ExactSearchRequest
): Promise<ServerResponse<UserInfoCard[]>> {
  return post(http, `${API_BASE}SearchDestinyPlayerByBungieName/${params.membershipType}/`, body);
}

export interface GetLinkedProfilesParams {
  /**
   * (optional) if set to 'true', all memberships regardless of whether they're
   * obscured by overrides will be returned. Normal privacy restrictions on account
   * linking will still apply no matter what.
   */
  getAllMemberships?: boolean;
  /**
   * The ID of the membership whose linked Destiny accounts you want returned. Make
   * sure your membership ID matches its Membership Type: don't pass us a PSN
   * membership ID and the XBox membership type, it's not going to work!
   */
  membershipId: string;
  /** The type for the membership whose linked Destiny accounts you want returned. */
  membershipType: BungieMembershipType;
}

/**
 * Returns a summary information about all profiles linked to the requesting
 * membership type/membership ID that have valid Destiny information. The passed-in
 * Membership Type/Membership ID may be a Bungie.Net membership or a Destiny
 * membership. It only returns the minimal amount of data to begin making more
 * substantive requests, but will hopefully serve as a useful alternative to
 * UserServices for people who just care about Destiny data. Note that it will only
 * return linked accounts whose linkages you are allowed to view.
 */
export function getLinkedProfiles(
  http: HttpClient,
  params: GetLinkedProfilesParams
): Promise<ServerResponse<DestinyLinkedProfilesResponse>> {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.membershipId}/LinkedProfiles/`,
    {
      getAllMemberships: params.getAllMemberships,
    }
  );
}

export interface GetProfileParams {
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components: DestinyComponentType[];
  /** Destiny membership ID. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/** Returns Destiny Profile information for the supplied membership. */
export function getProfile(
  http: HttpClient,
  params: GetProfileParams
): Promise<ServerResponse<DestinyProfileResponse>> {
  return get(http, `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/`, {
    components: params.components ? params.components.join(',') : undefined,
  });
}

export interface GetCharacterParams {
  /** ID of the character. */
  characterId: string;
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components: DestinyComponentType[];
  /** Destiny membership ID. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/** Returns character information for the supplied character. */
export function getCharacter(
  http: HttpClient,
  params: GetCharacterParams
): Promise<ServerResponse<DestinyCharacterResponse>> {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/`,
    {
      components: params.components ? params.components.join(',') : undefined,
    }
  );
}

export interface GetClanWeeklyRewardStateParams {
  /** A valid group id of clan. */
  groupId: string;
}

/**
 * Returns information on the weekly clan rewards and if the clan has earned them
 * or not. Note that this will always report rewards as not redeemed.
 */
export function getClanWeeklyRewardState(
  http: HttpClient,
  params: GetClanWeeklyRewardStateParams
): Promise<ServerResponse<DestinyMilestone>> {
  return get(http, `${API_BASE}Clan/${params.groupId}/WeeklyRewardState/`);
}

/** Returns the dictionary of values for the Clan Banner */
export function getClanBannerSource(http: HttpClient): Promise<ServerResponse<ClanBannerSource>> {
  return get(http, `${API_BASE}Clan/ClanBannerDictionary/`);
}

export interface GetItemParams {
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components: DestinyComponentType[];
  /** The membership ID of the destiny profile. */
  destinyMembershipId: string;
  /** The Instance ID of the destiny item. */
  itemInstanceId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/**
 * Retrieve the details of an instanced Destiny Item. An instanced Destiny item is
 * one with an ItemInstanceId. Non-instanced items, such as materials, have no
 * useful instance-specific details and thus are not queryable here.
 */
export function getItem(
  http: HttpClient,
  params: GetItemParams
): Promise<ServerResponse<DestinyItemResponse>> {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Item/${params.itemInstanceId}/`,
    {
      components: params.components ? params.components.join(',') : undefined,
    }
  );
}

export interface GetVendorsParams {
  /** The Destiny Character ID of the character for whom we're getting vendor info. */
  characterId: string;
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components: DestinyComponentType[];
  /** Destiny membership ID of another user. You may be denied. */
  destinyMembershipId: string;
  /** The filter of what vendors and items to return, if any. */
  filter?: DestinyVendorFilter;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/**
 * Get currently available vendors from the list of vendors that can possibly have
 * rotating inventory. Note that this does not include things like preview vendors
 * and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use
 * their definitions as-is for those.
 */
export function getVendors(
  http: HttpClient,
  params: GetVendorsParams
): Promise<ServerResponse<DestinyVendorsResponse>> {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/`,
    {
      components: params.components ? params.components.join(',') : undefined,
      filter: params.filter,
    }
  );
}

export interface GetVendorParams {
  /** The Destiny Character ID of the character for whom we're getting vendor info. */
  characterId: string;
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components: DestinyComponentType[];
  /** Destiny membership ID of another user. You may be denied. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
  /** The Hash identifier of the Vendor to be returned. */
  vendorHash: number;
}

/** Get the details of a specific Vendor. */
export function getVendor(
  http: HttpClient,
  params: GetVendorParams
): Promise<ServerResponse<DestinyVendorResponse>> {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Vendors/${params.vendorHash}/`,
    {
      components: params.components ? params.components.join(',') : undefined,
    }
  );
}

export interface GetPublicVendorsParams {
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components: DestinyComponentType[];
}

/**
 * Get items available from vendors where the vendors have items for sale that are
 * common for everyone. If any portion of the Vendor's available inventory is
 * character or account specific, we will be unable to return their data from this
 * endpoint due to the way that available inventory is computed. As I am often
 * guilty of saying: 'It's a long story...'
 */
export function getPublicVendors(
  http: HttpClient,
  params: GetPublicVendorsParams
): Promise<ServerResponse<DestinyPublicVendorsResponse>> {
  return get(http, `${API_BASE}Vendors/`, {
    components: params.components ? params.components.join(',') : undefined,
  });
}

export interface GetCollectibleNodeDetailsParams {
  /**
   * The Destiny Character ID of the character for whom we're getting collectible
   * detail info.
   */
  characterId: string;
  /**
   * The hash identifier of the Presentation Node for whom we should return
   * collectible details. Details will only be returned for collectibles that are
   * direct descendants of this node.
   */
  collectiblePresentationNodeHash: number;
  /**
   * A comma separated list of components to return (as strings or numeric values).
   * See the DestinyComponentType enum for valid components to request. You must
   * request at least one component to receive results.
   */
  components: DestinyComponentType[];
  /** Destiny membership ID of another user. You may be denied. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/**
 * Given a Presentation Node that has Collectibles as direct descendants, this will
 * return item details about those descendants in the context of the requesting
 * character.
 */
export function getCollectibleNodeDetails(
  http: HttpClient,
  params: GetCollectibleNodeDetailsParams
): Promise<ServerResponse<DestinyCollectibleNodeDetailResponse>> {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Profile/${params.destinyMembershipId}/Character/${params.characterId}/Collectibles/${params.collectiblePresentationNodeHash}/`,
    {
      components: params.components ? params.components.join(',') : undefined,
    }
  );
}

/**
 * Transfer an item to/from your vault. You must have a valid Destiny account. You
 * must also pass BOTH a reference AND an instance ID if it's an instanced item.
 * itshappening.gif
 *
 * Wait at least 0.1s between actions.
 */
export function transferItem(
  http: HttpClient,
  body: DestinyItemTransferRequest
): Promise<ServerResponse<number>> {
  return post(http, `${API_BASE}Actions/Items/TransferItem/`, body);
}

/**
 * Extract an item from the Postmaster, with whatever implications that may entail.
 * You must have a valid Destiny account. You must also pass BOTH a reference AND
 * an instance ID if it's an instanced item.
 *
 * Wait at least 0.1s between actions.
 */
export function pullFromPostmaster(
  http: HttpClient,
  body: DestinyPostmasterTransferRequest
): Promise<ServerResponse<number>> {
  return post(http, `${API_BASE}Actions/Items/PullFromPostmaster/`, body);
}

/**
 * Equip an item. You must have a valid Destiny Account, and either be in a social
 * space, in orbit, or offline.
 *
 * Wait at least 0.1s between actions.
 */
export function equipItem(
  http: HttpClient,
  body: DestinyItemActionRequest
): Promise<ServerResponse<number>> {
  return post(http, `${API_BASE}Actions/Items/EquipItem/`, body);
}

/**
 * Equip a list of items by itemInstanceIds. You must have a valid Destiny Account,
 * and either be in a social space, in orbit, or offline. Any items not found on
 * your character will be ignored.
 *
 * Wait at least 0.1s between actions.
 */
export function equipItems(
  http: HttpClient,
  body: DestinyItemSetActionRequest
): Promise<ServerResponse<DestinyEquipItemResults>> {
  return post(http, `${API_BASE}Actions/Items/EquipItems/`, body);
}

/**
 * Equip a loadout. You must have a valid Destiny Account, and either be in a
 * social space, in orbit, or offline.
 *
 * Wait at least 1s between actions.
 */
export function equipLoadout(
  http: HttpClient,
  body: DestinyLoadoutActionRequest
): Promise<ServerResponse<number>> {
  return post(http, `${API_BASE}Actions/Loadouts/EquipLoadout/`, body);
}

/**
 * Snapshot a loadout with the currently equipped items.
 *
 * Wait at least 1s between actions.
 */
export function snapshotLoadout(
  http: HttpClient,
  body: DestinyLoadoutUpdateActionRequest
): Promise<ServerResponse<number>> {
  return post(http, `${API_BASE}Actions/Loadouts/SnapshotLoadout/`, body);
}

/**
 * Update the color, icon, and name of a loadout.
 *
 * Wait at least 1s between actions.
 */
export function updateLoadoutIdentifiers(
  http: HttpClient,
  body: DestinyLoadoutUpdateActionRequest
): Promise<ServerResponse<number>> {
  return post(http, `${API_BASE}Actions/Loadouts/UpdateLoadoutIdentifiers/`, body);
}

/**
 * Clear the identifiers and items of a loadout.
 *
 * Wait at least 1s between actions.
 */
export function clearLoadout(
  http: HttpClient,
  body: DestinyLoadoutActionRequest
): Promise<ServerResponse<number>> {
  return post(http, `${API_BASE}Actions/Loadouts/ClearLoadout/`, body);
}

/**
 * Set the Lock State for an instanced item. You must have a valid Destiny Account.
 *
 * Wait at least 0.1s between actions.
 */
export function setItemLockState(
  http: HttpClient,
  body: DestinyItemStateRequest
): Promise<ServerResponse<number>> {
  return post(http, `${API_BASE}Actions/Items/SetLockState/`, body);
}

/**
 * Set the Tracking State for an instanced item, if that item is a Quest or Bounty.
 * You must have a valid Destiny Account. Yeah, it's an item.
 *
 * Wait at least 1s between actions.
 */
export function setQuestTrackedState(
  http: HttpClient,
  body: DestinyItemStateRequest
): Promise<ServerResponse<number>> {
  return post(http, `${API_BASE}Actions/Items/SetTrackedState/`, body);
}

/**
 * Insert a plug into a socketed item. I know how it sounds, but I assure you it's
 * much more G-rated than you might be guessing. We haven't decided yet whether
 * this will be able to insert plugs that have side effects, but if we do it will
 * require special scope permission for an application attempting to do so. You
 * must have a valid Destiny Account, and either be in a social space, in orbit, or
 * offline. Request must include proof of permission for 'InsertPlugs' from the
 * account owner.
 *
 * Wait at least 0.5s between actions.
 */
export function insertSocketPlug(
  http: HttpClient,
  body: DestinyInsertPlugsActionRequest
): Promise<ServerResponse<DestinyItemChangeResponse>> {
  return post(http, `${API_BASE}Actions/Items/InsertSocketPlug/`, body);
}

/**
 * Insert a 'free' plug into an item's socket. This does not require 'Advanced
 * Write Action' authorization and is available to 3rd-party apps, but will only
 * work on 'free and reversible' socket actions (Perks, Armor Mods, Shaders,
 * Ornaments, etc.). You must have a valid Destiny Account, and the character must
 * either be in a social space, in orbit, or offline.
 *
 * Wait at least 0.5s between actions.
 */
export function insertSocketPlugFree(
  http: HttpClient,
  body: DestinyInsertPlugsFreeActionRequest
): Promise<ServerResponse<DestinyItemChangeResponse>> {
  return post(http, `${API_BASE}Actions/Items/InsertSocketPlugFree/`, body);
}

export interface GetPostGameCarnageReportParams {
  /** The ID of the activity whose PGCR is requested. */
  activityId: string;
}

/** Gets the available post game carnage report for the activity ID. */
export function getPostGameCarnageReport(
  http: HttpClient,
  params: GetPostGameCarnageReportParams
): Promise<ServerResponse<DestinyPostGameCarnageReportData>> {
  return get(
    http,
    `https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${params.activityId}/`
  );
}

export interface ReportOffensivePostGameCarnageReportPlayerParams {
  /** The ID of the activity where you ran into the brigand that you're reporting. */
  activityId: string;
}

/**
 * Report a player that you met in an activity that was engaging in ToS-violating
 * activities. Both you and the offending player must have played in the activityId
 * passed in. Please use this judiciously and only when you have strong suspicions
 * of violation, pretty please.
 */
export function reportOffensivePostGameCarnageReportPlayer(
  http: HttpClient,
  params: ReportOffensivePostGameCarnageReportPlayerParams,
  body: DestinyReportOffensePgcrRequest
): Promise<ServerResponse<number>> {
  return post(
    http,
    `https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/${params.activityId}/Report/`,
    body
  );
}

/** Gets historical stats definitions. */
export function getHistoricalStatsDefinition(
  http: HttpClient
): Promise<ServerResponse<{ [key: string]: DestinyHistoricalStatsDefinition }>> {
  return get(http, `${API_BASE}Stats/Definition/`);
}

export interface GetClanLeaderboardsParams {
  /** Group ID of the clan whose leaderboards you wish to fetch. */
  groupId: string;
  /**
   * Maximum number of top players to return. Use a large number to get entire
   * leaderboard.
   */
  maxtop?: number;
  /**
   * List of game modes for which to get leaderboards. See the documentation for
   * DestinyActivityModeType for valid values, and pass in string representation,
   * comma delimited.
   */
  modes?: string;
  /** ID of stat to return rather than returning all Leaderboard stats. */
  statid?: string;
}

/**
 * Gets leaderboards with the signed in user's friends and the supplied
 * destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and
 * may experience rough edges. The schema is in final form, but there may be bugs
 * that prevent desirable operation.
 */
export function getClanLeaderboards(
  http: HttpClient,
  params: GetClanLeaderboardsParams
): Promise<ServerResponse<{ [key: string]: { [key: string]: DestinyLeaderboard } }>> {
  return get(http, `${API_BASE}Stats/Leaderboards/Clans/${params.groupId}/`, {
    maxtop: params.maxtop,
    modes: params.modes,
    statid: params.statid,
  });
}

export interface GetClanAggregateStatsParams {
  /** Group ID of the clan whose leaderboards you wish to fetch. */
  groupId: string;
  /**
   * List of game modes for which to get leaderboards. See the documentation for
   * DestinyActivityModeType for valid values, and pass in string representation,
   * comma delimited.
   */
  modes?: string;
}

/**
 * Gets aggregated stats for a clan using the same categories as the clan
 * leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough
 * edges. The schema is in final form, but there may be bugs that prevent desirable
 * operation.
 */
export function getClanAggregateStats(
  http: HttpClient,
  params: GetClanAggregateStatsParams
): Promise<ServerResponse<DestinyClanAggregateStat[]>> {
  return get(http, `${API_BASE}Stats/AggregateClanStats/${params.groupId}/`, {
    modes: params.modes,
  });
}

export interface GetLeaderboardsParams {
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /**
   * Maximum number of top players to return. Use a large number to get entire
   * leaderboard.
   */
  maxtop?: number;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
  /**
   * List of game modes for which to get leaderboards. See the documentation for
   * DestinyActivityModeType for valid values, and pass in string representation,
   * comma delimited.
   */
  modes?: string;
  /** ID of stat to return rather than returning all Leaderboard stats. */
  statid?: string;
}

/**
 * Gets leaderboards with the signed in user's friends and the supplied
 * destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been
 * implemented. It is being returned for a preview of future functionality, and for
 * public comment/suggestion/preparation.
 */
export function getLeaderboards(
  http: HttpClient,
  params: GetLeaderboardsParams
): Promise<ServerResponse<{ [key: string]: { [key: string]: DestinyLeaderboard } }>> {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Stats/Leaderboards/`,
    {
      maxtop: params.maxtop,
      modes: params.modes,
      statid: params.statid,
    }
  );
}

export interface GetLeaderboardsForCharacterParams {
  /**
   * The specific character to build the leaderboard around for the provided Destiny
   * Membership.
   */
  characterId: string;
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /**
   * Maximum number of top players to return. Use a large number to get entire
   * leaderboard.
   */
  maxtop?: number;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
  /**
   * List of game modes for which to get leaderboards. See the documentation for
   * DestinyActivityModeType for valid values, and pass in string representation,
   * comma delimited.
   */
  modes?: string;
  /** ID of stat to return rather than returning all Leaderboard stats. */
  statid?: string;
}

/**
 * Gets leaderboards with the signed in user's friends and the supplied
 * destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and
 * may experience rough edges. The schema is in final form, but there may be bugs
 * that prevent desirable operation.
 */
export function getLeaderboardsForCharacter(
  http: HttpClient,
  params: GetLeaderboardsForCharacterParams
): Promise<ServerResponse<{ [key: string]: { [key: string]: DestinyLeaderboard } }>> {
  return get(
    http,
    `${API_BASE}Stats/Leaderboards/${params.membershipType}/${params.destinyMembershipId}/${params.characterId}/`,
    {
      maxtop: params.maxtop,
      modes: params.modes,
      statid: params.statid,
    }
  );
}

export interface SearchDestinyEntitiesParams {
  /** Page number to return, starting with 0. */
  page?: number;
  /** The string to use when searching for Destiny entities. */
  searchTerm: string;
  /**
   * The type of entity for whom you would like results. These correspond to the
   * entity's definition contract name. For instance, if you are looking for items,
   * this property should be 'DestinyInventoryItemDefinition'.
   */
  type: string;
}

/** Gets a page list of Destiny items. */
export function searchDestinyEntities(
  http: HttpClient,
  params: SearchDestinyEntitiesParams
): Promise<ServerResponse<DestinyEntitySearchResult>> {
  return get(http, `${API_BASE}Armory/Search/${params.type}/${params.searchTerm}/`, {
    page: params.page,
  });
}

export interface GetHistoricalStatsParams {
  /**
   * The id of the character to retrieve. You can omit this character ID or set it to
   * 0 to get aggregate stats across all characters.
   */
  characterId: string;
  /**
   * Last day to return when daily stats are requested. Use the format YYYY-MM-DD.
   * Currently, we cannot allow more than 31 days of daily data to be requested in a
   * single request.
   */
  dayend?: string;
  /**
   * First day to return when daily stats are requested. Use the format YYYY-MM-DD.
   * Currently, we cannot allow more than 31 days of daily data to be requested in a
   * single request.
   */
  daystart?: string;
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /**
   * Group of stats to include, otherwise only general stats are returned. Comma
   * separated list is allowed. Values: General, Weapons, Medals
   */
  groups?: DestinyStatsGroupType[];
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
  /**
   * Game modes to return. See the documentation for DestinyActivityModeType for
   * valid values, and pass in string representation, comma delimited.
   */
  modes?: DestinyActivityModeType[];
  /**
   * Indicates a specific period type to return. Optional. May be: Daily, AllTime, or
   * Activity
   */
  periodType?: PeriodType;
}

/** Gets historical stats for indicated character. */
export function getHistoricalStats(
  http: HttpClient,
  params: GetHistoricalStatsParams
): Promise<ServerResponse<{ [key: string]: DestinyHistoricalStatsByPeriod }>> {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/`,
    {
      dayend: params.dayend,
      daystart: params.daystart,
      groups: params.groups ? params.groups.join(',') : undefined,
      modes: params.modes ? params.modes.join(',') : undefined,
      periodType: params.periodType,
    }
  );
}

export interface GetHistoricalStatsForAccountParams {
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /**
   * Groups of stats to include, otherwise only general stats are returned. Comma
   * separated list is allowed. Values: General, Weapons, Medals.
   */
  groups?: DestinyStatsGroupType[];
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/**
 * Gets aggregate historical stats organized around each character for a given
 * account.
 */
export function getHistoricalStatsForAccount(
  http: HttpClient,
  params: GetHistoricalStatsForAccountParams
): Promise<ServerResponse<DestinyHistoricalStatsAccountResult>> {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Stats/`,
    {
      groups: params.groups ? params.groups.join(',') : undefined,
    }
  );
}

export interface GetActivityHistoryParams {
  /** The id of the character to retrieve. */
  characterId: string;
  /** Number of rows to return */
  count?: number;
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
  /**
   * A filter for the activity mode to be returned. None returns all activities. See
   * the documentation for DestinyActivityModeType for valid values, and pass in
   * string representation.
   */
  mode?: DestinyActivityModeType;
  /** Page number to return, starting with 0. */
  page?: number;
}

/** Gets activity history stats for indicated character. */
export function getActivityHistory(
  http: HttpClient,
  params: GetActivityHistoryParams
): Promise<ServerResponse<DestinyActivityHistoryResults>> {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/Activities/`,
    {
      count: params.count,
      mode: params.mode,
      page: params.page,
    }
  );
}

export interface GetUniqueWeaponHistoryParams {
  /** The id of the character to retrieve. */
  characterId: string;
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/** Gets details about unique weapon usage, including all exotic weapons. */
export function getUniqueWeaponHistory(
  http: HttpClient,
  params: GetUniqueWeaponHistoryParams
): Promise<ServerResponse<DestinyHistoricalWeaponStatsData>> {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/UniqueWeapons/`
  );
}

export interface GetDestinyAggregateActivityStatsParams {
  /** The specific character whose activities should be returned. */
  characterId: string;
  /** The Destiny membershipId of the user to retrieve. */
  destinyMembershipId: string;
  /** A valid non-BungieNet membership type. */
  membershipType: BungieMembershipType;
}

/**
 * Gets all activities the character has participated in together with aggregate
 * statistics for those activities.
 */
export function getDestinyAggregateActivityStats(
  http: HttpClient,
  params: GetDestinyAggregateActivityStatsParams
): Promise<ServerResponse<DestinyAggregateActivityResults>> {
  return get(
    http,
    `${API_BASE}${params.membershipType}/Account/${params.destinyMembershipId}/Character/${params.characterId}/Stats/AggregateActivityStats/`
  );
}

export interface GetPublicMilestoneContentParams {
  /** The identifier for the milestone to be returned. */
  milestoneHash: number;
}

/** Gets custom localized content for the milestone of the given hash, if it exists. */
export function getPublicMilestoneContent(
  http: HttpClient,
  params: GetPublicMilestoneContentParams
): Promise<ServerResponse<DestinyMilestoneContent>> {
  return get(http, `${API_BASE}Milestones/${params.milestoneHash}/Content/`);
}

/** Gets public information about currently available Milestones. */
export function getPublicMilestones(
  http: HttpClient
): Promise<ServerResponse<{ [key: number]: DestinyPublicMilestone }>> {
  return get(http, `${API_BASE}Milestones/`);
}

/** Initialize a request to perform an advanced write action. */
export function awaInitializeRequest(
  http: HttpClient,
  body: AwaPermissionRequested
): Promise<ServerResponse<AwaInitializeResponse>> {
  return post(http, `${API_BASE}Awa/Initialize/`, body);
}

/**
 * Provide the result of the user interaction. Called by the Bungie Destiny App to
 * approve or reject a request.
 */
export function awaProvideAuthorizationResult(
  http: HttpClient,
  body: AwaUserResponse
): Promise<ServerResponse<number>> {
  return post(http, `${API_BASE}Awa/AwaProvideAuthorizationResult/`, body);
}

export interface AwaGetActionTokenParams {
  /** The identifier for the advanced write action request. */
  correlationId: string;
}

/** Returns the action token if user approves the request. */
export function awaGetActionToken(
  http: HttpClient,
  params: AwaGetActionTokenParams
): Promise<ServerResponse<AwaAuthorizationResult>> {
  return get(http, `${API_BASE}Awa/GetActionToken/${params.correlationId}/`);
}
