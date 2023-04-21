"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP_ENUM_MEDIA = exports.ENUM_MEDIA = void 0;
var ENUM_MEDIA;
(function (ENUM_MEDIA) {
    /** 腾讯云图片 */
    ENUM_MEDIA[ENUM_MEDIA["TECENT_IMAGE"] = 1] = "TECENT_IMAGE";
    /** 腾讯云视频 */
    ENUM_MEDIA[ENUM_MEDIA["TECENT_VIDEO"] = 2] = "TECENT_VIDEO";
})(ENUM_MEDIA = exports.ENUM_MEDIA || (exports.ENUM_MEDIA = {}));
const MAP_ENUM_MEDIA = new Map();
exports.MAP_ENUM_MEDIA = MAP_ENUM_MEDIA;
MAP_ENUM_MEDIA.set(ENUM_MEDIA.TECENT_IMAGE, { value: ENUM_MEDIA.TECENT_IMAGE, text: "图片（腾讯云）" });
MAP_ENUM_MEDIA.set(ENUM_MEDIA.TECENT_VIDEO, { value: ENUM_MEDIA.TECENT_VIDEO, text: "视频（腾讯云）" });
