import { MongodbQuery } from "../utils/database";

import { User } from "./entity";

export const USER_PATH = "/qqlx/user";
export type postUserWeChatDto = { wechatResponseCode: string };
export type postUserWeChatRes = { jwt: string };

export type getUserDto = { MongodbQuery?: MongodbQuery<null>; ids?: string[] };
export type getUserRes = MongodbQuery<User>;

export type patchUserDto = User;
export type patchUserRes = User;
