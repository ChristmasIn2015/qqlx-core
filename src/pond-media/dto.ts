import { INTEGER_PG } from "../../_/db.pg";
import { Page, PageRes } from "../../_/search";
import type { Media, MediaGroup, MediaGroupRelation } from "./schema";

export const PATH_POND_MEDIA = "/pond/media";
export type putPondMediaDto = { schema: Media };
export type putPondMediaRes = { entity: Media };
export type disablePondMediaDto = { entityId: INTEGER_PG };
export type disablePondMediaRes = null;

export const PATH_POND_MEDIA_GROUP = "/pond/media/group";
export type getPondMediaGroupDto = null;
export type getPondMediaGroupRes = MediaGroup[];
export type putPondMediaGroupDto = MediaGroup;
export type putPondMediaGroupRes = MediaGroup;
export type disablePondMediaGroupDto = { entityId: INTEGER_PG };
export type disablePondMediaGroupRes = null;

export const PATH_POND_MEDIA_GROUP_RELATION = "/pond/media/group/relation";
export type postPondMediaGroupRelationDto = { oid: INTEGER_PG; schemaList: Media[] };
export type postPondMediaGroupRelationRes = null;
export type getPondMediaGroupRelationDto = { oid: INTEGER_PG; page: Page<Media> };
export type getPondMediaGroupRelationRes = { page: PageRes<MediaGroupRelation> };
export type deletePondMediaGroupRelationDto = { entityId: INTEGER_PG };
export type deletePondMediaGroupRelationRes = null;