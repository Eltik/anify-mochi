import { DiscoverListingOrientationType, DiscoverListingType } from "@mochiapp/js/src/interfaces/source/types";

import type { DiscoverListing, DiscoverListingsRequest, Paging, Playlist, PlaylistDetails, PlaylistItem, SearchFilter, SearchFilterOption, SearchQuery } from "@mochiapp/js/dist";
import {
    PlaylistEpisodeServerFormatType,
    PlaylistEpisodeServerQualityType,
    PlaylistEpisodeServerSkipType,
    PlaylistEpisodeServerSubtitleFormat,
    PlaylistEpisodeServerRequest,
    PlaylistEpisodeServerResponse,
    PlaylistEpisodeSource,
    PlaylistEpisodeSourcesRequest,
    PlaylistGroupVariant,
    PlaylistID,
    PlaylistItemsOptions,
    PlaylistItemsResponse,
    PlaylistStatus,
    PlaylistType,
    SourceModule,
    VideoContent,
} from "@mochiapp/js/dist";
import { getServerSources } from "./utils/getServerUrl";
import { Anime, EpisodeData, SearchSchema, SeasonalSchema } from "./models";
import { MediaStatus } from "./enums/anify";

const BASENAME = "https://anify.tv";
const API_BASENAME = "https://api.anify.tv";

export default class Source extends SourceModule implements VideoContent {
    metadata = {
        id: "AnifySource",
        name: "Anify Source",
        version: "1.0.0",
    };

    async searchFilters(): Promise<SearchFilter[]> {
        const genreOptions: SearchFilterOption[] = [];
        const genreFilters: SearchFilter = {
            id: "genres",
            displayName: "Genres",
            multiselect: true,
            options: genreOptions,
            required: false,
        };

        const tagOptions: SearchFilterOption[] = [];
        const tagFilters: SearchFilter = {
            id: "tags",
            displayName: "Tags",
            multiselect: true,
            options: tagOptions,
            required: false,
        };

        return [genreFilters, tagFilters];
    }

    async search(searchQuery: SearchQuery): Promise<Paging<Playlist>> {
        const data: SearchSchema = await (await request.get(`${API_BASENAME}/search?query=${searchQuery.query}&type=${"anime"}&page=${searchQuery.page ?? 1}`)).json();

        const items: Playlist[] = data.results.map(
            (anime) =>
                ({
                    id: anime.id,
                    url: `${BASENAME}/info/${anime.id}`,
                    status:
                        anime.status === MediaStatus.CANCELLED
                            ? PlaylistStatus.cancelled
                            : anime.status === MediaStatus.FINISHED
                            ? PlaylistStatus.completed
                            : anime.status === MediaStatus.HIATUS
                            ? PlaylistStatus.paused
                            : anime.status === MediaStatus.NOT_YET_RELEASED
                            ? PlaylistStatus.upcoming
                            : anime.status === MediaStatus.RELEASING
                            ? PlaylistStatus.ongoing
                            : PlaylistStatus.unknown,
                    type: PlaylistType.video,
                    title: anime.title.english ?? anime.title.romaji ?? anime.title.native ?? "Unknown",
                    bannerImage: anime.bannerImage ?? anime.coverImage ?? "",
                    posterImage: anime.coverImage ?? anime.bannerImage ?? "",
                } satisfies Playlist)
        );

        const hasNextPage = data.lastPage > Number(searchQuery.page ?? 1);
        return {
            id: `${API_BASENAME}/search?query=${searchQuery.query}&type=${"anime"}&page=${searchQuery.page ?? 1}`,
            nextPage: hasNextPage ? `${API_BASENAME}/search?query=${searchQuery.query}&type=${"anime"}&page=${Number(searchQuery.page ?? 1) + 1}` : undefined,
            items: items,
            previousPage: `${API_BASENAME}/search?query=${searchQuery.query}&type=${"anime"}&page=${Number(searchQuery.page ?? 1) - 1}`,
            title: "Test",
        };
    }

    async discoverListings(listingsRequest?: DiscoverListingsRequest | undefined): Promise<DiscoverListing[]> {
        const data: SeasonalSchema = await (await request.get(`${API_BASENAME}/seasonal?type=anime&fields=[id,description,bannerImage,coverImage,title,genres,format,status,averageRating,episodes,chapters,year,type]`)).json();

        const seasonal: Playlist[] = data.seasonal.map(
            (anime) =>
                ({
                    id: anime.id,
                    url: `${BASENAME}/info/${anime.id}`,
                    status:
                        anime.status === MediaStatus.CANCELLED
                            ? PlaylistStatus.cancelled
                            : anime.status === MediaStatus.FINISHED
                            ? PlaylistStatus.completed
                            : anime.status === MediaStatus.HIATUS
                            ? PlaylistStatus.paused
                            : anime.status === MediaStatus.NOT_YET_RELEASED
                            ? PlaylistStatus.upcoming
                            : anime.status === MediaStatus.RELEASING
                            ? PlaylistStatus.ongoing
                            : PlaylistStatus.unknown,
                    type: PlaylistType.video,
                    title: anime.title.english ?? anime.title.romaji ?? anime.title.native ?? "Unknown",
                    bannerImage: anime.bannerImage ?? anime.coverImage ?? "",
                    posterImage: anime.coverImage ?? anime.bannerImage ?? "",
                } satisfies Playlist)
        );

        const top: Playlist[] = data.top.map(
            (anime) =>
                ({
                    id: anime.id,
                    url: `${BASENAME}/info/${anime.id}`,
                    status:
                        anime.status === MediaStatus.CANCELLED
                            ? PlaylistStatus.cancelled
                            : anime.status === MediaStatus.FINISHED
                            ? PlaylistStatus.completed
                            : anime.status === MediaStatus.HIATUS
                            ? PlaylistStatus.paused
                            : anime.status === MediaStatus.NOT_YET_RELEASED
                            ? PlaylistStatus.upcoming
                            : anime.status === MediaStatus.RELEASING
                            ? PlaylistStatus.ongoing
                            : PlaylistStatus.unknown,
                    type: PlaylistType.video,
                    title: anime.title.english ?? anime.title.romaji ?? anime.title.native ?? "Unknown",
                    bannerImage: anime.bannerImage ?? anime.coverImage ?? "",
                    posterImage: anime.coverImage ?? anime.bannerImage ?? "",
                } satisfies Playlist)
        );

        const popular: Playlist[] = data.popular.map(
            (anime) =>
                ({
                    id: anime.id,
                    url: `${BASENAME}/info/${anime.id}`,
                    status:
                        anime.status === MediaStatus.CANCELLED
                            ? PlaylistStatus.cancelled
                            : anime.status === MediaStatus.FINISHED
                            ? PlaylistStatus.completed
                            : anime.status === MediaStatus.HIATUS
                            ? PlaylistStatus.paused
                            : anime.status === MediaStatus.NOT_YET_RELEASED
                            ? PlaylistStatus.upcoming
                            : anime.status === MediaStatus.RELEASING
                            ? PlaylistStatus.ongoing
                            : PlaylistStatus.unknown,
                    type: PlaylistType.video,
                    title: anime.title.english ?? anime.title.romaji ?? anime.title.native ?? "Unknown",
                    bannerImage: anime.bannerImage ?? anime.coverImage ?? "",
                    posterImage: anime.coverImage ?? anime.bannerImage ?? "",
                } satisfies Playlist)
        );

        const trending: Playlist[] = data.trending.map(
            (anime) =>
                ({
                    id: anime.id,
                    url: `${BASENAME}/info/${anime.id}`,
                    status:
                        anime.status === MediaStatus.CANCELLED
                            ? PlaylistStatus.cancelled
                            : anime.status === MediaStatus.FINISHED
                            ? PlaylistStatus.completed
                            : anime.status === MediaStatus.HIATUS
                            ? PlaylistStatus.paused
                            : anime.status === MediaStatus.NOT_YET_RELEASED
                            ? PlaylistStatus.upcoming
                            : anime.status === MediaStatus.RELEASING
                            ? PlaylistStatus.ongoing
                            : PlaylistStatus.unknown,
                    type: PlaylistType.video,
                    title: anime.title.english ?? anime.title.romaji ?? anime.title.native ?? "Unknown",
                    bannerImage: anime.bannerImage ?? anime.coverImage ?? "",
                    posterImage: anime.coverImage ?? anime.bannerImage ?? "",
                } satisfies Playlist)
        );

        return [
            {
                title: "Trending",
                type: DiscoverListingType.featured,
                id: "trending",
                orientation: DiscoverListingOrientationType.portrait,
                paging: {
                    id: "currently-trending",
                    title: "Trending",
                    previousPage: undefined,
                    nextPage: undefined,
                    items: trending,
                },
            },
            {
                title: "Seasonal",
                type: DiscoverListingType.rank,
                id: "seasonal",
                orientation: DiscoverListingOrientationType.portrait,
                paging: {
                    id: "seasonal-anime",
                    title: "Seasonal",
                    previousPage: undefined,
                    nextPage: undefined,
                    items: seasonal,
                },
            },
        ];
    }

    async playlistDetails(id: string): Promise<PlaylistDetails> {
        const data: Anime = await (await request.get(`${API_BASENAME}/info/${id}`)).json();

        return {
            synopsis: data.description ?? "No description found.",
            genres: data.genres,
            yearReleased: data.year ?? 0,
            previews: [], // TODO
            altBanners: data.artwork.filter((item) => item.type === "banner" || item.type === "top_banner").map((item) => item.img),
            altPosters: data.artwork.filter((item) => item.type === "poster").map((item) => item.img),
            altTitles: Object.values(data.title).filter(Boolean) as string[],
            ratings: data.averageRating ?? 0,
        } satisfies PlaylistDetails;
    }

    async playlistEpisodeServer(req: PlaylistEpisodeServerRequest): Promise<PlaylistEpisodeServerResponse> {
        const sources = await getServerSources(`${req.episodeId}`);
        return {
            links: sources.sources.map((item) => ({
                url: item.url,
                quality: PlaylistEpisodeServerQualityType.auto,
                format: PlaylistEpisodeServerFormatType.dash,
            })),
            skipTimes: [
                {
                    startTime: sources.intro.start,
                    endTime: sources.intro.end,
                    type: PlaylistEpisodeServerSkipType.opening,
                },
                {
                    startTime: sources.outro.start,
                    endTime: sources.outro.end,
                    type: PlaylistEpisodeServerSkipType.ending,
                },
            ],
            headers: sources.headers,
            subtitles: sources.subtitles.map((item) => ({
                url: item.url,
                name: item.label,
                format: item.url.endsWith("vtt") ? PlaylistEpisodeServerSubtitleFormat.vtt : item.url.endsWith("ass") ? PlaylistEpisodeServerSubtitleFormat.ass : item.url.endsWith("srt") ? PlaylistEpisodeServerSubtitleFormat.srt : PlaylistEpisodeServerSubtitleFormat.vtt,
                default: item.lang === "en-US" || item.lang?.toLowerCase().includes("english") ? true : false,
                autoselect: true,
            })),
        };
    }

    async playlistEpisodeSources(req: PlaylistEpisodeSourcesRequest): Promise<PlaylistEpisodeSource[]> {
        return [
            {
                id: "servers",
                servers: [
                    {
                        id: "main",
                        displayName: "Main",
                    },
                ],
                displayName: "Servers",
            },
        ];
    }

    async playlistEpisodes(playlistId: PlaylistID, options?: PlaylistItemsOptions): Promise<PlaylistItemsResponse> {
        const data: EpisodeData[] = await (await request.get(`${API_BASENAME}/episodes?id=${playlistId}`)).json();

        const variants: PlaylistGroupVariant[] = [];

        for (const provider of data) {
            const pagings: Paging<PlaylistItem>[] = [];

            // Split provider.episodes into groups of twelve
            const episodes = provider.episodes;
            const groups = episodes.map((_, i) => i % 12 === 0 && episodes.slice(i, i + 12)).filter(Boolean);

            for (const episodes of groups) {
                if (!episodes) continue;

                const playlistItem: Paging<PlaylistItem> = {
                    id: `${playlistId}-${provider.providerId}`,
                    title: `${provider.providerId} - ${episodes[0].number}-${episodes[episodes.length - 1].number}`,
                    items: [],
                };

                for (const episode of episodes) {
                    playlistItem.items.push({
                        id: `${API_BASENAME}/sources?id=${playlistId}&providerId=${provider.providerId}&watchId=${episode.id}&subType=${"sub"}&episodeNumber=${episode.number}`,
                        title: episode.number.toString(),
                        number: episode.number,
                        description: episode.description ?? undefined,
                        thumbnail: episode.img ?? undefined,
                        tags: [],
                    } satisfies PlaylistItem);
                }

                pagings.push(playlistItem);
            }

            variants.push({
                id: `${playlistId}-${provider.providerId}`,
                title: provider.providerId,
                pagings,
            });
        }

        return [
            {
                id: playlistId,
                number: 1,
                variants,
            },
        ];
    }
}
