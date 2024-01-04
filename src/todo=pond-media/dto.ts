import { INTEGER_PG } from "../../_/db.pg";
import { Page, PageRes } from "../../_/search";
import type { PondMedia, PondMediaGroup, } from "./schema";

export const PATH_POND_MEDIA_GROUP = "/pond/media/group";
export const DROPLET_POND_MEDIA_GROUP = "pond:media:group";
export type getPondPondMediaGroupDto = null;
export type getPondPondMediaGroupRes = PondMediaGroup[];
export type putPondPondMediaGroupDto = PondMediaGroup;
export type putPondPondMediaGroupRes = null;
export type disablePondPondMediaGroupDto = { entityId: INTEGER_PG };
export type disablePondPondMediaGroupRes = null;

export const PATH_POND_MEDIA = "/pond/media";
export const DROPLET_POND_MEDIA = "pond:media";
export type getPondPondContactDto = Page<PondMedia>;
export type getPondPondContactRes = PageRes<PondMedia>;
export type putPondPondMediaDto = { schema: PondMedia };
export type putPondPondMediaRes = null;
export type disablePondPondMediaDto = { entityId: INTEGER_PG };
export type disablePondPondMediaRes = null;