import { User } from "../user/entity";
import { MongodbQuery } from "../utils/database";

import { SubjectRole } from "./enum";
import { Subject, UserSubjectRole, Warehouse, SubjectBoardcast, SubjectContact } from "./entity";

export const SUBJECT_PATH = "/qqlx/subject";
export type postSubjectDto = Subject;
export type postSubjectRes = null;

export type getSubjectDto = {};
export type getSubjectRes = MongodbQuery<Subject>;

export type patchSubjectDto = Subject;
export type patchSubjectRes = Subject;

export const SUBJECT_ROLE_PATH = "/qqlx/subject/role";
export type SubjectJoined = Subject & { joinRole: UserSubjectRole };
export type postSubjectRoleDto = { askerId: string; role: SubjectRole };
export type postSubjectRoleRes = null;

export type getSubjectRoleDto = null;
export type getSubjectRoleRes = Array<{ joinUser: User } & UserSubjectRole>;

export type deleteSubjectRoleDto = { roleId: string };
export type deleteSubjectRoleRes = null;

export const SUBJECT_WAREHOUSE_PATH = "/qqlx/subject/warehouse";
export type postWarehouseDto = Warehouse;
export type postWarehouseRes = null;

export type getWarehouseDto = {};
export type getWarehouseRes = MongodbQuery<Warehouse>;

export type patchWarehouseDto = Warehouse;
export type patchWarehouseRes = Warehouse;

export const SUBJECT_BOARDCAST_PATH = "/qqlx/subject/boardcast";
export type postBoardcastDto = SubjectBoardcast;
export type postBoardcastRes = null;

export type getBoardcastDto = {};
export type getBoardcastRes = MongodbQuery<SubjectBoardcast>;

export type patchBoardcastDto = SubjectBoardcast;
export type patchBoardcastRes = null;

export type deleteBoardcastDto = { boardcastId: string };
export type deleteBoardcastRes = null;

export const SUBJECT_CONTACT_PATH = "/qqlx/subject/contact";
export type postContactDto = SubjectContact[];
export type postContactRes = null;

export type getContactDto = { MongodbQuery: MongodbQuery<null>; SubjectContact: SubjectContact };
export type getContactRes = MongodbQuery<SubjectContact>;

export type patchContactDto = SubjectContact;
export type patchContactRes = null;
