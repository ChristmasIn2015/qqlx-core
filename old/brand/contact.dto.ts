import { Page, PageRes } from "qqlx-cdk";

import type { Contact } from "./contact.schema";

export const PATH_BRAND_CONTACT = "/qqlx/brand/contact";
export type postContactDto = { excels: Contact[] };
export type postContactRes = null;

export type getContactDto = {
    page: Page;
    search: Contact;

    /** 有时候会只输入一个关键词，来搜索客户 */
    keyword?: string;
};
export type getContactRes = PageRes<Contact>;

export type patchContactDto = Contact;
export type patchContactRes = null;

export type deleteContactDto = { contactId: string };
export type deleteContactRes = null;
