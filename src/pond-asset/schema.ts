import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema"

export enum ENUM_ASSET {
    CORP = 1001,
    ESTATE,
    FUND_ACCOUNT,

    /** 便签，用于标记产地、材质等... */
    MARK,
}

/** 法人的资产
 * @name 全称
 * @address 地址
 * @contact 联系方式
*/
export type Asset = PgBaseSchema & _Owner & {
    type: ENUM_ASSET;
    name: VARCHAR50_PG;
    desc: VARCHAR255_PG;
    address: VARCHAR255_PG;
    contact: VARCHAR255_PG;
    remark: VARCHAR255_PG;
};
