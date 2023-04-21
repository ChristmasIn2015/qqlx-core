import type { MongodbBase, EnumMapOption } from "qqlx-cdk";
export declare enum ENUM_MEDIA {
    /** 腾讯云图片 */
    TECENT_IMAGE = 1,
    /** 腾讯云视频 */
    TECENT_VIDEO = 2
}
declare const MAP_ENUM_MEDIA: Map<ENUM_MEDIA, EnumMapOption>;
export { MAP_ENUM_MEDIA };
export type Media = {
    type: ENUM_MEDIA;
    url: string;
} & MongodbBase;
