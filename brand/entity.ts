import { ObjectId } from "mongodb";
import { MongodbBase } from "../utils/database";
import { SubjectType, SubjectRole } from "./enum";

/** 经营主体 */
export type Subject = {
	type: SubjectType;

	/** 法人 */
	corporation: string;
	/** 单位名称 */
	name: string;
	/** 经营地址 */
	address: string;
	/** 联系方式 */
	contact: string;
	remark: string;
} & MongodbBase;

/** @related 经营主体 + 用户 + 角色 */
export type UserSubjectRole = {
	userId: ObjectId;
	subjectId: ObjectId;
	role: SubjectRole;
} & MongodbBase;

/** 经营主体的仓库 */
export type Warehouse = {
	subjectId: ObjectId;
	name: string;
	address: string;
} & MongodbBase;

/** 经营主体的公告（放银行等信息） */
export type SubjectBoardcast = {
	subjectId: ObjectId;
	title: string;
	content: string;
} & MongodbBase;

/** 经营主体的联系人 */
export type SubjectContact = {
	subjectId: ObjectId;
	isDisabled: boolean;
} & (Subject & MongodbBase);
