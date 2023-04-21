import type { MongodbBase, EnumMapOption } from "qqlx-cdk";
import { ENUM_PROJECT } from "./project.schema";

export enum ENUM_INTRO {
    TITLE = 1,
    DESC,
    IMAGE,
    VIDEO,
}
const MAP_ENUM_INTRO = new Map<ENUM_INTRO, EnumMapOption>();
MAP_ENUM_INTRO.set(ENUM_INTRO.TITLE, { value: ENUM_INTRO.TITLE, text: "标题" });
MAP_ENUM_INTRO.set(ENUM_INTRO.DESC, { value: ENUM_INTRO.DESC, text: "描述" });
MAP_ENUM_INTRO.set(ENUM_INTRO.IMAGE, { value: ENUM_INTRO.IMAGE, text: "图片" });
MAP_ENUM_INTRO.set(ENUM_INTRO.VIDEO, { value: ENUM_INTRO.VIDEO, text: "视频" });
export { MAP_ENUM_INTRO };

/** 说明内容 */
export type Intro = {
    /** @foreign */
    groupId: string;

    type: ENUM_INTRO;
    content: string;
} & MongodbBase;
