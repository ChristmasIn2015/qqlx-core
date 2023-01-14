import { ObjectId } from "mongodb";

import { User } from "../user/entity";
import { MongodbQuery } from "../utils/database";

import { Subject, UserSubjectRole, Warehouse, SubjectBoardcast, SubjectContact } from "./entity";

export type postSubjectDto = Subject;
export type postSubjectRes = null;

export type getShopDto = { MongodbQuery: MongodbQuery<null> };
export type getShopRes = MongodbQuery<Subject>;

export type patchShopDto = Subject;
export type patchShopRes = Subject;

export type postSubjectRoleDto = { askerId: ObjectId };
export type postSubjectRoleRes = null;

export type getSubjectRoleDto = { MongodbQuery: MongodbQuery<null> };
export type getSubjectRoleRes = Array<{ joinUser: User } & UserSubjectRole>;

export type postWarehouseDto = Warehouse;
export type postWarehouseRes = null;

export type getWarehouseDto = { MongodbQuery: MongodbQuery<null> };
export type getWarehouseRes = MongodbQuery<Warehouse>;

export type patchWarehouseDto = Warehouse;
export type patchWarehouseRes = Warehouse;

export type postBoardcastDto = SubjectBoardcast;
export type postBoardcastRes = null;

export type getBoardcastDto = { MongodbQuery: MongodbQuery<null> };
export type getBoardcastRes = MongodbQuery<SubjectBoardcast>;

export type patchBoardcastDto = SubjectBoardcast;
export type patchBoardcastRes = null;

export type deleteWarehouseDto = { boardcastId: ObjectId };
export type deleteWarehouseRes = null;

export type postContactDto = SubjectContact;
export type postContactRes = null;

export type getContactDto = { MongodbQuery: MongodbQuery<null>; SubjectContact: SubjectContact };
export type getContactRes = MongodbQuery<SubjectContact>;

export type patchContactDto = SubjectContact;
export type patchContactRes = null;
