import type { MongodbBase, EnumMapOption } from "qqlx-cdk";

export enum ENUM_MEDIA {
    /** 腾讯云图片 */
    TECENT_IMAGE = 1,
    /** 腾讯云视频 */
    TECENT_VIDEO,
}

const MAP_ENUM_MEDIA = new Map<ENUM_MEDIA, EnumMapOption>();
MAP_ENUM_MEDIA.set(ENUM_MEDIA.TECENT_IMAGE, { value: ENUM_MEDIA.TECENT_IMAGE, text: "图片（腾讯云）" });
MAP_ENUM_MEDIA.set(ENUM_MEDIA.TECENT_VIDEO, { value: ENUM_MEDIA.TECENT_VIDEO, text: "视频（腾讯云）" });
export { MAP_ENUM_MEDIA };

export type Media = {
    type: ENUM_MEDIA;
    url: string;
} & MongodbBase;
