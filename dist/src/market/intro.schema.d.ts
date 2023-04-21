import type { MongodbBase, EnumMapOption } from "qqlx-cdk";
export declare enum ENUM_INTRO {
    TITLE = 1,
    DESC = 2,
    IMAGE = 3,
    VIDEO = 4
}
declare const MAP_ENUM_INTRO: Map<ENUM_INTRO, EnumMapOption>;
export { MAP_ENUM_INTRO };
/** 说明内容 */
export type Intro = {
    /** @foreign */
    groupId: string;
    type: ENUM_INTRO;
    content: string;
} & MongodbBase;
