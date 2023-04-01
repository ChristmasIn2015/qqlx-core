import type { UserInfo } from "../user/user.dto";
import type { BrandRole } from "./role.schema";
export declare const PATH_BRAND_ROLE = "/qqlx/brand/role";
export type postBrandRoleDto = BrandRole;
export type postBrandRoleRes = null;
export type BrandRoleJoined = BrandRole & {
    joinUserInfo: UserInfo;
};
export type getBrandRoleDto = null;
export type getBrandRoleRes = BrandRoleJoined[];
export type deleteBrandRoleDto = {
    entityId: string;
};
export type deleteBrandRoleRes = null;
