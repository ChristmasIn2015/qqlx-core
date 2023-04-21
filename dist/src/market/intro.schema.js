"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP_ENUM_INTRO = exports.ENUM_INTRO = void 0;
var ENUM_INTRO;
(function (ENUM_INTRO) {
    ENUM_INTRO[ENUM_INTRO["TITLE"] = 1] = "TITLE";
    ENUM_INTRO[ENUM_INTRO["DESC"] = 2] = "DESC";
    ENUM_INTRO[ENUM_INTRO["IMAGE"] = 3] = "IMAGE";
    ENUM_INTRO[ENUM_INTRO["VIDEO"] = 4] = "VIDEO";
})(ENUM_INTRO = exports.ENUM_INTRO || (exports.ENUM_INTRO = {}));
const MAP_ENUM_INTRO = new Map();
exports.MAP_ENUM_INTRO = MAP_ENUM_INTRO;
MAP_ENUM_INTRO.set(ENUM_INTRO.TITLE, { value: ENUM_INTRO.TITLE, text: "标题" });
MAP_ENUM_INTRO.set(ENUM_INTRO.DESC, { value: ENUM_INTRO.DESC, text: "描述" });
MAP_ENUM_INTRO.set(ENUM_INTRO.IMAGE, { value: ENUM_INTRO.IMAGE, text: "图片" });
MAP_ENUM_INTRO.set(ENUM_INTRO.VIDEO, { value: ENUM_INTRO.VIDEO, text: "视频" });
