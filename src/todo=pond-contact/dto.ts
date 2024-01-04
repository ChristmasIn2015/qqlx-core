import { INTEGER_PG } from "../../_/db.pg";
import { Page, PageRes } from "../../_/search";
import type { PondContact, PondContactGroup } from "./schema";

export const PATH_POND_CONTACT_GROUP = "/pond/contact/group";
export const DROPLET_POND_CONTACT_GROUP = "pond:contact:group";
export type getPondPondContactGroupDto = null;
export type getPondPondContactGroupRes = PondContactGroup[];
export type putPondPondContactGroupDto = PondContactGroup;
export type putPondPondContactGroupRes = null;
export type disablePondPondContactGroupDto = { entityId: INTEGER_PG };
export type disablePondPondContactGroupRes = null;

export const PATH_POND_CONTACT = "/pond/contact";
export const DROPLET_POND_CONTACT = "pond:contact";
export type getPondPondContactDto = Page<PondContact>;
export type getPondPondContactRes = PageRes<PondContact>;
export type putPondPondContactDto = PondContact;
export type putPondPondContactRes = null;
export type disablePondPondContactDto = { entityId: INTEGER_PG };
export type disablePondPondContactRes = null;