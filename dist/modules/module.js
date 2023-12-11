"use strict";
var source = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@mochiapp/js/dist/common/types.js
  var require_types = __commonJS({
    "node_modules/@mochiapp/js/dist/common/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@mochiapp/js/dist/common/index.js
  var require_common = __commonJS({
    "node_modules/@mochiapp/js/dist/common/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_types(), exports);
    }
  });

  // node_modules/@mochiapp/js/dist/core/request/types.js
  var require_types2 = __commonJS({
    "node_modules/@mochiapp/js/dist/core/request/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MochiRequestMethod = void 0;
      var MochiRequestMethod;
      (function(MochiRequestMethod2) {
        MochiRequestMethod2["get"] = "get";
        MochiRequestMethod2["post"] = "post";
        MochiRequestMethod2["put"] = "put";
        MochiRequestMethod2["patch"] = "patch";
      })(MochiRequestMethod || (exports.MochiRequestMethod = MochiRequestMethod = {}));
    }
  });

  // node_modules/@mochiapp/js/dist/core/request/index.js
  var require_request = __commonJS({
    "node_modules/@mochiapp/js/dist/core/request/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_types2(), exports);
    }
  });

  // node_modules/@mochiapp/js/dist/core/index.js
  var require_core = __commonJS({
    "node_modules/@mochiapp/js/dist/core/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_request(), exports);
    }
  });

  // node_modules/@mochiapp/js/dist/contents/video/types.js
  var require_types3 = __commonJS({
    "node_modules/@mochiapp/js/dist/contents/video/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.PlaylistEpisodeServerSkipType = exports.PlaylistEpisodeServerSubtitleFormat = exports.PlaylistEpisodeServerFormatType = exports.PlaylistEpisodeServerQualityType = void 0;
      var PlaylistEpisodeServerQualityType2;
      (function(PlaylistEpisodeServerQualityType3) {
        PlaylistEpisodeServerQualityType3[PlaylistEpisodeServerQualityType3["auto"] = 0] = "auto";
        PlaylistEpisodeServerQualityType3[PlaylistEpisodeServerQualityType3["q360p"] = 1] = "q360p";
        PlaylistEpisodeServerQualityType3[PlaylistEpisodeServerQualityType3["q480p"] = 2] = "q480p";
        PlaylistEpisodeServerQualityType3[PlaylistEpisodeServerQualityType3["q720p"] = 3] = "q720p";
        PlaylistEpisodeServerQualityType3[PlaylistEpisodeServerQualityType3["q1080p"] = 4] = "q1080p";
      })(PlaylistEpisodeServerQualityType2 || (exports.PlaylistEpisodeServerQualityType = PlaylistEpisodeServerQualityType2 = {}));
      var PlaylistEpisodeServerFormatType2;
      (function(PlaylistEpisodeServerFormatType3) {
        PlaylistEpisodeServerFormatType3[PlaylistEpisodeServerFormatType3["hsl"] = 0] = "hsl";
        PlaylistEpisodeServerFormatType3[PlaylistEpisodeServerFormatType3["dash"] = 1] = "dash";
      })(PlaylistEpisodeServerFormatType2 || (exports.PlaylistEpisodeServerFormatType = PlaylistEpisodeServerFormatType2 = {}));
      var PlaylistEpisodeServerSubtitleFormat2;
      (function(PlaylistEpisodeServerSubtitleFormat3) {
        PlaylistEpisodeServerSubtitleFormat3[PlaylistEpisodeServerSubtitleFormat3["vtt"] = 0] = "vtt";
        PlaylistEpisodeServerSubtitleFormat3[PlaylistEpisodeServerSubtitleFormat3["ass"] = 1] = "ass";
        PlaylistEpisodeServerSubtitleFormat3[PlaylistEpisodeServerSubtitleFormat3["srt"] = 2] = "srt";
      })(PlaylistEpisodeServerSubtitleFormat2 || (exports.PlaylistEpisodeServerSubtitleFormat = PlaylistEpisodeServerSubtitleFormat2 = {}));
      var PlaylistEpisodeServerSkipType2;
      (function(PlaylistEpisodeServerSkipType3) {
        PlaylistEpisodeServerSkipType3[PlaylistEpisodeServerSkipType3["opening"] = 0] = "opening";
        PlaylistEpisodeServerSkipType3[PlaylistEpisodeServerSkipType3["ending"] = 1] = "ending";
        PlaylistEpisodeServerSkipType3[PlaylistEpisodeServerSkipType3["recap"] = 2] = "recap";
      })(PlaylistEpisodeServerSkipType2 || (exports.PlaylistEpisodeServerSkipType = PlaylistEpisodeServerSkipType2 = {}));
    }
  });

  // node_modules/@mochiapp/js/dist/contents/video/index.js
  var require_video = __commonJS({
    "node_modules/@mochiapp/js/dist/contents/video/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_types3(), exports);
    }
  });

  // node_modules/@mochiapp/js/dist/contents/index.js
  var require_contents = __commonJS({
    "node_modules/@mochiapp/js/dist/contents/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_video(), exports);
    }
  });

  // node_modules/@mochiapp/js/dist/interfaces/source/types.js
  var require_types4 = __commonJS({
    "node_modules/@mochiapp/js/dist/interfaces/source/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.PlaylistPreviewType = exports.PlaylistType = exports.PlaylistStatus = exports.DiscoverListingOrientationType = exports.DiscoverListingType = void 0;
      var DiscoverListingType2;
      (function(DiscoverListingType3) {
        DiscoverListingType3[DiscoverListingType3["default"] = 0] = "default";
        DiscoverListingType3[DiscoverListingType3["rank"] = 1] = "rank";
        DiscoverListingType3[DiscoverListingType3["featured"] = 2] = "featured";
      })(DiscoverListingType2 || (exports.DiscoverListingType = DiscoverListingType2 = {}));
      var DiscoverListingOrientationType2;
      (function(DiscoverListingOrientationType3) {
        DiscoverListingOrientationType3[DiscoverListingOrientationType3["portrait"] = 0] = "portrait";
        DiscoverListingOrientationType3[DiscoverListingOrientationType3["landscape"] = 1] = "landscape";
      })(DiscoverListingOrientationType2 || (exports.DiscoverListingOrientationType = DiscoverListingOrientationType2 = {}));
      var PlaylistStatus2;
      (function(PlaylistStatus3) {
        PlaylistStatus3[PlaylistStatus3["unknown"] = 0] = "unknown";
        PlaylistStatus3[PlaylistStatus3["upcoming"] = 1] = "upcoming";
        PlaylistStatus3[PlaylistStatus3["ongoing"] = 2] = "ongoing";
        PlaylistStatus3[PlaylistStatus3["completed"] = 3] = "completed";
        PlaylistStatus3[PlaylistStatus3["paused"] = 4] = "paused";
        PlaylistStatus3[PlaylistStatus3["cancelled"] = 5] = "cancelled";
      })(PlaylistStatus2 || (exports.PlaylistStatus = PlaylistStatus2 = {}));
      var PlaylistType2;
      (function(PlaylistType3) {
        PlaylistType3[PlaylistType3["video"] = 0] = "video";
        PlaylistType3[PlaylistType3["image"] = 1] = "image";
        PlaylistType3[PlaylistType3["text"] = 2] = "text";
      })(PlaylistType2 || (exports.PlaylistType = PlaylistType2 = {}));
      var PlaylistPreviewType;
      (function(PlaylistPreviewType2) {
        PlaylistPreviewType2[PlaylistPreviewType2["video"] = 0] = "video";
        PlaylistPreviewType2[PlaylistPreviewType2["image"] = 1] = "image";
      })(PlaylistPreviewType || (exports.PlaylistPreviewType = PlaylistPreviewType = {}));
    }
  });

  // node_modules/@mochiapp/js/dist/interfaces/source/index.js
  var require_source = __commonJS({
    "node_modules/@mochiapp/js/dist/interfaces/source/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SourceModule = void 0;
      __exportStar(require_types4(), exports);
      var SourceModule2 = class {
      };
      exports.SourceModule = SourceModule2;
    }
  });

  // node_modules/@mochiapp/js/dist/interfaces/tracker/index.js
  var require_tracker = __commonJS({
    "node_modules/@mochiapp/js/dist/interfaces/tracker/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TrackerModule = void 0;
      var TrackerModule = class {
        constructor() {
          this.metadata = {};
        }
      };
      exports.TrackerModule = TrackerModule;
    }
  });

  // node_modules/@mochiapp/js/dist/interfaces/index.js
  var require_interfaces = __commonJS({
    "node_modules/@mochiapp/js/dist/interfaces/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_source(), exports);
      __exportStar(require_tracker(), exports);
    }
  });

  // node_modules/@mochiapp/js/dist/index.js
  var require_dist = __commonJS({
    "node_modules/@mochiapp/js/dist/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_common(), exports);
      __exportStar(require_core(), exports);
      __exportStar(require_contents(), exports);
      __exportStar(require_interfaces(), exports);
    }
  });

  // src/module/index.ts
  var module_exports = {};
  __export(module_exports, {
    default: () => Source
  });
  var import_dist = __toESM(require_dist());

  // src/module/utils/getServerUrl.ts
  async function getServerSources(url) {
    const data = await (await request.get(url)).json();
    return data;
  }

  // src/module/index.ts
  var BASENAME = "https://anify.tv";
  var API_BASENAME = "https://api.anify.tv";
  var Source = class extends import_dist.SourceModule {
    constructor() {
      super(...arguments);
      this.metadata = {
        id: "AnifySource",
        name: "Anify Source",
        version: "1.0.0"
      };
    }
    async searchFilters() {
      const genreOptions = [];
      const genreFilters = {
        id: "genres",
        displayName: "Genres",
        multiselect: true,
        options: genreOptions,
        required: false
      };
      const tagOptions = [];
      const tagFilters = {
        id: "tags",
        displayName: "Tags",
        multiselect: true,
        options: tagOptions,
        required: false
      };
      return [genreFilters, tagFilters];
    }
    async search(searchQuery) {
      const data = await (await request.get(`${API_BASENAME}/search?query=${searchQuery.query}&type=${"anime"}&page=${searchQuery.page ?? 1}`)).json();
      const items = data.results.map(
        (anime) => ({
          id: anime.id,
          url: `${BASENAME}/info/${anime.id}`,
          status: anime.status === "CANCELLED" /* CANCELLED */ ? import_dist.PlaylistStatus.cancelled : anime.status === "FINISHED" /* FINISHED */ ? import_dist.PlaylistStatus.completed : anime.status === "HIATUS" /* HIATUS */ ? import_dist.PlaylistStatus.paused : anime.status === "NOT_YET_RELEASED" /* NOT_YET_RELEASED */ ? import_dist.PlaylistStatus.upcoming : anime.status === "RELEASING" /* RELEASING */ ? import_dist.PlaylistStatus.ongoing : import_dist.PlaylistStatus.unknown,
          type: import_dist.PlaylistType.video,
          title: anime.title.english ?? anime.title.romaji ?? anime.title.native ?? "Unknown",
          bannerImage: anime.bannerImage ?? anime.coverImage ?? "",
          posterImage: anime.coverImage ?? anime.bannerImage ?? ""
        })
      );
      const hasNextPage = data.lastPage > Number(searchQuery.page ?? 1);
      return {
        id: `${API_BASENAME}/search?query=${searchQuery.query}&type=${"anime"}&page=${searchQuery.page ?? 1}`,
        nextPage: hasNextPage ? `${API_BASENAME}/search?query=${searchQuery.query}&type=${"anime"}&page=${Number(searchQuery.page ?? 1) + 1}` : void 0,
        items,
        previousPage: `${API_BASENAME}/search?query=${searchQuery.query}&type=${"anime"}&page=${Number(searchQuery.page ?? 1) - 1}`,
        title: "Test"
      };
    }
    async discoverListings(listingsRequest) {
      const data = await (await request.get(`${API_BASENAME}/seasonal?type=anime&fields=[id,description,bannerImage,coverImage,title,genres,format,status,averageRating,episodes,chapters,year,type]`)).json();
      const seasonal = data.seasonal.map(
        (anime) => ({
          id: anime.id,
          url: `${BASENAME}/info/${anime.id}`,
          status: anime.status === "CANCELLED" /* CANCELLED */ ? import_dist.PlaylistStatus.cancelled : anime.status === "FINISHED" /* FINISHED */ ? import_dist.PlaylistStatus.completed : anime.status === "HIATUS" /* HIATUS */ ? import_dist.PlaylistStatus.paused : anime.status === "NOT_YET_RELEASED" /* NOT_YET_RELEASED */ ? import_dist.PlaylistStatus.upcoming : anime.status === "RELEASING" /* RELEASING */ ? import_dist.PlaylistStatus.ongoing : import_dist.PlaylistStatus.unknown,
          type: import_dist.PlaylistType.video,
          title: anime.title.english ?? anime.title.romaji ?? anime.title.native ?? "Unknown",
          bannerImage: anime.bannerImage ?? anime.coverImage ?? "",
          posterImage: anime.coverImage ?? anime.bannerImage ?? ""
        })
      );
      const top = data.top.map(
        (anime) => ({
          id: anime.id,
          url: `${BASENAME}/info/${anime.id}`,
          status: anime.status === "CANCELLED" /* CANCELLED */ ? import_dist.PlaylistStatus.cancelled : anime.status === "FINISHED" /* FINISHED */ ? import_dist.PlaylistStatus.completed : anime.status === "HIATUS" /* HIATUS */ ? import_dist.PlaylistStatus.paused : anime.status === "NOT_YET_RELEASED" /* NOT_YET_RELEASED */ ? import_dist.PlaylistStatus.upcoming : anime.status === "RELEASING" /* RELEASING */ ? import_dist.PlaylistStatus.ongoing : import_dist.PlaylistStatus.unknown,
          type: import_dist.PlaylistType.video,
          title: anime.title.english ?? anime.title.romaji ?? anime.title.native ?? "Unknown",
          bannerImage: anime.bannerImage ?? anime.coverImage ?? "",
          posterImage: anime.coverImage ?? anime.bannerImage ?? ""
        })
      );
      const popular = data.popular.map(
        (anime) => ({
          id: anime.id,
          url: `${BASENAME}/info/${anime.id}`,
          status: anime.status === "CANCELLED" /* CANCELLED */ ? import_dist.PlaylistStatus.cancelled : anime.status === "FINISHED" /* FINISHED */ ? import_dist.PlaylistStatus.completed : anime.status === "HIATUS" /* HIATUS */ ? import_dist.PlaylistStatus.paused : anime.status === "NOT_YET_RELEASED" /* NOT_YET_RELEASED */ ? import_dist.PlaylistStatus.upcoming : anime.status === "RELEASING" /* RELEASING */ ? import_dist.PlaylistStatus.ongoing : import_dist.PlaylistStatus.unknown,
          type: import_dist.PlaylistType.video,
          title: anime.title.english ?? anime.title.romaji ?? anime.title.native ?? "Unknown",
          bannerImage: anime.bannerImage ?? anime.coverImage ?? "",
          posterImage: anime.coverImage ?? anime.bannerImage ?? ""
        })
      );
      const trending = data.trending.map(
        (anime) => ({
          id: anime.id,
          url: `${BASENAME}/info/${anime.id}`,
          status: anime.status === "CANCELLED" /* CANCELLED */ ? import_dist.PlaylistStatus.cancelled : anime.status === "FINISHED" /* FINISHED */ ? import_dist.PlaylistStatus.completed : anime.status === "HIATUS" /* HIATUS */ ? import_dist.PlaylistStatus.paused : anime.status === "NOT_YET_RELEASED" /* NOT_YET_RELEASED */ ? import_dist.PlaylistStatus.upcoming : anime.status === "RELEASING" /* RELEASING */ ? import_dist.PlaylistStatus.ongoing : import_dist.PlaylistStatus.unknown,
          type: import_dist.PlaylistType.video,
          title: anime.title.english ?? anime.title.romaji ?? anime.title.native ?? "Unknown",
          bannerImage: anime.bannerImage ?? anime.coverImage ?? "",
          posterImage: anime.coverImage ?? anime.bannerImage ?? ""
        })
      );
      return [
        {
          title: "Trending",
          type: 2 /* featured */,
          id: "trending",
          orientation: 0 /* portrait */,
          paging: {
            id: "currently-trending",
            title: "Trending",
            previousPage: void 0,
            nextPage: void 0,
            items: trending
          }
        },
        {
          title: "Seasonal",
          type: 1 /* rank */,
          id: "seasonal",
          orientation: 0 /* portrait */,
          paging: {
            id: "seasonal-anime",
            title: "Seasonal",
            previousPage: void 0,
            nextPage: void 0,
            items: seasonal
          }
        }
      ];
    }
    async playlistDetails(id) {
      const data = await (await request.get(`${API_BASENAME}/info/${id}`)).json();
      return {
        synopsis: data.description ?? "No description found.",
        genres: data.genres,
        yearReleased: data.year ?? 0,
        previews: [],
        // TODO
        altBanners: data.artwork.filter((item) => item.type === "banner" || item.type === "top_banner").map((item) => item.img),
        altPosters: data.artwork.filter((item) => item.type === "poster").map((item) => item.img),
        altTitles: Object.values(data.title).filter(Boolean),
        ratings: data.averageRating ?? 0
      };
    }
    async playlistEpisodeServer(req) {
      const sources = await getServerSources(`${req.episodeId}`);
      return {
        links: sources.sources.map((item) => ({
          url: item.url,
          quality: import_dist.PlaylistEpisodeServerQualityType.auto,
          format: import_dist.PlaylistEpisodeServerFormatType.dash
        })),
        skipTimes: [
          {
            startTime: sources.intro.start,
            endTime: sources.intro.end,
            type: import_dist.PlaylistEpisodeServerSkipType.opening
          },
          {
            startTime: sources.outro.start,
            endTime: sources.outro.end,
            type: import_dist.PlaylistEpisodeServerSkipType.ending
          }
        ],
        headers: sources.headers,
        subtitles: sources.subtitles.map((item) => ({
          url: item.url,
          name: item.label,
          format: item.url.endsWith("vtt") ? import_dist.PlaylistEpisodeServerSubtitleFormat.vtt : item.url.endsWith("ass") ? import_dist.PlaylistEpisodeServerSubtitleFormat.ass : item.url.endsWith("srt") ? import_dist.PlaylistEpisodeServerSubtitleFormat.srt : import_dist.PlaylistEpisodeServerSubtitleFormat.vtt,
          default: item.lang === "en-US" || item.lang?.toLowerCase().includes("english") ? true : false,
          autoselect: true
        }))
      };
    }
    async playlistEpisodeSources(req) {
      return [
        {
          id: "servers",
          servers: [
            {
              id: "main",
              displayName: "Main"
            }
          ],
          displayName: "Servers"
        }
      ];
    }
    async playlistEpisodes(playlistId, options) {
      const data = await (await request.get(`${API_BASENAME}/episodes?id=${playlistId}`)).json();
      const variants = [];
      for (const provider of data) {
        const pagings = [];
        const episodes = provider.episodes;
        const groups = episodes.map((_, i) => i % 12 === 0 && episodes.slice(i, i + 12)).filter(Boolean);
        for (const episodes2 of groups) {
          if (!episodes2)
            continue;
          const playlistItem = {
            id: `${playlistId}-${provider.providerId}`,
            title: `${provider.providerId} - ${episodes2[0].number}-${episodes2[episodes2.length - 1].number}`,
            items: []
          };
          for (const episode of episodes2) {
            playlistItem.items.push({
              id: `${API_BASENAME}/sources?id=${playlistId}&providerId=${provider.providerId}&watchId=${episode.id}&subType=${"sub"}&episodeNumber=${episode.number}`,
              title: episode.number.toString(),
              number: episode.number,
              description: episode.description ?? void 0,
              thumbnail: episode.img ?? void 0,
              tags: []
            });
          }
          pagings.push(playlistItem);
        }
        variants.push({
          id: `${playlistId}-${provider.providerId}`,
          title: provider.providerId,
          pagings
        });
      }
      return [
        {
          id: playlistId,
          number: 1,
          variants
        }
      ];
    }
  };
  return __toCommonJS(module_exports);
})();
