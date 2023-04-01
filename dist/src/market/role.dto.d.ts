import type { UserInfo } from "../user/user.dto";
import type { MarketRole } from "./role.schema";
export declare const PATH_MARKET_ROLE = "/qqlx/market/role";
export type postMarketRoleDto = MarketRole;
export type postMarketRoleRes = null;
export type MarketRoleJoined = MarketRole & {
    joinUserInfo: UserInfo;
};
export type getMarketRoleDto = null;
export type getMarketRoleRes = MarketRoleJoined[];
export type deleteMarketRoleDto = {
    entityId: string;
};
export type deleteMarketRoleRes = null;
