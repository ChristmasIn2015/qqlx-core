import type { Page, PageRes } from "qqlx-cdk";
import type { Media } from "./media.schema";
export declare const PATH_MEDIA = "/qqlx/media";
export type postMediaDto = {
    excels: Media[];
};
export type postMediaRes = null;
export type getMediaDto = {
    search: Media;
    page: Page;
    keyword?: string;
};
export type getMediaRes = PageRes<Media>;
export type deleteMediaDto = {
    entityId: string;
};
export type deleteMediaRes = null;
