/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.17.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */

import { HttpClient, get, post } from '../http';

import {
  ContentItemPublicContract,
  ContentTypeDescription,
  NewsArticleRssResponse,
  SearchResultOfContentItemPublicContract
} from './interfaces.js';
import {
  ServerResponse
} from '../common.js';

const API_BASE = "https://www.bungie.net/Platform/Content/";

export interface GetContentTypeParams {
  type: string;
}

/** Gets an object describing a particular variant of content. */
export function getContentType(http: HttpClient, params: GetContentTypeParams): Promise<ServerResponse<ContentTypeDescription>> {
  return get(http, `${API_BASE}GetContentType/${params.type}/`);
}

export interface GetContentByIdParams {
  /** false */
  head?: boolean;
  id: string;
  locale: string;
}

/** Returns a content item referenced by id */
export function getContentById(http: HttpClient, params: GetContentByIdParams): Promise<ServerResponse<ContentItemPublicContract>> {
  return get(http, `${API_BASE}GetContentById/${params.id}/${params.locale}/`, {
    head: params.head
  });
}

export interface GetContentByTagAndTypeParams {
  /** Not used. */
  head?: boolean;
  locale: string;
  tag: string;
  type: string;
}

/** Returns the newest item that matches a given tag and Content Type. */
export function getContentByTagAndType(http: HttpClient, params: GetContentByTagAndTypeParams): Promise<ServerResponse<ContentItemPublicContract>> {
  return get(http, `${API_BASE}GetContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`, {
    head: params.head
  });
}

export interface SearchContentWithTextParams {
  /** Content type tag: Help, News, etc. Supply multiple ctypes separated by space. */
  ctype?: string;
  /** Page number for the search results, starting with page 1. */
  currentpage?: number;
  /** Not used. */
  head?: boolean;
  locale: string;
  /** Word or phrase for the search. */
  searchtext?: string;
  /** For analytics, hint at the part of the app that triggered the search. Optional. */
  source?: string;
  /** Tag used on the content to be searched. */
  tag?: string;
}

/**
 * Gets content based on querystring information passed in. Provides basic search
 * and text search capabilities.
 */
export function searchContentWithText(http: HttpClient, params: SearchContentWithTextParams): Promise<ServerResponse<SearchResultOfContentItemPublicContract>> {
  return get(http, `${API_BASE}Search/${params.locale}/`, {
    ctype: params.ctype,
    currentpage: params.currentpage,
    head: params.head,
    searchtext: params.searchtext,
    source: params.source,
    tag: params.tag
  });
}

export interface SearchContentByTagAndTypeParams {
  /** Page number for the search results starting with page 1. */
  currentpage?: number;
  /** Not used. */
  head?: boolean;
  /** Not used. */
  itemsperpage?: number;
  locale: string;
  tag: string;
  type: string;
}

/** Searches for Content Items that match the given Tag and Content Type. */
export function searchContentByTagAndType(http: HttpClient, params: SearchContentByTagAndTypeParams): Promise<ServerResponse<SearchResultOfContentItemPublicContract>> {
  return get(http, `${API_BASE}SearchContentByTagAndType/${params.tag}/${params.type}/${params.locale}/`, {
    currentpage: params.currentpage,
    head: params.head,
    itemsperpage: params.itemsperpage
  });
}

export interface SearchHelpArticlesParams {
  searchtext: string;
  size: string;
}

/** Search for Help Articles. */
export function searchHelpArticles(http: HttpClient, params: SearchHelpArticlesParams): Promise<ServerResponse<object>> {
  return get(http, `${API_BASE}SearchHelpArticles/${params.searchtext}/${params.size}/`);
}

export interface RssNewsArticlesParams {
  /** Optionally filter response to only include news items in a certain category. */
  categoryfilter?: string;
  /** Optionally include full content body for each news item. */
  includebody?: boolean;
  /** Zero-based pagination token for paging through result sets. */
  pageToken: string;
}

/** Returns a JSON string response that is the RSS feed for news articles. */
export function rssNewsArticles(http: HttpClient, params: RssNewsArticlesParams): Promise<ServerResponse<NewsArticleRssResponse>> {
  return get(http, `${API_BASE}Rss/NewsArticles/${params.pageToken}/`, {
    categoryfilter: params.categoryfilter,
    includebody: params.includebody
  });
}
