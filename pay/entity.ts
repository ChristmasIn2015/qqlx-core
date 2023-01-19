import { MongodbBase } from "../utils/database";
import { ProjectEnum } from "../pmo/enum";

import { StatusWeChatPay } from "./enum";

/** 超级管理员 为某个产品 发布时长卡 */
export type ScheduleCard = {
	projectEnum: ProjectEnum;
	isDisabled: boolean;

	title: string;
	desc: string;

	/** 时长 */
	schedule: number;
	amount: number;
} & MongodbBase;

/** 某个主体 购买的时长卡 */
export type ScheduleCardOrder = {
	subjectId: string;
	cardId: string;
	statusWeChatPay: StatusWeChatPay;
} & MongodbBase;
