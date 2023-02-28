import { MongodbPage, MongodbPageRes } from "../../utils/database";

import type { Announce } from "../../schema/brand/announce";

export const PATH_ANNOUNCE = "/qqlx/corp/announce";
export type postAnnounceDto = Announce;
export type postAnnounceRes = null;

export type getAnnounceDto = null;
export type getAnnounceRes = Announce[];

export type patchAnnounceDto = Announce;
export type patchAnnounceRes = null;

export type deleteAnnounceDto = Announce;
export type deleteAnnounceRes = null;
