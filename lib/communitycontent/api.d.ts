/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.5
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */
import { HttpClient } from '../http';
import { BungieMembershipType, ServerResponse } from '../common';
import { CommunityContentSortMode, ForumTopicsCategoryFiltersEnum, PostSearchResponse } from '../forum/interfaces';
import { CommunityLiveStatus, CommunityStatusSort, SearchResultOfCommunityLiveStatus } from './interfaces';
import { PartnershipType } from '../platform';
export interface GetCommunityContentParams {
    /** The type of media to get */
    mediaFilter: ForumTopicsCategoryFiltersEnum;
    /** Zero based page */
    page: number;
    /** The sort mode. */
    sort: CommunityContentSortMode;
}
/** Returns community content. */
export declare function getCommunityContent(http: HttpClient, params: GetCommunityContentParams): Promise<ServerResponse<PostSearchResponse>>;
export interface GetCommunityLiveStatusesParams {
    /**
     * The hash of the Activity Mode for which streams should be retrieved. Don't pass
     * it in or pass 0 to not filter by mode.
     */
    modeHash?: number;
    /** Zero based page. */
    page: number;
    /** The type of partnership for which the status should be returned. */
    partnershipType: PartnershipType;
    /** The sort mode. */
    sort: CommunityStatusSort;
    /**
     * The locale for streams you'd like to see. Don't pass this to fall back on your
     * BNet locale. Pass 'ALL' to not filter by locale.
     */
    streamLocale?: string;
}
/** Returns info about community members who are live streaming. */
export declare function getCommunityLiveStatuses(http: HttpClient, params: GetCommunityLiveStatusesParams): Promise<ServerResponse<SearchResultOfCommunityLiveStatus>>;
export interface GetCommunityLiveStatusesForClanmatesParams {
    /** Zero based page. */
    page: number;
    /** The type of partnership for which the status should be returned. */
    partnershipType: PartnershipType;
    /** The sort mode. */
    sort: CommunityStatusSort;
}
/** Returns info about community members who are live streaming in your clans. */
export declare function getCommunityLiveStatusesForClanmates(http: HttpClient, params: GetCommunityLiveStatusesForClanmatesParams): Promise<ServerResponse<SearchResultOfCommunityLiveStatus>>;
export interface GetCommunityLiveStatusesForFriendsParams {
    /** Zero based page. */
    page: number;
    /** The type of partnership for which the status should be returned. */
    partnershipType: PartnershipType;
    /** The sort mode. */
    sort: CommunityStatusSort;
}
/** Returns info about community members who are live streaming among your friends. */
export declare function getCommunityLiveStatusesForFriends(http: HttpClient, params: GetCommunityLiveStatusesForFriendsParams): Promise<ServerResponse<SearchResultOfCommunityLiveStatus>>;
export interface GetFeaturedCommunityLiveStatusesParams {
    /** Zero based page. */
    page: number;
    /** The type of partnership for which the status should be returned. */
    partnershipType: PartnershipType;
    /** The sort mode. */
    sort: CommunityStatusSort;
    /**
     * The locale for streams you'd like to see. Don't pass this to fall back on your
     * BNet locale. Pass 'ALL' to not filter by locale.
     */
    streamLocale?: string;
}
/** Returns info about Featured live streams. */
export declare function getFeaturedCommunityLiveStatuses(http: HttpClient, params: GetFeaturedCommunityLiveStatusesParams): Promise<ServerResponse<SearchResultOfCommunityLiveStatus>>;
export interface GetStreamingStatusForMemberParams {
    /** The membershipId related to that type. */
    membershipId: string;
    /** The type of account for which info will be extracted. */
    membershipType: BungieMembershipType;
    /** The type of partnership for which info will be extracted. */
    partnershipType: PartnershipType;
}
/** Gets the Live Streaming status of a particular Account and Membership Type. */
export declare function getStreamingStatusForMember(http: HttpClient, params: GetStreamingStatusForMemberParams): Promise<ServerResponse<CommunityLiveStatus>>;
