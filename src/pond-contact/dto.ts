import { INTEGER_PG } from "../../_/db.pg";
import { Page, PageRes } from "../../_/search";
import type { Contact, ContactGroup, ContactGroupRelation } from "./schema";

export const PATH_POND_CONTACT_GROUP = "/pond/contact/group";
export type getPondContactGroupDto = null;
export type getPondContactGroupRes = ContactGroup[];
export type putPondContactGroupDto = ContactGroup;
export type putPondContactGroupRes = ContactGroup;
export type disablePondContactGroupDto = { entityId: INTEGER_PG };
export type disablePondContactGroupRes = null;

export const PATH_POND_CONTACT_GROUP_RELATION = "/pond/contact/group/relation";
export type postPondContactGroupRelationDto = { oid: INTEGER_PG; schemaList: Contact[] };
export type postPondContactGroupRelationRes = null;
export type getPondContactGroupRelationDto = { oid: INTEGER_PG; page: Page<Contact> };
export type getPondContactGroupRelationRes = { page: PageRes<ContactGroupRelation> };
export type deletePondContactGroupRelationDto = { entityId: INTEGER_PG };
export type deletePondContactGroupRelationRes = null;

export const PATH_POND_CONTACT = "/pond/contact";
export type putPondContactDto = Contact;
export type putPondContactRes = Contact;
export type disablePondContactDto = { entityId: INTEGER_PG };
export type disablePondContactRes = null;