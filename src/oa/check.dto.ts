import { Page, PageRes } from "qqlx-cdk";

import type { UserInfo } from "../user/user.dto";
import type { Check } from "./check.schema";
import type { Box } from "./box.schema";

export const PATH_OA_CHECK = "/qqlx/oa/box/check";
export type postCheckDto = { schema: Check };
export type postCheckRes = null;

export type CheckJoined = Check & { joinUserInfo: UserInfo; joinBox: Box };
export type getCheckDto = {
    page: Page;
    search: Check;

    /** 用户昵称或者手机号 */
    keyword: string;
};
export type getCheckRes = PageRes<CheckJoined>;

export type deleteCheckDto = { entityId: string };
export type deleteCheckRes = null;
