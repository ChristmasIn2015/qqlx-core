import type { UserInfo } from "../../dto/user/user";
import type { Check } from "../../schema/oa/check";
import type { Box } from "../../schema/oa/box";
import { MongodbPage, MongodbPageRes } from "../../utils/database";

export const PATH_OA_CHECK = "/qqlx/oa/box/check";
export type postCheckDto = { schema: Check };
export type postCheckRes = null;

export type CheckJoined = Check & { joinUserInfo: UserInfo; joinBox: Box };
export type getCheckDto = {
    page: MongodbPage;
    search: Check;

    /** 用户昵称或者手机号 */
    keyword: string;
};
export type getCheckRes = MongodbPageRes<CheckJoined>;

export type deleteCheckDto = { entityId: string };
export type deleteCheckRes = null;
