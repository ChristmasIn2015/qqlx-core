import { MongodbPage, MongodbPageRes } from "../../utils/database";

import type { Contact } from "../../schema/brand/contact";

export const PATH_CONTACT = "/qqlx/corp/contact";
export type postContactDto = { excels: Contact[] };
export type postContactRes = null;

export type getContactDto = {
	page: MongodbPage;
	search: Contact;

	/** 有时候会只输入一个关键词，来搜索客户 */
	keyword?: string;
};
export type getContactRes = MongodbPageRes<Contact>;

export type patchContactDto = Contact;
export type patchContactRes = null;

export type deleteContactDto = { contactId: string };
export type deleteContactRes = null;
