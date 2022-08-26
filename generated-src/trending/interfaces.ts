/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */

import {
  ContentItemPublicContract
} from '../content/interfaces.js';
import {
  DestinyMilestoneContent,
  DestinyPublicActivityStatus,
  DestinyPublicMilestone
} from '../destiny2/interfaces.js';
import {
  PagedQuery
} from '../common.js';

/** The known entity types that you can have returned from Trending. */
export const enum TrendingEntryType {
  News = 0,
  DestinyItem = 1,
  DestinyActivity = 2,
  DestinyRitual = 3,
  SupportArticle = 4,
  Creation = 5,
  Stream = 6,
  Update = 7,
  Link = 8,
  ForumTag = 9,
  Container = 10,
  Release = 11
}

export interface TrendingCategories {
  readonly categories: TrendingCategory[];
}

export interface TrendingCategory {
  readonly categoryName: string;
  readonly entries: SearchResultOfTrendingEntry;
  readonly categoryId: string;
}

export interface SearchResultOfTrendingEntry {
  readonly results: TrendingEntry[];
  readonly totalResults: number;
  readonly hasMore: boolean;
  readonly query: PagedQuery;
  readonly replacementContinuationToken: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   *
   * If False, it does not, and may be estimated/only the size of the current page.
   *
   * Either way, you should probably always only trust hasMore.
   *
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  readonly useTotalResults: boolean;
}

/**
 * The list entry view for trending items. Returns just enough to show the item on
 * the trending page.
 */
export interface TrendingEntry {
  /** The weighted score of this trending item. */
  readonly weight: number;
  readonly isFeatured: boolean;
  /**
   * We don't know whether the identifier will be a string, a uint, or a long... so
   * we're going to cast it all to a string. But either way, we need any trending
   * item created to have a single unique identifier for its type.
   */
  readonly identifier: string;
  /**
   * An enum - unfortunately - dictating all of the possible kinds of trending items
   * that you might get in your result set, in case you want to do custom rendering
   * or call to get the details of the item.
   */
  readonly entityType: TrendingEntryType;
  /**
   * The localized "display name/article title/'primary localized identifier'" of the
   * entity.
   */
  readonly displayName: string;
  /**
   * If the entity has a localized tagline/subtitle/motto/whatever, that is found
   * here.
   */
  readonly tagline: string;
  readonly image: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly link: string;
  /**
   * If this is populated, the entry has a related WebM video to show. I am 100%
   * certain I am going to regret putting this directly on TrendingEntry, but it will
   * work so yolo
   */
  readonly webmVideo: string;
  /**
   * If this is populated, the entry has a related MP4 video to show. I am 100%
   * certain I am going to regret putting this directly on TrendingEntry, but it will
   * work so yolo
   */
  readonly mp4Video: string;
  /**
   * If isFeatured, this image will be populated with whatever the featured image is.
   * Note that this will likely be a very large image, so don't use it all the time.
   */
  readonly featureImage: string;
  /**
   * If the item is of entityType TrendingEntryType.Container, it may have items -
   * also Trending Entries - contained within it. This is the ordered list of those
   * to display under the Container's header.
   */
  readonly items: TrendingEntry[];
  /** If the entry has a date at which it was created, this is that date. */
  readonly creationDate?: string;
}

export interface TrendingDetail {
  readonly identifier: string;
  readonly entityType: TrendingEntryType;
  readonly news: TrendingEntryNews;
  readonly support: TrendingEntrySupportArticle;
  readonly destinyItem: TrendingEntryDestinyItem;
  readonly destinyActivity: TrendingEntryDestinyActivity;
  readonly destinyRitual: TrendingEntryDestinyRitual;
  readonly creation: TrendingEntryCommunityCreation;
}

export interface TrendingEntryNews {
  readonly article: ContentItemPublicContract;
}

export interface TrendingEntrySupportArticle {
  readonly article: ContentItemPublicContract;
}

export interface TrendingEntryDestinyItem {
  readonly itemHash: number;
}

export interface TrendingEntryDestinyActivity {
  readonly activityHash: number;
  readonly status: DestinyPublicActivityStatus;
}

export interface TrendingEntryDestinyRitual {
  readonly image: string;
  readonly icon: string;
  readonly title: string;
  readonly subtitle: string;
  readonly dateStart?: string;
  readonly dateEnd?: string;
  /**
   * A destiny event does not necessarily have a related Milestone, but if it does
   * the details will be returned here.
   */
  readonly milestoneDetails: DestinyPublicMilestone;
  /**
   * A destiny event will not necessarily have milestone "custom content", but if it
   * does the details will be here.
   */
  readonly eventContent: DestinyMilestoneContent;
}

export interface TrendingEntryCommunityCreation {
  readonly media: string;
  readonly title: string;
  readonly author: string;
  readonly authorMembershipId: string;
  readonly postId: string;
  readonly body: string;
  readonly upvotes: number;
}
