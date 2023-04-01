import type { Announce } from "./announce.schema";

export const PATH_BRAND_ANNOUNCE = "/qqlx/brand/announce";
export type postAnnounceDto = Announce;
export type postAnnounceRes = null;

export type getAnnounceDto = null;
export type getAnnounceRes = Announce[];

export type patchAnnounceDto = Announce;
export type patchAnnounceRes = null;

export type deleteAnnounceDto = Announce;
export type deleteAnnounceRes = null;
