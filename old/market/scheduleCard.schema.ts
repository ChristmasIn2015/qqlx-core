import type { MongodbBase } from "qqlx-cdk";

import { ENUM_PROJECT } from "./project.schema";

/** 超级管理员 为某个产品 发布时长卡 */
export type ScheduleCard = {
    scope: ENUM_PROJECT;
    title: string;
    desc: string;

    // 创建后不允许修改，单位：毫秒
    schedule: number;
    amount: number;

    isDisabled: boolean;
} & MongodbBase;
