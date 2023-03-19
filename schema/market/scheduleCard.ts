import type { MongodbBase } from "../../utils/database";

import { ENUM_PROJECT } from "./project";

/** 超级管理员 为某个产品 发布时长卡 */
export type ScheduleCard = {
    title: string;
    desc: string;
    scope: ENUM_PROJECT;

    // 创建后不允许修改，单位：毫秒
    schedule: number;
    amount: number;

    isDisabled: boolean;
} & MongodbBase;
